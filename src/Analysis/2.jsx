import React, { useState, useEffect, useMemo } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import SearchDropdown from '../Components/Search';
import { fetchItemData, processItemData, calculateClusterData, weatherDescription } from '../utils/dataProcessing';
import { TimeFrameSelector, PriceAnalysisCard } from '../Components/AnalysisComponents';
import ItemSelector from '../Components/ItemTabs';
import { motion } from 'framer-motion';
import { analyzeTomatoData } from '../utils/priceAnalysis';
import PriceInsightsComponent from '../Components/PriceInsight';

const Analysis2 = () => {
    const [timeFrame, setTimeFrame] = useState('all');
    const [selectedItem, setSelectedItem] = useState(null);
    const [itemData, setItemData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [volatilityData, setVolatilityData] = useState([]);

    useEffect(() => {
        if (selectedItem) {
            setLoading(true);
            setError(null);
            fetchItemData(selectedItem)
                .then(async (data) => {
                    setItemData(data);
                    try {
                        const analyzed = await analyzeTomatoData(selectedItem);
                        setVolatilityData(analyzed.volatilityByRange);
                    } catch (err) {
                        console.error("Error analyzing data:", err);
                        setError("Failed to analyze item data. Please try again.");
                    }
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Error fetching item data:", err);
                    setError("Failed to fetch item data. Please try again.");
                    setLoading(false);
                });
        }
    }, [selectedItem]);

    const processedData = useMemo(() => processItemData(itemData), [itemData]);
    const clusterData = useMemo(() => calculateClusterData(processedData, timeFrame), [processedData, timeFrame]);
    const weatherDescriptions = useMemo(() => weatherDescription(processedData), [processedData]);
    

    const chartData = timeFrame === 'all' ? processedData : clusterData;
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full mb-4">
                <ItemSelector onFileSelect={setSelectedItem} />
            </div>
            <div className="mb-4">
                <SearchDropdown onFileSelect={setSelectedItem} />
            </div>

            {selectedItem && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center space-x-4 bg-gradient-to-r from-purple-100 to-indigo-100 p-4 rounded-lg shadow-md mb-6"
                >
                    <motion.img
                        src={itemData[0]?.imageUrl || '/placeholder-image.jpg'}
                        alt={itemData[0]?.title || 'Selected Item'}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                        whileHover={{ scale: 1.1 }}
                    />
                    <div>
                        <motion.h2
                            className="text-xl sm:text-2xl font-bold text-gray-800"
                            layoutId="item-title"
                        >
                            {itemData[0]?.title || 'Selected Item'}
                        </motion.h2>
                        <motion.p
                            className="text-sm sm:text-md text-gray-600"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Analysis {timeFrame==='all'?' of Whole Period':` for Every ${timeFrame}`}
                        </motion.p>
                    </div>
                </motion.div>
            )}

            <TimeFrameSelector timeFrame={timeFrame} setTimeFrame={setTimeFrame} />

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {!loading && !error && chartData.length > 0 ? (
                <div className="h-64 sm:h-96 mb-8">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData}>
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey={timeFrame === 'all' ? "visualDate" : "startTime"} />
                            <YAxis 
                                tickFormatter={(value) => `₹${value}`}
                                domain={['dataMin - 4', 'dataMax + 4']}
                            />
                            <Tooltip />
                            <Legend />
                            {timeFrame === 'all' ? (
                                <>
                                    <Line type="monotone" dataKey="sellingPrice" stroke="black" dot={false} />
                                </>
                            ) : (
                                <>
                                    <Line type="monotone" dataKey="maxSellPrice" stroke="#8884d8" dot={false} />
                                    <Line type="monotone" dataKey="minSellPrice" stroke="#82ca9d" dot={false} />
                                </>
                            )}
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            ) : (
                <div className="h-64 sm:h-96 mb-8 bg-gray-200 animate-pulse rounded-lg"></div>
            )}

            {itemData.length > 0 && <PriceAnalysisCard item={itemData[0]} itemData={itemData} />}
            <div className="flex justify-center">
                <div>
                    {
                        selectedItem && volatilityData && volatilityData.length > 0 && (
                            <PriceInsightsComponent data={volatilityData} />
                        )
                    }
                </div>
            </div>
        </div>
    );
}
export default Analysis2;