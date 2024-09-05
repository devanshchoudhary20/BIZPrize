const moment = require('moment');

// Load the data
const loadData = async (filePath) => {
    try {
        const response = await fetch(`https://storage.googleapis.com/clone-206ad.appspot.com/items/${filePath}`);
        return await response.json();
    } catch (error) {
        console.error("Error fetching file:", error);
        return null;
    }
};

// Normalize data by hour
const normalizeDataByHour = (data) => {
    const hourlyData = {};

    data.forEach((item) => {
        const time = moment(item.createdAt).startOf('hour').format();
        const price = parseFloat(item.sellingPrice.replace('₹', ''));

        if (!hourlyData[time]) {
            hourlyData[time] = { total: 0, count: 0 };
        }

        hourlyData[time].total += price;
        hourlyData[time].count += 1;
    });

    return Object.keys(hourlyData).map(hour => ({
        time: hour,
        price: hourlyData[hour].total / hourlyData[hour].count
    }));
};

// Calculate average price per weather condition
const calculateAveragePriceByWeather = (data) => {
  const weatherBuckets = {};

  data.forEach((item) => {
      if (item.weatherDescription) {
          const weather = item.weatherDescription.toLowerCase();
          if (!weatherBuckets[weather]) {
              weatherBuckets[weather] = { 
                  prices: [], 
                  temperatures: [],
                  count: 0 
              };
          }
          const price = parseFloat(item.sellingPrice.replace('₹', ''));
          if (!isNaN(price)) {
              weatherBuckets[weather].prices.push(price);
          }
          if (item.temperature) {
              weatherBuckets[weather].temperatures.push(item.temperature);
          }
          weatherBuckets[weather].count += 1;
      }
  });

  const analysis = {};
  for (const weather in weatherBuckets) {
      const prices = weatherBuckets[weather].prices;
      const temperatures = weatherBuckets[weather].temperatures;
      analysis[weather] = {
          averagePrice: prices.length > 0 ? prices.reduce((a, b) => a + b) / prices.length : null,
          minPrice: prices.length > 0 ? Math.min(...prices) : null,
          maxPrice: prices.length > 0 ? Math.max(...prices) : null,
          priceStdDev: calculateStdDev(prices),
          averageTemperature: temperatures.length > 0 ? temperatures.reduce((a, b) => a + b) / temperatures.length : null,
          count: weatherBuckets[weather].count
      };
  }

  return analysis;
};

// Day of the week analysis
const analyzeDayOfWeek = (normalizedData) => {
  const dayOfWeekData = {};
  const daysOrder = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  normalizedData.forEach((item) => {
      const dayOfWeek = moment(item.time).format('dddd');

      if (!dayOfWeekData[dayOfWeek]) {
          dayOfWeekData[dayOfWeek] = { 
              prices: [],
              count: 0 
          };
      }

      dayOfWeekData[dayOfWeek].prices.push(item.price);
      dayOfWeekData[dayOfWeek].count += 1;
  });

  const analysis = {};
  daysOrder.forEach(day => {
      if (dayOfWeekData[day]) {
          const prices = dayOfWeekData[day].prices;
          analysis[day] = {
              averagePrice: prices.reduce((a, b) => a + b) / prices.length,
              minPrice: Math.min(...prices),
              maxPrice: Math.max(...prices),
              priceStdDev: calculateStdDev(prices),
              count: dayOfWeekData[day].count
          };
      } else {
          analysis[day] = {
              averagePrice: null,
              minPrice: null,
              maxPrice: null,
              priceStdDev: null,
              count: 0
          };
      }
  });

  return analysis;
};

const calculateStdDev = (array) => {
  const n = array.length;
  if (n < 2) return null;
  const mean = array.reduce((a, b) => a + b) / n;
  const variance = array.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (n - 1);
  return Math.sqrt(variance);
};

// Daily max/min price analysis
const analyzeDailyMaxMin = (normalizedData) => {
    const dailyData = {};

    normalizedData.forEach((item) => {
        const day = moment(item.time).startOf('day').format('YYYY-MM-DD');

        if (!dailyData[day]) {
            dailyData[day] = { max: item.price, min: item.price };
        } else {
            dailyData[day].max = Math.max(dailyData[day].max, item.price);
            dailyData[day].min = Math.min(dailyData[day].min, item.price);
        }
    });

    return dailyData;
};

