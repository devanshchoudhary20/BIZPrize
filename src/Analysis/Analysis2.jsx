import React, { useState, useEffect, useMemo } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { fetchItemData, processItemData, calculateClusterData } from '../utils/dataProcessing';
import { TimeFrameSelector, PriceAnalysisCard } from '../Components/AnalysisComponents';
import ItemSearch from '../Components/ItemSearch';
import PriceInsightsComponent from '../Components/PriceInsight';

const Analysis2 = () => {
    const [timeFrame, setTimeFrame] = useState('all');
    const [selectedItem, setSelectedItem] = useState('tomatoLocal_500g.json');
    const [itemData, setItemData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (selectedItem) {
            setLoading(true);
            setError(null);
            fetchItemData(selectedItem)
                .then(async (data) => {
                    setItemData(data);
                    try {
                        // const analyzed = await analyzeTomatoData(selectedItem);

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
    

    const chartData = timeFrame === 'all' ? processedData : clusterData;
    return (
        <div className="w-full ">
            <div className="mb-4 flex flex-col flex-wrap gap-2 bg-gradient-to-r from-my-red to-my-blue p-4  items-center">
                <ItemSearch onFileSelect={setSelectedItem} />
            </div>
            <div>
            {itemData.length > 0 && <PriceAnalysisCard item={itemData[0]} itemData={itemData} />}
            </div>
            <div className='w-full sm:w-3/4 mx-0 sm:mx-20 md:mx-30 lg:mx-40'>
            <TimeFrameSelector timeFrame={timeFrame} setTimeFrame={setTimeFrame} />
            </div>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {!loading && !error && chartData.length > 0 ? (
                <div className="h-64 sm:h-96 mb-8 p-4 w-auto sm:w-3/4 mx-2 sm:mx-20 md:mx-30 lg:mx-40 shadow-lg p-2">
                    <ResponsiveContainer width="100%" height="100%" onResize={(width, height)=>{console.log(width, height);}}>
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
                <div className="h-64 sm:h-96 mb-8 bg-gray-200 animate-pulse rounded-lg w-full sm:w-3/4 mx-0 sm:mx-40"></div>
            )}

            {/* {itemData.length > 0 && <PriceAnalysisCard item={itemData[0]} itemData={itemData} />} */}
            <div >
                {selectedItem && (
                    <PriceInsightsComponent selectedItem={selectedItem} />
                )}
            </div>
        </div>
    );
}
export default Analysis2;