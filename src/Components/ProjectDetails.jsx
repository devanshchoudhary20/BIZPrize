import React from 'react';

const ProjectDetails = () => {
  return (
    <div className="p-4 w-full sm:w-3/4 mx-0 sm:mx-40 mb-4">
      {/* Inspiration Section */}
      <section className="mb-12 border-2 border-blue-300 p-6 rounded-lg bg-white text-start">
        <h2 className="text-2xl font-bold mb-4">
          Inspiration
          <span className="block w-12 h-1 bg-purple-600 mt-1"></span>
        </h2>
        <p className="mb-4">
          As a bachelor, I have to save money. I and my friends have noticed many times that the prices of some items change
          through out the day. So, there must be a perfect time where the prices are lowest.
        </p>
        <p>
          As a bachelor, I have to save money. I and my friends have noticed many times that the prices of some items change
          through out the day. So, there must be a perfect time where the prices are lowest.
        </p>
      </section>

      {/* Technical Details Section */}
      <section className="border border-blue-300 p-6 rounded-lg bg-white mb-12 text-start">
        <h2 className="text-2xl font-bold mb-6">
          Technical Details
          <span className="block w-12 h-1 bg-purple-600 mt-1"></span>
        </h2>

        <div className="flex justify-between mb-8">
          <div className="text-center">
            <img src="./images/react.png" alt="React js" className="w-18 h-12 mx-auto mb-2 object-contain" />
            <p className="font-semibold">React js</p>
          </div>
          <div className="text-center">
            <img src="./images/next.png" alt="Next.js" className="w-18 h-12 mx-auto mb-2 object-contain" />
            <p className="font-semibold">Next.js</p>
          </div>
          <div className="text-center">
            <img src="./images/firestore.png" alt="Firestore" className="w-18 h-12 mx-auto mb-2 object-contain" />
            <p className="font-semibold">Firestore</p>
          </div>
          <div className="text-center">
            <img src="./images/node.png" alt="Node.js" className="w-18 h-12 mx-auto mb-2 object-contain" />
            <p className="font-semibold">Node.js</p>
          </div>
          <div className="text-center">
            <img src="./images/netlify.png" alt="Netlify" className="w-18 h-12 mx-auto mb-2 object-contain" />
            <p className="font-semibold">Netlify</p>
          </div>
          <div className="text-center">
            <img src="./images/tailwind.png" alt="Tailwindcss" className="w-16 h-12 mx-auto mb-2 object-contain" />
            <p className="font-semibold">Tailwindcss</p>
          </div>
        </div>

        <h3 className="font-bold mb-4">Key Features:</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li><span className="font-semibold">Automated Data Crawling:</span> Implemented a robust Node.js backend service that crawls a quick commerce delivery website hourly, capturing real-time pricing data for various products.</li>
          <li><span className="font-semibold">Scalable Data Storage:</span> Utilized Firestore to efficiently store and manage large volumes of time-series pricing data, ensuring quick retrieval for analysis.</li>
          <li><span className="font-semibold">Advanced Price Analysis:</span> Engineered algorithms to analyze historical price data, identifying patterns such as:
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Peak pricing periods</li>
              <li>Lowest price occurrences</li>
              <li>Optimal purchase timings</li>
              <li>Price volatility metrics</li>
            </ul>
          </li>
          <li><span className="font-semibold">Responsive Frontend:</span> Crafted an intuitive and visually appealing user interface using React.js and Next.js, providing a seamless experience across devices.</li>
          <li><span className="font-semibold">Custom UI Components:</span> Leveraged Tailwind CSS to create a sleek, modern design system with responsive and accessible components.</li>
          <li><span className="font-semibold">Interactive Data Visualization:</span> Implemented dynamic charts and graphs to present complex pricing trends in an easily digestible format.</li>
        </ol>
      </section>
      
    </div>
  );
};

export default ProjectDetails;