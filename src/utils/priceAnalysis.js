export const analyzeItemPrices = (items, category) => {
  const categoryItems = category === 'All' 
    ? items 
    : items.filter(item => item.itemCategory === category);

  const itemsWithVariance = categoryItems.map(item => ({
    ...item,
    priceVariance: calculatePriceVariance(item.priceHistory)
  }));

  const sortedByVariance = itemsWithVariance.sort((a, b) => b.priceVariance - a.priceVariance);
  const topVaryingPrices = sortedByVariance.slice(0, 8);

  const staplePrices = categoryItems
    .filter(item => item.isStaple)
    .sort((a, b) => a.averagePrice - b.averagePrice)
    .slice(0, 8);

  return { topVaryingPrices, staplePrices };
};

const calculatePriceVariance = (priceHistory) => {
  if (!priceHistory || priceHistory.length < 2) return 0;

  const prices = priceHistory.map(entry => entry.price);
  const mean = prices.reduce((sum, price) => sum + price, 0) / prices.length;
  const squaredDifferences = prices.map(price => Math.pow(price - mean, 2));
  const variance = squaredDifferences.reduce((sum, sqDiff) => sum + sqDiff, 0) / prices.length;

  return variance;
};
