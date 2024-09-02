import React from 'react';

export const TimeFrameSelector = ({ timeFrame, setTimeFrame }) => {
    const buttons = [
        { label: 'All', value: 'all' },
        { label: '4h', value: '4h' },
        { label: '8h', value: '8h' },
        { label: 'Day', value: 'day' },
        { label: 'Week', value: 'week' },
    ];

    return (
        <div className="flex gap-2 mb-4">
            {buttons.map(({ label, value }) => (
                <button
                    key={value}
                    onClick={() => setTimeFrame(value)}
                    className={`px-3 py-1 rounded ${
                        timeFrame === value
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-black'
                    }`}
                >
                    {label}
                </button>
            ))}
        </div>
    );
};

export const PriceAnalysisCard = ({ item, itemData }) => {
    const maxPrice = Math.max(...itemData.map(i => parseFloat(i.sellingPrice.slice(1))));
    const minPrice = Math.min(...itemData.map(i => parseFloat(i.sellingPrice.slice(1))));
    const avgPrice = (itemData.reduce((sum, i) => sum + parseFloat(i.sellingPrice.slice(1)), 0) / itemData.length).toFixed(2);
    const maxVariance = ((maxPrice / minPrice - 1) * 100).toFixed(2);

    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
                <img src={item.imageUrl} alt={item.title} className="w-24 h-24 object-cover rounded-md mr-4" />
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Price Analysis</h2>
                    <h3 className="text-xl font-semibold text-green-600">{item.title}</h3>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <PriceCard title="Max Price" value={maxPrice} color="blue" />
                <PriceCard title="Min Price" value={minPrice} color="green" />
                <PriceCard title="Avg Price" value={avgPrice} color="yellow" />
                <PriceCard title="Max Variance" value={`${maxVariance}%`} color="purple" />
            </div>
        </div>
    );
};

const PriceCard = ({ title, value, color }) => (
    <div className={`bg-${color}-100 p-4 rounded-md`}>
        <h4 className={`text-lg font-medium text-${color}-800`}>{title}</h4>
        <p className={`text-2xl font-bold text-${color}-600`}>
            {typeof value === 'number' ? `₹${value}` : value}
        </p>
    </div>
);