// Time range analysis
const analyzeTimeRange = (normalizedData) => {
    const timeRangeData = {};

    normalizedData.forEach((item) => {
        const hour = moment(item.time).hour();
        const timeRange = `${hour}-${hour + 2}`;

        if (!timeRangeData[timeRange]) {
            timeRangeData[timeRange] = [];
        }

        timeRangeData[timeRange].push(item.price);
    });

    const priceVarianceByRange = {};
    for (const range in timeRangeData) {
        const prices = timeRangeData[range];
        const maxPrice = Math.max(...prices);
        const minPrice = Math.min(...prices);
        priceVarianceByRange[range] ={ maxPrice,minPrice};
    }

    return priceVarianceByRange;
};

const analyzeTimeRangeVolatility = (normalizedData) => {
    // Initialize time ranges
    const timeRanges = {};
    for (let i = 0; i < 24; i += 2) {
        timeRanges[`${i}-${(i + 2) % 24}`] = [];
    }

    // Group data by 2-hour time ranges
    normalizedData.forEach((item) => {
        const hour = moment(item.time).hour();
        const timeRange = `${hour - (hour % 2)}-${(hour + 2 - (hour % 2)) % 24}`;
        timeRanges[timeRange].push(item.price);
    });

    // Calculate volatility and direction for each time range
    const volatilityByRange = {};
    for (const [range, prices] of Object.entries(timeRanges)) {
        if (prices.length > 1) {
            let totalAbsChange = 0;
            let totalDirectionalChange = 0;
            let increases = 0;

            for (let i = 1; i < prices.length; i++) {
                const change = prices[i] - prices[i-1];
                totalAbsChange += Math.abs(change);
                totalDirectionalChange += change;
                if (change > 0) increases++;
            }

            const avgAbsChange = totalAbsChange / (prices.length - 1);
            const avgDirectionalChange = totalDirectionalChange / (prices.length - 1);
            const percentIncrease = (increases / (prices.length - 1)) * 100;

            // Calculate standard deviation
            let sumSquaredDiff = 0;
            for (let i = 1; i < prices.length; i++) {
                const diff = Math.abs(prices[i] - prices[i-1]) - avgAbsChange;
                sumSquaredDiff += diff * diff;
            }
            const stdDev = Math.sqrt(sumSquaredDiff / (prices.length - 1));

            volatilityByRange[range] = {
                avgAbsChange,
                avgDirectionalChange,
                stdDev,
                percentIncrease,
                dataPoints: prices.length
            };
        } else {
            volatilityByRange[range] = {
                avgAbsChange: 0,
                avgDirectionalChange: 0,
                stdDev: 0,
                percentIncrease: 0,
                dataPoints: prices.length
            };
        }
    }

    // Sort ranges by volatility (average absolute change)
    const sortedVolatility = Object.entries(volatilityByRange)
        .sort(([, a], [, b]) => b.avgAbsChange - a.avgAbsChange);

    return sortedVolatility;
};

// Example usage





// Main function
const analyzeTomatoData = async (filename) => {
    try {
        const data = await loadData(filename);

        if (data && data.length > 0) {
            const normalizedData = normalizeDataByHour(data);
            const volatilityByRange = analyzeTimeRangeVolatility(normalizedData);
            const averagePriceByWeather = calculateAveragePriceByWeather(data);
            const averagePriceByDay = analyzeDayOfWeek(normalizedData);
            const dailyMaxMinPrices = analyzeDailyMaxMin(normalizedData);
            const priceVarianceByRange = analyzeTimeRange(normalizedData);

            return {
                volatilityByRange: volatilityByRange || [],
                averagePriceByWeather: averagePriceByWeather || {},
                averagePriceByDay: averagePriceByDay || {},
                dailyMaxMinPrices: dailyMaxMinPrices || {},
                priceVarianceByRange: priceVarianceByRange || {}
            };
        }
    } catch (error) {
        console.error("Error in analyzeTomatoData:", error);
    }

    // Return default empty object if anything goes wrong
    return {
        volatilityByRange: [],
        averagePriceByWeather: {},
        averagePriceByDay: {},
        dailyMaxMinPrices: {},
        priceVarianceByRange: {}
    };
};

// Export only the main function
export { analyzeTomatoData };
