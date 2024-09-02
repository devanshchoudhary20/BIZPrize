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
    const validSellingPrices = itemData.filter(i => !isNaN(parseFloat(i.sellingPrice.slice(1))));
    const averageSellingPrice = validSellingPrices.length > 0
        ? validSellingPrices.reduce((sum, i) => sum + parseFloat(i.sellingPrice.slice(1)), 0) / validSellingPrices.length
        : 0;

    const validDiscountedPrices = itemData.filter(i => !isNaN(parseFloat(i.discountedPrice.slice(1))));
    const averageDiscountedPrice = validDiscountedPrices.length > 0
        ? validDiscountedPrices.reduce((sum, i) => sum + parseFloat(i.discountedPrice.slice(1)), 0) / validDiscountedPrices.length
        : 0;

    itemData = itemData.map(i => ({
        ...i,
        sellingPrice: i.sellingPrice.trim() === '' ? `₹${averageSellingPrice.toFixed(2)}` : i.sellingPrice,
        discountedPrice: i.discountedPrice.trim() === '' ? `₹${averageDiscountedPrice.toFixed(2)}` : i.discountedPrice
    }));
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
                <PriceCard title="Max Price" value={maxPrice} bgcolor="bg-blue-100" textcolor="text-blue-800" />
                <PriceCard title="Min Price" value={minPrice} bgcolor="bg-green-100" textcolor="text-green-800" />
                <PriceCard title="Avg Price" value={avgPrice} bgcolor="bg-yellow-100" textcolor="text-yellow-800" />
                <PriceCard title="Max Variance" value={`${maxVariance}%`} bgcolor="bg-purple-100" textcolor="text-purple-800" />
            </div>
        </div>
    );
};

const PriceCard = ({ title, value, bgcolor, textcolor }) => (
    <div className={`${bgcolor} p-4 rounded-md`}>
        <h4 className={`text-lg font-medium ${textcolor}`}>{title}</h4>
        <p className={`text-2xl font-bold ${textcolor}`}>
            {typeof value === 'number' ? `₹${value}` : value}
        </p>
    </div>
);
