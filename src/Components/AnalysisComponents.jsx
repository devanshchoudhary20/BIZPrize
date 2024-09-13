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
        <div className="text-left">
            {buttons.map(({ label, value }) => (
                <button
                    key={value}
                    onClick={() => setTimeFrame(value)}
                    className={`px-3 py-1 rounded m-2 ${
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
        <div className="bg-white shadow-lg rounded-lg p-4 w-auto sm:w-3/4 mx-2 sm:mx-20 md:mx-30 lg:mx-40 mb-4 ">
            <div className="flex items-center justify-between sm:flex-row flex-col items-center space-y-4 sm:space-y-0 ">
                <div className=' flex flex-row items-center mr-4'>
                    <img src={item.imageUrl} alt={item.title} className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-full mr-4" />
                    <div >
                        
                        <h2 className="text-sm sm:text-xl font-bold text-gray-800">{item.title}</h2>
                        <p className="text-xs sm:text-sm text-gray-600">Analysis of last 2 months</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <PriceCard title="Max Price" value={`₹${maxPrice}`} bgcolor="bg-blue-100" textcolor="text-blue-800" />
                    <PriceCard title="Min Price" value={`₹${minPrice}`} bgcolor="bg-green-100" textcolor="text-green-800" />
                    <PriceCard title="Average Price" value={`₹${avgPrice}`} bgcolor="bg-yellow-100" textcolor="text-yellow-800" />
                    <PriceCard title="Max Variance" value={`${maxVariance}%`} bgcolor="bg-purple-100" textcolor="text-purple-800" />
                </div>
            </div>
        </div>
    );
};

const PriceCard = ({ title, value, bgcolor, textcolor }) => (
    <div className={`${bgcolor} px-2 py-1 rounded-md`}>
        <h4 className={`text-xs font-medium ${textcolor}`}>{title}</h4>
        <p className={`text-sm font-bold ${textcolor}`}>{value}</p>
    </div>
);

export default PriceAnalysisCard;












