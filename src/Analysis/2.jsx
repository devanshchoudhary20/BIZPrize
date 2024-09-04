import React, { useState, useEffect, useMemo } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import SearchDropdown from '../Components/Search';
import { fetchItemData, processItemData, calculateClusterData, weatherDescription } from '../utils/dataProcessing';
import { TimeFrameSelector, PriceAnalysisCard } from '../Components/AnalysisComponents';

const Analysis2 = () => {
    const [timeFrame, setTimeFrame] = useState('all');
    const [selectedItem, setSelectedItem] = useState(null);
    const [itemData, setItemData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (selectedItem) {
            setLoading(true);
            setError(null);
            fetchItemData(selectedItem)
                .then(data => {
                    setItemData(data);
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
    console.log(weatherDescriptions);
    const chartData = timeFrame === 'all' ? processedData : clusterData;

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Analysis of {itemData[0]?.title || 'Selected Item'} for {timeFrame}</h2>
            
            <div className="mb-4">
                <SearchDropdown onFileSelect={setSelectedItem} />
            </div>

            <TimeFrameSelector timeFrame={timeFrame} setTimeFrame={setTimeFrame} />

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {!loading && !error && chartData.length > 0 ? (
                <div className="h-96 mb-8">
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
                <div className="h-96 mb-8 bg-gray-200 animate-pulse rounded-lg"></div>
            )}

            {itemData.length > 0 && <PriceAnalysisCard item={itemData[0]} itemData={itemData} />}
        </div>
    );
}
export default Analysis2;