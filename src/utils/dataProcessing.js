export const fetchItemData = async (selectedItem) => {
    try {
        const response = await fetch(`http://127.0.0.1:8080/${selectedItem}`);
        return response.json();
    } catch (error) {
        console.error("Error fetching item data:", error);
        return [];
    }
};

export const processItemData = (data) => {
    if (!Array.isArray(data) || data.length === 0) {
        return [];
    }
    const sortedData = data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    const convertedData = convertDate(sortedData);
    return replaceNaNWithAverage(convertedData);
};

export const calculateClusterData = (data, timeFrame) => {
    if (!Array.isArray(data) || data.length === 0) {
        return [];
    }
    const hours = getHoursFromTimeFrame(timeFrame);
    return ClusterLogic(data, hours);
};

// Helper functions

const convertDate = (data) => {
    return data.map(item => ({
        ...item,
        visualDate: new Date(item.createdAt).toLocaleString(),
        sellingPrice: parseFloat(item.sellingPrice?.replace('₹', '')) || 0
    }));
};

const replaceNaNWithAverage = (data) => {
    const validPrices = data.filter(item => !isNaN(item.sellingPrice));
    const averagePrice = validPrices.length > 0
        ? validPrices.reduce((sum, item) => sum + item.sellingPrice, 0) / validPrices.length
        : 0;

    return data.map(item => ({
        ...item,
        sellingPrice: isNaN(item.sellingPrice) ? averagePrice : item.sellingPrice
    }));
};

const ClusterLogic = (data, hours) => {
    if (data.length === 0) return [];

    const clusters = [];
    let currentCluster = [];
    let clusterStartTime = new Date(data[0].createdAt);

    data.forEach((item, index) => {
        const itemTime = new Date(item.createdAt);
        if (itemTime - clusterStartTime <= hours * 60 * 60 * 1000) {
            currentCluster.push(item);
        } else {
            if (currentCluster.length > 0) {
                clusters.push(processCluster(currentCluster));
            }
            currentCluster = [item];
            clusterStartTime = itemTime;
        }

        if (index === data.length - 1 && currentCluster.length > 0) {
            clusters.push(processCluster(currentCluster));
        }
    });

    return clusters;
};

const processCluster = (cluster) => {
    const startTime = new Date(cluster[0].createdAt).toLocaleString();
    const endTime = new Date(cluster[cluster.length - 1].createdAt).toLocaleString();
    const maxSellPrice = Math.max(...cluster.map(item => item.sellingPrice));
    const minSellPrice = Math.min(...cluster.map(item => item.sellingPrice));

    return {
        startTime,
        endTime,
        maxSellPrice,
        minSellPrice
    };
};

const getHoursFromTimeFrame = (timeFrame) => {
    switch (timeFrame) {
        case '4h':
            return 4;
        case '8h':
            return 8;
        case 'day':
            return 24;
        case 'week':
            return 168;
        default:
            return 24;
    }
};
