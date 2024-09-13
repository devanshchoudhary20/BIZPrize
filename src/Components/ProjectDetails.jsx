import React from 'react';

const ProjectDetails = () => {
  return (
    <div className="w-auto sm:w-3/4 mx-2  sm:mx-20 md:mx-30 lg:mx-40 mb-4" id='Project Details'>
      {/* Inspiration Section */}
      <section className="mb-12 shadow-lg p-6 rounded-lg bg-white text-start">
        <h2 className="text-2xl font-bold mb-4">
          Inspiration
          <span className="block w-12 h-1 bg-purple-600 mt-1"></span>
        </h2>
        <p className="mb-4">
          As a budget-conscious bachelor, I've become increasingly aware of price fluctuations in quick commerce apps. My friends and I have observed that <span className='font-semibold'> prices for certain items seem to change throughout the day</span>, suggesting there might be an optimal time to purchase when prices are at their lowest.
        </p>
        <p className="mb-4">
          This phenomenon isn't unique; airlines have long used sophisticated algorithms to maximize revenue per customer. It's likely that quick commerce companies employ similar strategies. This realization led me to ponder several questions:
        </p>
        <ol className="list-decimal list-inside mb-4 space-y-2">
          <li>Do these apps <span className='font-semibold'>display different prices for iPhone users compared to Android users</span> for the same item?</li>
          <li>Are price variations based solely on product availability, or do other factors come into play, such as <span className='font-semibold'> peak hours around meal times</span>?</li>
          <li>Is there a specific time of day when <span className='font-semibold'>prices tend to be at their lowest </span>?</li>
        </ol>
        <p>
          Driven by curiosity, I initiated a project to investigate these questions. While I couldn't find answers to everything, tracking price histories provided valuable insights into the pricing strategies of quick commerce platforms.
        </p>
      </section>

      {/* About Me Section */}
      <section className="mb-12 shadow-lg p-6 rounded-lg bg-white text-start">
        <h2 className="text-2xl font-bold mb-4">
          About Me
          <span className="block w-12 h-1 bg-purple-600 mt-1"></span>
        </h2>
        <p className="mb-4">
          My name is Devansh, and I am a Frontend Engineer who graduated from IIT Patna in 2023. My professional experience includes working as an analyst at Junglee Games for one year.
        </p>
        <p className="mb-4">
          I have a strong passion for frontend development and enjoy working in this field. At present, I am seeking opportunities with innovative startups where I can contribute my skills and expertise.
        </p>
        <div className='flex gap-4 font-semibold text-my-indigo'>
        <a href="https://www.linkedin.com/in/devansh-choudhary-2381041b1/" target="_blank" rel="noopener noreferrer" className='border-b-2 border-my-indigo'>LinkedIn</a>
        <a href="https://github.com/devanshchoudhary20/BIZPrize" target="_blank" rel="noopener noreferrer" className='border-b-2 border-my-indigo'>GitHub</a>
        </div>
      </section>

      {/* Technical Details Section */}
      <section className=" shadow-lg p-6 rounded-lg bg-white mb-12 text-start">
        <h2 className="text-2xl font-bold mb-6">
          Technical Details
          <span className="block w-12 h-1 bg-purple-600 mt-1"></span>
        </h2>

        <div className="flex justify-between mb-8 text-xs sm:text-base">
          <div className="text-center">
            <img src="./images/react.png" alt="React js" className="w-10 h-10  sm:w-20 sm:h-12  mx-auto mb-2 object-contain" />
            <p className="font-semibold">React js</p>
          </div>
          <div className="text-center">
            <img src="./images/next.png" alt="Next.js" className="w-10 h-10  sm:w-20 sm:h-12 mx-auto mb-2 object-contain" />
            <p className="font-semibold">Next.js</p>
          </div>
          <div className="text-center">
            <img src="./images/firebase.png" alt="Firestore" className="w-10 h-10  sm:w-20 sm:h-12 mx-auto mb-2 object-contain" />
            <p className="font-semibold">Firestore</p>
          </div>
          <div className="text-center">
            <img src="./images/node.png" alt="Node.js" className="w-10 h-10  sm:w-20 sm:h-12 mx-auto mb-2 object-contain" />
            <p className="font-semibold">Node.js</p>
          </div>
          <div className="text-center">
            <img src="./images/netlify.png" alt="Netlify" className="w-10 h-10  sm:w-20 sm:h-12 mx-auto mb-2 object-contain" />
            <p className="font-semibold">Netlify</p>
          </div>
          <div className="text-center">
            <img src="./images/tailwind.png" alt="Tailwindcss" className="w-10 h-10  sm:w-20 sm:h-12 mx-auto mb-2 object-contain" />
            <p className="font-semibold">Tailwindcss</p>
          </div>
        </div>

        <h3 className="font-bold mb-4">Key Features:</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li><span className="font-semibold">Automated Data Crawling:</span> Implemented a robust <span className="font-semibold text-my-indigo">Node.js</span> backend service that crawls a quick commerce delivery website hourly, capturing real-time pricing data for various products.</li>
          <li><span className="font-semibold">Scalable Data Storage:</span> Utilized <span className="font-semibold text-my-indigo">Firestore</span> to efficiently store and manage large volumes of time-series pricing data, ensuring quick retrieval for analysis.</li>
          <li><span className="font-semibold">Advanced Price Analysis:</span> Engineered algorithms to analyze historical price data, identifying patterns such as:
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Peak pricing periods</li>
              <li>Lowest price occurrences</li>
              <li>Optimal purchase timings</li>
              <li>Price volatility metrics</li>
            </ul>
          </li>
          <li><span className="font-semibold">Responsive Frontend:</span> Crafted an intuitive and visually appealing user interface using <span className="font-semibold text-my-indigo">React.js</span> and <span className="font-semibold text-my-indigo">Node.js</span>, providing a seamless experience across devices.</li>
          <li><span className="font-semibold">Custom UI Components:</span> Leveraged <span className="font-semibold text-my-indigo">Tailwind CSS</span> to create a sleek, modern design system with responsive and accessible components.</li>
          <li><span className="font-semibold">Interactive Data Visualization:</span> Implemented <span className="font-semibold text-my-indigo">dynamic charts</span> and graphs to present complex pricing trends in an easily digestible format.</li>
        </ol>
      </section>
      
    </div>
  );
};

export default ProjectDetails;