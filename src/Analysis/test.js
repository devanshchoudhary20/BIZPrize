// const axios = require('axios');
// const cheerio = require('cheerio');

// (async() => {
//     try{
//     const response = await axios.get("https://www.zeptonow.com/pn/amul-masti-curd-pouch/pvid/3f3d772a-04a4-4236-8dd5-e848d99c459a")
//     const data =  response.data; 
    
//     const $ = cheerio.load(data);
//     const title = $('div[data-testid="pdp-product-name"] h1').text().trim();
//     const quantity = $('div[data-testid="pdp-product-qty"] p').text().trim();
  
//     let sellingPrice = $('h4[data-test-id="pdp-selling-price"]').text().trim();
//     let discountedPrice = $('p[data-testid="pdp-discounted-price"]').text().trim();
  
//     if (!discountedPrice) {
//       const combinedPrice = $('h4[data-testid="pdp-discounted-selling-price"]').text().trim() || $('h4[data-test-id="pdp-selling-price"]').text().trim();
//       sellingPrice = combinedPrice;
//       discountedPrice = combinedPrice;
//     }
  
//     let discountPercentage = $('.tag_tag__Y2gMh').text().trim()
    
//     if(!discountPercentage){  
//         discountPercentage = Math.round((1 - parseFloat(discountedPrice.replace(/[^\d.]/g, '')) / parseFloat(sellingPrice.replace(/[^\d.]/g, ''))) * 100) + '% Off';
//     }   
//     const description = $('div[data-testid="product-details-container"] ul li')
//       .map((i, el) => $(el).text().trim())
//       .get()
//       .join('\n');
  
//     const imageUrl = $('img[data-nimg="1"][class*="aspect-square"]').eq(1).attr('src');
// //   console.log(data);
//     console.log ({
//         title,
//         quantity,
//         sellingPrice,
//         discountedPrice,
//         discountPercentage,
//         description,
//         imageUrl,
//         createdAt: new Date(),
//     });
//     }
//     catch(error){
//         console.log(error);
//     }
// })();



//fetch data from the url 
// const admin = require('firebase-admin');

// // Initialize Firebase Admin SDK (make sure you have the necessary credentials)
// if (!admin.apps.length) {
//   const serviceAccount = require('./crawler-9470b-firebase-adminsdk-1hq9x-cd6571b190.json');
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
//   });
// }

// async function getOnionDataFromFirestore(collectionName) {
//   try {
//     const db = admin.firestore();
//     const collectionRef = db.collection(collectionName);
//     const yesterday = new Date();
//     yesterday.setDate(yesterday.getDate() - 1);
//     yesterday.setHours(0, 0, 0, 0);

//     const snapshot = await collectionRef
//       .where('title', '==', 'Onion')
//       .where('createdAt', '>=', admin.firestore.Timestamp.fromDate(yesterday))
//       .where('createdAt', '<', admin.firestore.Timestamp.fromDate(new Date()))
//       .get();

//     if (snapshot.empty) {
//       console.log('No matching documents for Onion.');
//       return null;
//     }

//     let onionData = null;
//     snapshot.forEach(doc => {
//       onionData = {
//         id: doc.id,
//         ...doc.data()
//       };
//     });

//     return onionData;
//   } catch (error) {
//     console.error('Error getting Onion document:', error);
//     throw error;
//   }
// }

// // Example usage:
// getOnionDataFromFirestore('products')
//   .then(data => {
//     if (data) {
//       console.log('Onion product data:', data);
//     } else {
//       console.log('No Onion product found.');
//     }
//   })
//   .catch(error => console.error(error));

//



export const data = [
    {
      "discountPercentage": "29% Off",
      "createdAt": 1724131837657,
      "sellingPrice": "₹39",
      "condition": "Clouds",
      "quantity": "1 pc (Approx. 450g - 800g)",
      "discountedPrice": "₹55",
      "weatherDescription": "scattered clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/28492958-f4c6-4364-9e19-bb25bfbdcf29.jpeg",
      "temperature": 28.32,
      "description": "Country of Origin : India\nShelf Life : 4 days\nCountry of Origin : India\nShelf Life : 4 days",
      "title": "Bottle Gourd",
      "url": "https://www.zeptonow.com/pn/bottle-gourd/pvid/21dd96c3-e916-49e1-a194-9cc4d528b208"
    },
    {
      "discountPercentage": "0% Off",
      "createdAt": 1724747821954,
      "sellingPrice": "₹58",
      "condition": "Clouds",
      "quantity": "100 g",
      "discountedPrice": "₹58",
      "weatherDescription": "scattered clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-1021-1021,pr-true,f-auto,q-80/cms/product_variant/97a5ab9d-9731-4da0-821d-1c7161ea25a3.jpeg",
      "temperature": 27.14,
      "description": "Description : Made from the freshest of cream, the Amul butter has lovely taste which is delicate and slightly salty. This finely processed butter is natural, pure and tastes best overwith toasts and sandwiches. Has a natural and pure formulation that gives it a great taste. Made from fresh cream that has a wonderful flavour. Spread it over toast or cook your curries in it for a heavenly taste.\nCountry of Origin : India\nShelf Life : 12 months\nFSSAI License : 10014021001010\nManufacturer Name : Gujarat Co-Operative Milk Marketing Federation\nManufacturer Address : Gujarat Co-Operative Milk Marketing Federation, Po Box 10, Amul Dairy Road, Anand 388 001, Gujarat, India.\nDescription : Made from the freshest of cream, the Amul butter has lovely taste which is delicate and slightly salty. This finely processed butter is natural, pure and tastes best overwith toasts and sandwiches. Has a natural and pure formulation that gives it a great taste. Made from fresh cream that has a wonderful flavour. Spread it over toast or cook your curries in it for a heavenly taste.\nCountry of Origin : India\nShelf Life : 12 months\nFSSAI License : 10014021001010\nManufacturer Name : Gujarat Co-Operative Milk Marketing Federation\nManufacturer Address : Gujarat Co-Operative Milk Marketing Federation, Po Box 10, Amul Dairy Road, Anand 388 001, Gujarat, India.",
      "title": "Amul Butter - Pasteurised",
      "url": "https://zeptonow.com/pn/amul-butter-pasteurised/pvid/8da0c985-dc37-495c-a8bd-6019c120cb44"
    },
    {
      "discountPercentage": "Out of Stock29% Off",
      "createdAt": 1724495447588,
      "sellingPrice": "₹45",
      "condition": "Clouds",
      "quantity": "100 g",
      "discountedPrice": "₹64",
      "weatherDescription": "scattered clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-450-450,pr-true,f-auto,q-80/inventory/product/e84a7c51-dd59-4104-a025-91776939a300-358b58f2-c323-427c-95b8-0d718762bdef.jpeg",
      "temperature": 28.51,
      "description": "Country of Origin : India\nShelf Life : 3 days\nCountry of Origin : India\nShelf Life : 3 days",
      "title": "Deep Rooted Residue Free Ginger",
      "url": "https://www.zeptonow.com/pn/deep-rooted-residue-free-ginger/pvid/e33ff4f7-2454-455b-b932-39fc5c2b9d83"
    },
    {
      "discountPercentage": "34% Off",
      "createdAt": 1723811832996,
      "sellingPrice": "₹94",
      "condition": "Clouds",
      "quantity": "200 g",
      "discountedPrice": "₹143",
      "weatherDescription": "broken clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/033d6c43-9275-4288-90ae-662cf4f297cc.jpeg",
      "temperature": 28.37,
      "description": "Description : Garlic has been utilized historically for both culinary and medicinal uses. It has a strong 'hot' flavor that mellows and sweetens significantly when cooked.\nCountry of Origin : India\nShelf Life : 6 days\nDescription : Garlic has been utilized historically for both culinary and medicinal uses. It has a strong 'hot' flavor that mellows and sweetens significantly when cooked.\nCountry of Origin : India\nShelf Life : 6 days",
      "title": "Garlic",
      "url": "https://www.zeptonow.com/pn/garlic/pvid/5c1bb975-875c-4a7d-97a0-5bcb0b9f2449"
    },
    {
      "discountPercentage": "0% Off",
      "createdAt": 1723465804718,
      "sellingPrice": "₹30",
      "condition": "Clouds",
      "quantity": "500 ml",
      "discountedPrice": "₹30",
      "weatherDescription": "overcast clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/b77067cd-b3b1-4f1a-a4cf-975877844598.jpeg",
      "temperature": 28.45,
      "description": "Description : Goodlife Smart Homogenised Double Toned Milk UHT processed milk with Min 1.5% fat and Min 9.0% SNF fortified with vitamins A and D. It is uitable for preparing tea/coffee, milk shakes and milk delights for people leading a fitness conscious lifestyle.\nCountry of Origin : India\nShelf Life : 90 days\nFSSAI License : 10015043001137\nManufacturer Name : Karnataka Co-Operative Milk Producer's Federation Limited\nManufacturer Address : Karnataka Co-Operative Milk Producer's Federation Limited, KMF Complex, D.R.College Post, Dr.M.H.Marigowda Road, Bengaluru-560 029.\nDescription : Goodlife Smart Homogenised Double Toned Milk UHT processed milk with Min 1.5% fat and Min 9.0% SNF fortified with vitamins A and D. It is uitable for preparing tea/coffee, milk shakes and milk delights for people leading a fitness conscious lifestyle.\nCountry of Origin : India\nShelf Life : 90 days\nFSSAI License : 10015043001137\nManufacturer Name : Karnataka Co-Operative Milk Producer's Federation Limited\nManufacturer Address : Karnataka Co-Operative Milk Producer's Federation Limited, KMF Complex, D.R.College Post, Dr.M.H.Marigowda Road, Bengaluru-560 029.",
      "title": "Nandini Goodlife Toned UHT Milk (Fino Pouch)",
      "url": "https://www.zeptonow.com/pn/nandini-goodlife-toned-uht-milk-fino-pouch/pvid/b01c94d5-7fa9-4119-b157-5e401def1280"
    },
    {
      "discountPercentage": "Out of Stock42% Off",
      "createdAt": 1724430627746,
      "sellingPrice": "₹27",
      "condition": "Clouds",
      "quantity": "250 g",
      "discountedPrice": "₹47",
      "weatherDescription": "scattered clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-644-708,pr-true,f-auto,q-80/cms/product_variant/8ec5a140-004e-4961-a76d-da7bc02b3ed3.jpeg",
      "temperature": 25.14,
      "description": "Description : In India, fenugreek leaves are consumed as vegetables. Fenugreek is taken orally for digestive disorders such as appetite loss, upset stomach, constipation & stomach inflammation\nCountry of Origin : India\nShelf Life : 3 days\nDescription : In India, fenugreek leaves are consumed as vegetables. Fenugreek is taken orally for digestive disorders such as appetite loss, upset stomach, constipation & stomach inflammation\nCountry of Origin : India\nShelf Life : 3 days",
      "title": "Fenugreek (Methi)",
      "url": "https://www.zeptonow.com/pn/fenugreek-methi/pvid/2aa60e3e-2d3c-439f-b0c1-ef4aa6abf7a8"
    },
    {
      "discountPercentage": "",
      "createdAt": 1721428204988,
      "sellingPrice": "",
      "condition": "Clouds",
      "quantity": "500 ml",
      "discountedPrice": "",
      "weatherDescription": "broken clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/b77067cd-b3b1-4f1a-a4cf-975877844598.jpeg",
      "temperature": 21.37,
      "description": "Description : Goodlife Smart Homogenised Double Toned Milk UHT processed milk with Min 1.5% fat and Min 9.0% SNF fortified with vitamins A and D. It is uitable for preparing tea/coffee, milk shakes and milk delights for people leading a fitness conscious lifestyle.\nCountry of Origin : India\nShelf Life : 90 days\nFSSAI License : 10015043001137\nManufacturer Name : Karnataka Co-Operative Milk Producer's Federation Limited\nManufacturer Address : Karnataka Co-Operative Milk Producer's Federation Limited, KMF Complex, D.R.College Post, Dr.M.H.Marigowda Road, Bengaluru-560 029.\nDescription : Goodlife Smart Homogenised Double Toned Milk UHT processed milk with Min 1.5% fat and Min 9.0% SNF fortified with vitamins A and D. It is uitable for preparing tea/coffee, milk shakes and milk delights for people leading a fitness conscious lifestyle.\nCountry of Origin : India\nShelf Life : 90 days\nFSSAI License : 10015043001137\nManufacturer Name : Karnataka Co-Operative Milk Producer's Federation Limited\nManufacturer Address : Karnataka Co-Operative Milk Producer's Federation Limited, KMF Complex, D.R.College Post, Dr.M.H.Marigowda Road, Bengaluru-560 029.",
      "title": "Nandini Goodlife Toned UHT Milk (Fino Pouch)",
      "url": "https://www.zeptonow.com/pn/nandini-goodlife-toned-uht-milk-fino-pouch/pvid/b01c94d5-7fa9-4119-b157-5e401def1280"
    },
    {
      "discountPercentage": "0%",
      "createdAt": 1723109415199,
      "sellingPrice": "₹55",
      "condition": "Clouds",
      "quantity": "400 g",
      "discountedPrice": "₹55",
      "weatherDescription": "scattered clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/b985a9bc-4996-4338-956e-58e6c7b6ba59.jpeg",
      "temperature": 26.9,
      "description": "Description : Healthy and nutritious brown bread made with whole wheat flour and cultured with yeast. Made with natural ingredients and contains no artificial colours and flavours. Brown bread that is fit to be had with accompaniment of your choice.�\nCountry of Origin : India\nShelf Life : 8 days\nFSSAI License : 1.00121E+13\nIngredients : Wheat Flour (Atta(52%), Water, Yeast, Sugar, Edible Common Salt, Wheat Gluten, Edible Vegetable Oils (Palm), Class II Preservative (282), Malt Powder, Improvers (170 (i), 510,923,1100), Acidity Regulator (260), Emulsifiers (471, 472e, 481 (i)), Antioxidant (300) (Numbers in brackets are as per International Numbering System)\nManufacturer Name : Mrs. Bectors Food Specialities Ltd\nManufacturer Address : Mrs. Bectors Food Specialities Ltd, Emaar Digital Greens - Tower A First Floor, Unit No. 22-27 Sector 61, Gurugram-122102, Haryana (India).\nNutritional Info : Energy - 257.28 kcal,Carbohydrates - 48.87 g, Of which Sugars - 2.25g,Fat - 2.56g,Saturated Fat - 0.62g,Trans Fat - 0 g,Protein - 9.69 g,Dietary Fiber - 10.45 g\nDescription : Healthy and nutritious brown bread made with whole wheat flour and cultured with yeast. Made with natural ingredients and contains no artificial colours and flavours. Brown bread that is fit to be had with accompaniment of your choice.�\nCountry of Origin : India\nShelf Life : 8 days\nFSSAI License : 1.00121E+13\nIngredients : Wheat Flour (Atta(52%), Water, Yeast, Sugar, Edible Common Salt, Wheat Gluten, Edible Vegetable Oils (Palm), Class II Preservative (282), Malt Powder, Improvers (170 (i), 510,923,1100), Acidity Regulator (260), Emulsifiers (471, 472e, 481 (i)), Antioxidant (300) (Numbers in brackets are as per International Numbering System)\nManufacturer Name : Mrs. Bectors Food Specialities Ltd\nManufacturer Address : Mrs. Bectors Food Specialities Ltd, Emaar Digital Greens - Tower A First Floor, Unit No. 22-27 Sector 61, Gurugram-122102, Haryana (India).\nNutritional Info : Energy - 257.28 kcal,Carbohydrates - 48.87 g, Of which Sugars - 2.25g,Fat - 2.56g,Saturated Fat - 0.62g,Trans Fat - 0 g,Protein - 9.69 g,Dietary Fiber - 10.45 g",
      "title": "English Oven 100% Whole Wheat Bread",
      "url": "https://www.zeptonow.com/pn/english-oven-100-whole-wheat-bread/pvid/d3eaa022-099a-4edd-9f2a-48246d9c5229"
    },
    {
      "discountPercentage": "40% Off",
      "createdAt": 1722781825226,
      "sellingPrice": "₹58",
      "condition": "Rain",
      "quantity": "1 kg",
      "discountedPrice": "₹97",
      "weatherDescription": "light rain",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/3383b1f8-c1be-4e07-ad30-74418513f8fc.jpeg",
      "temperature": 25.9,
      "description": "Description : Onions are high in nutrients and have been linked to a variety of health benefits such as enhanced heart health, better blood sugar control, and greater bone density.\nCountry of Origin : India\nShelf Life : 6 days\nDescription : Onions are high in nutrients and have been linked to a variety of health benefits such as enhanced heart health, better blood sugar control, and greater bone density.\nCountry of Origin : India\nShelf Life : 6 days",
      "title": "Onion",
      "url": "https://www.zeptonow.com/pn/onion/pvid/2f6630cd-3d48-4ac8-9905-1cf2acf28ec7"
    },
    {
      "discountPercentage": "32% Off",
      "createdAt": 1724492267505,
      "sellingPrice": "₹189",
      "condition": "Clouds",
      "quantity": "1 pack (Approx. 520g - 540g)",
      "discountedPrice": "₹279",
      "weatherDescription": "scattered clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-1530-1530,pr-true,f-auto,q-80/cms/product_variant/dec20964-20fb-4d2b-9a8b-e7d23cf45fc7.jpeg",
      "temperature": 28.18,
      "description": "Description : Robust, flavorful, and a delight for seafood lovers. Our premium Roopchand steaks are carefully cut to showcase the succulent meat and distinct flavors. Perfect for grilling, pan-searing or currys these steaks offer a satisfying and delicious fish & seafood experience. Elevate your meals with Relish Roopchand Steaks. \nThis product serves: 3 to 4 people.\nCountry of Origin : India\nShelf Life : 4 days\nStorage Instructions : Vacuum packing causes a noticeable distinct smell in the product. After opening keep the packet in room temperature for 2-3 minutes to eliminate such smell. Store this product at 0 to 4 °C\nHow to Use : Best suitable for Roast/Fry.\nManufacturer Name : Relish\nNutritional Info : Energy: 99Kcal, \nProtein: 18g, \nTotal Fat: 3g, \nCarbohydrates: 0g\nDescription : Robust, flavorful, and a delight for seafood lovers. Our premium Roopchand steaks are carefully cut to showcase the succulent meat and distinct flavors. Perfect for grilling, pan-searing or currys these steaks offer a satisfying and delicious fish & seafood experience. Elevate your meals with Relish Roopchand Steaks. \nThis product serves: 3 to 4 people.\nCountry of Origin : India\nShelf Life : 4 days\nStorage Instructions : Vacuum packing causes a noticeable distinct smell in the product. After opening keep the packet in room temperature for 2-3 minutes to eliminate such smell. Store this product at 0 to 4 °C\nHow to Use : Best suitable for Roast/Fry.\nManufacturer Name : Relish\nNutritional Info : Energy: 99Kcal, \nProtein: 18g, \nTotal Fat: 3g, \nCarbohydrates: 0g",
      "title": "Relish Roopchand / Rupchanda Steaks",
      "url": "https://www.zeptonow.com/pn/relish-roopchand-rupchanda-steaks/pvid/66b58d0c-a6f0-49d5-b1dd-7fa60892b1d6"
    },
    {
      "discountPercentage": "19% Off",
      "createdAt": 1723883417447,
      "sellingPrice": "₹149",
      "condition": "Clouds",
      "quantity": "1 pack (Approx. 480g - 500g)",
      "discountedPrice": "₹185",
      "weatherDescription": "scattered clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-1280-1280,pr-true,f-auto,q-80/cms/product_variant/b7f8adb4-6901-4e97-8078-654ae5314309.jpeg",
      "temperature": 30.17,
      "description": "Description : This product is halal certified.\nTender, flavorful, and convenient. Relish chicken curry cut is expertly processed to deliver the perfect balance of taste and texture & juicyness.\nThis product serves: 2 to 3 people.\nCountry of Origin : India\nShelf Life : 4 days\nStorage Instructions : Vacuum packing causes a noticeable distinct smell in the product. After opening keep the packet in room temperature for 2-3 minutes to eliminate such smell. Store this product at 0 to 4 °C\nHow to Use : Best suitable for Curries.\nManufacturer Name : Relish\nNutritional Info : Energy:165 kcal, \nProtein:25g, \nTotal Fat: 3.6g,\nCarbohydrates:0g.\nDescription : This product is halal certified.\nTender, flavorful, and convenient. Relish chicken curry cut is expertly processed to deliver the perfect balance of taste and texture & juicyness.\nThis product serves: 2 to 3 people.\nCountry of Origin : India\nShelf Life : 4 days\nStorage Instructions : Vacuum packing causes a noticeable distinct smell in the product. After opening keep the packet in room temperature for 2-3 minutes to eliminate such smell. Store this product at 0 to 4 °C\nHow to Use : Best suitable for Curries.\nManufacturer Name : Relish\nNutritional Info : Energy:165 kcal, \nProtein:25g, \nTotal Fat: 3.6g,\nCarbohydrates:0g.",
      "title": "Relish Chicken Curry Cut Without Skin",
      "url": "https://www.zeptonow.com/pn/relish-chicken-curry-cut-without-skin/pvid/8ddd4d0f-3ea7-410b-936e-cf35ddf70b1d"
    },
    {
      "discountPercentage": "32% Off",
      "createdAt": 1724200222692,
      "sellingPrice": "₹21",
      "condition": "Mist",
      "quantity": "250 g",
      "discountedPrice": "₹31",
      "weatherDescription": "mist",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/a119fad0-e758-4d26-89c7-644b29f3cd45.jpeg",
      "temperature": 23.33,
      "description": "Description : Cluster beans have less fat and calories and more plant proteins. They lower cholesterol, keep blood flowing through vessels, keep blood pressure levels stable, and enhance heart health. Guar beans contain calcium and phosphorus elements, which build bones and improve bone health.\nCountry of Origin : India\nShelf Life : 4 days\nDescription : Cluster beans have less fat and calories and more plant proteins. They lower cholesterol, keep blood flowing through vessels, keep blood pressure levels stable, and enhance heart health. Guar beans contain calcium and phosphorus elements, which build bones and improve bone health.\nCountry of Origin : India\nShelf Life : 4 days",
      "title": "Beans Cluster (Gawar Phali)",
      "url": "https://www.zeptonow.com/pn/beans-cluster-gawar-phali/pvid/0c372bab-6a46-4c79-a899-f481cb6e9449"
    },
    {
      "discountPercentage": "Out of Stock6% Off",
      "createdAt": 1722717015604,
      "sellingPrice": "₹149",
      "condition": "Clouds",
      "quantity": "500 g",
      "discountedPrice": "₹159",
      "weatherDescription": "broken clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-1021-1021,pr-true,f-auto,q-80/cms/product_variant/affddb6d-ed08-4c27-8bfe-e76021cd48b4.jpeg",
      "temperature": 22.11,
      "description": "Description : Your Favourite chicken, cleaned and skin removed. Cook the way you like it.\nCountry of Origin : India\nShelf Life : 4 days\nStorage Instructions : Vacuum packing causes a noticeable distinct smell in the product. After opening keep the packet in room temperature for 2-3 minutes to eliminate such smell.\nManufacturer Name : Nandu's\nManufacturer Address : Nandu's, 377/61, 2nd Floor, 43rd Cross, 9th Main, 5th Block, Jayanagar, Bangalore.\nDescription : Your Favourite chicken, cleaned and skin removed. Cook the way you like it.\nCountry of Origin : India\nShelf Life : 4 days\nStorage Instructions : Vacuum packing causes a noticeable distinct smell in the product. After opening keep the packet in room temperature for 2-3 minutes to eliminate such smell.\nManufacturer Name : Nandu's\nManufacturer Address : Nandu's, 377/61, 2nd Floor, 43rd Cross, 9th Main, 5th Block, Jayanagar, Bangalore.",
      "title": "Nandus Chicken Curry Cut without Skin",
      "url": "https://www.zeptonow.com/pn/nandus-chicken-curry-cut-without-skin/pvid/ff0fead7-56ad-4add-90ec-cbba8c417377"
    },
    {
      "discountPercentage": "Out of Stock21% Off",
      "createdAt": 1720978216027,
      "sellingPrice": "₹43",
      "condition": "Drizzle",
      "quantity": "(Approx. 500g - 600g)",
      "discountedPrice": "₹55",
      "weatherDescription": "light intensity drizzle",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/87c0a04b-9335-4b2b-b0af-f412472382da.jpeg",
      "temperature": 22.11,
      "description": "Description : Capsicum may aid in the management of blood glucose, dyslipidemia, cancer, and wound healing. It may also aid with immunity, metabolism, cataract prevention, and symptom alleviation in arthritis, Crohn's disease, and yellow fever.\nCountry of Origin : India\nShelf Life : 4 days\nDescription : Capsicum may aid in the management of blood glucose, dyslipidemia, cancer, and wound healing. It may also aid with immunity, metabolism, cataract prevention, and symptom alleviation in arthritis, Crohn's disease, and yellow fever.\nCountry of Origin : India\nShelf Life : 4 days",
      "title": "Capsicum Green",
      "url": "https://www.zeptonow.com/pn/capsicum-green/pvid/493fd6ac-d7d7-4d2d-9568-a60abad9a10a"
    },
    {
      "discountPercentage": "23% Off",
      "createdAt": 1721611831386,
      "sellingPrice": "₹40",
      "condition": "Clouds",
      "quantity": "100 g",
      "discountedPrice": "₹52",
      "weatherDescription": "broken clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-550-650,pr-true,f-auto,q-80/inventory/product/431217f3-cce2-42f0-8679-99078fb97348-5fd22d68-d427-4945-8f2e-f366e4132dc1.jpeg",
      "temperature": 20.95,
      "description": "Country of Origin : India\nShelf Life : 4 days\nCountry of Origin : India\nShelf Life : 4 days",
      "title": "Deep Rooted Residue Free Lettuce Green",
      "url": "https://www.zeptonow.com/pn/deep-rooted-residue-free-lettuce-green/pvid/1ffe200b-0b95-4a10-b59e-9e7c0bc024d1"
    },
    {
      "discountPercentage": "",
      "createdAt": 1721824221642,
      "sellingPrice": "",
      "condition": "Clouds",
      "quantity": "1 kg",
      "discountedPrice": "",
      "weatherDescription": "broken clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-882-882,pr-true,f-auto,q-80/cms/product_variant/5c210841-ffd7-43cd-a942-df755ef7a408.jpeg",
      "temperature": 25.62,
      "description": "Description : iD Idli and Dosa Batter will make sure that the magic of age-old tradition is not lost by giving you the wholesomeness of the unsophisticated home-style food. Only fresh and high-quality ingredients used and no added preservatives. With this ready-made batter, everyone can make a delicious breakfast. Save time and energy on making the batter from scratch. Make soft and fluffy idlis or crispy dosas in a jiffy.\nCountry of Origin : India\nShelf Life : 7 days\nIngredients : Rice, Urad Dal, Methi Seeds, Ro-Purified Water and Low Sodium Salt\nManufacturer Name : iD Fresh Food India Pvt Ltd\nManufacturer Address : iD Fresh Food India Pvt Ltd, Sy. Nos. 515/2, 515/3, 515/4, 516/2, 516/3, 516/4, 533, Madivala Village, Kasaba Hobli, Attibele, Anekal Taluk, Bangalore -562107, Karnataka.\nNutritional Info : Energy 143.35kcal; Protein 5.5g; Fat 1.6g; Saturated Fatty Acid 0.68g; MUFA 0.52g; Sugar 0g; PUFA 0.3g; Trans Fatty Acid 0g; Cholesterol 0mg; Carbohydrates 26.3g; Sodium 92mg;\nDescription : iD Idli and Dosa Batter will make sure that the magic of age-old tradition is not lost by giving you the wholesomeness of the unsophisticated home-style food. Only fresh and high-quality ingredients used and no added preservatives. With this ready-made batter, everyone can make a delicious breakfast. Save time and energy on making the batter from scratch. Make soft and fluffy idlis or crispy dosas in a jiffy.\nCountry of Origin : India\nShelf Life : 7 days\nIngredients : Rice, Urad Dal, Methi Seeds, Ro-Purified Water and Low Sodium Salt\nManufacturer Name : iD Fresh Food India Pvt Ltd\nManufacturer Address : iD Fresh Food India Pvt Ltd, Sy. Nos. 515/2, 515/3, 515/4, 516/2, 516/3, 516/4, 533, Madivala Village, Kasaba Hobli, Attibele, Anekal Taluk, Bangalore -562107, Karnataka.\nNutritional Info : Energy 143.35kcal; Protein 5.5g; Fat 1.6g; Saturated Fatty Acid 0.68g; MUFA 0.52g; Sugar 0g; PUFA 0.3g; Trans Fatty Acid 0g; Cholesterol 0mg; Carbohydrates 26.3g; Sodium 92mg;",
      "title": "iD Idli & Dosa Batter",
      "url": "https://www.zeptonow.com/pn/id-idli-dosa-batter/pvid/a66ba5b4-313d-4469-becd-01b69bd19fc7"
    },
    {
      "discountPercentage": "0% Off",
      "createdAt": 1723285828087,
      "sellingPrice": "₹159",
      "condition": "Clouds",
      "quantity": "500 g",
      "discountedPrice": "₹159",
      "weatherDescription": "scattered clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-1021-1021,pr-true,f-auto,q-80/cms/product_variant/affddb6d-ed08-4c27-8bfe-e76021cd48b4.jpeg",
      "temperature": 28,
      "description": "Description : Your Favourite chicken, cleaned and skin removed. Cook the way you like it.\nCountry of Origin : India\nShelf Life : 4 days\nStorage Instructions : Vacuum packing causes a noticeable distinct smell in the product. After opening keep the packet in room temperature for 2-3 minutes to eliminate such smell.\nManufacturer Name : Nandu's\nManufacturer Address : Nandu's, 377/61, 2nd Floor, 43rd Cross, 9th Main, 5th Block, Jayanagar, Bangalore.\nDescription : Your Favourite chicken, cleaned and skin removed. Cook the way you like it.\nCountry of Origin : India\nShelf Life : 4 days\nStorage Instructions : Vacuum packing causes a noticeable distinct smell in the product. After opening keep the packet in room temperature for 2-3 minutes to eliminate such smell.\nManufacturer Name : Nandu's\nManufacturer Address : Nandu's, 377/61, 2nd Floor, 43rd Cross, 9th Main, 5th Block, Jayanagar, Bangalore.",
      "title": "Nandus Chicken Curry Cut without Skin",
      "url": "https://www.zeptonow.com/pn/nandus-chicken-curry-cut-without-skin/pvid/ff0fead7-56ad-4add-90ec-cbba8c417377"
    },
    {
      "discountPercentage": "21% Off",
      "createdAt": 1724531417631,
      "sellingPrice": "₹121",
      "condition": "Rain",
      "quantity": "10 Pieces",
      "discountedPrice": "₹155",
      "weatherDescription": "light rain",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-2500-2500,pr-true,f-auto,q-80/cms/product_variant/7f5b36b6-fa06-40a7-8308-dde98e9ac9e9.jpeg",
      "temperature": 22.11,
      "description": "Description : Eggoz brings you the healthiest eggs. Our eggs have Orange yolk which is an outcome of herbal hen feed (a mix of herbs, flowers and seeds) making the eggs an amazing source of  6.75 g of protein (per egg), Vitamin D, Vitamin E, Lutein and Vitamin A.\nCountry of Origin : India\nShelf Life : 21 days\nFSSAI License : 10821005000022\nManufacturer Name : Nupa Technology Private Limited\nNutritional Info : Calories - 140 KcalProtien - 13.5 gmCarbohydrates - 0.57gmFat - (Total) 9gmPhosphorous - 180 mgCalcium - 50 mgIron - 1 mg\nDescription : Eggoz brings you the healthiest eggs. Our eggs have Orange yolk which is an outcome of herbal hen feed (a mix of herbs, flowers and seeds) making the eggs an amazing source of  6.75 g of protein (per egg), Vitamin D, Vitamin E, Lutein and Vitamin A.\nCountry of Origin : India\nShelf Life : 21 days\nFSSAI License : 10821005000022\nManufacturer Name : Nupa Technology Private Limited\nNutritional Info : Calories - 140 KcalProtien - 13.5 gmCarbohydrates - 0.57gmFat - (Total) 9gmPhosphorous - 180 mgCalcium - 50 mgIron - 1 mg",
      "title": "Eggoz Nutrition White Egg",
      "url": "https://www.zeptonow.com/pn/eggoz-nutrition-white-egg/pvid/3e5b5972-959f-4862-b1f9-b478d4c710a4"
    },
    {
      "discountPercentage": "14% Off",
      "createdAt": 1723815438206,
      "sellingPrice": "₹47",
      "condition": "Clouds",
      "quantity": "500 g",
      "discountedPrice": "₹55",
      "weatherDescription": "broken clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/067b5bdf-f963-4623-b222-3bd4beed174c.jpeg",
      "temperature": 25.3,
      "description": "Description : Raw bananas are high in potassium, which acts as a vasodilator and regulates blood pressure. It also prevents and improves heart health by preventing several cardiac disorders such as atherosclerosis and heart attacks. Green bananas have a low glycemic index and release insulin gradually after ingestion.\nCountry of Origin : India\nShelf Life : 5 days\nDescription : Raw bananas are high in potassium, which acts as a vasodilator and regulates blood pressure. It also prevents and improves heart health by preventing several cardiac disorders such as atherosclerosis and heart attacks. Green bananas have a low glycemic index and release insulin gradually after ingestion.\nCountry of Origin : India\nShelf Life : 5 days",
      "title": "Banana Raw",
      "url": "https://www.zeptonow.com/pn/banana-raw/pvid/bd32ffce-cbf9-4085-ab89-f7d6c52a7556"
    },
    {
      "discountPercentage": "13% Off",
      "createdAt": 1721817021929,
      "sellingPrice": "₹189",
      "condition": "Clouds",
      "quantity": "1 pack (Approx. 340g - 360g)",
      "discountedPrice": "₹219",
      "weatherDescription": "broken clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-1600-1600,pr-true,f-auto,q-80/cms/product_variant/a5323af8-edb1-4d6a-92ec-0bb88d8707a1.jpeg",
      "temperature": 26.15,
      "description": "Description : This product is halal certified.\nVersatile, lean, and packed with flavor. Our premium chicken mince is finely ground to perfection, making it ideal for a variety of dishes like meatballs, burgers, or stir-fries. Indulge in the juicy goodness of this high-quality mince and elevate your favorite recipes with Relish Chicken Mince. \nThis product serves: 1 to 2 people.\nCountry of Origin : India\nShelf Life : 3 days\nStorage Instructions : Vacuum packing causes a noticeable distinct smell in the product. After opening keep the packet in room temperature for 2-3 minutes to eliminate such smell. Store this product at 0 to 4 °C\nHow to Use : Best suitable for making Kebabs.\nNutritional Info : Energy:165 kcal, \nProtein:25g, \nTotal Fat: 3.6g,\nCarbohydrates:0g.\nDescription : This product is halal certified.\nVersatile, lean, and packed with flavor. Our premium chicken mince is finely ground to perfection, making it ideal for a variety of dishes like meatballs, burgers, or stir-fries. Indulge in the juicy goodness of this high-quality mince and elevate your favorite recipes with Relish Chicken Mince. \nThis product serves: 1 to 2 people.\nCountry of Origin : India\nShelf Life : 3 days\nStorage Instructions : Vacuum packing causes a noticeable distinct smell in the product. After opening keep the packet in room temperature for 2-3 minutes to eliminate such smell. Store this product at 0 to 4 °C\nHow to Use : Best suitable for making Kebabs.\nNutritional Info : Energy:165 kcal, \nProtein:25g, \nTotal Fat: 3.6g,\nCarbohydrates:0g.",
      "title": "Relish Chicken Mince",
      "url": "https://www.zeptonow.com/pn/relish-chicken-mince/pvid/06bac78c-d81f-4421-9fc3-b650de291f2b"
    },
    {
      "discountPercentage": "23% Off",
      "createdAt": 1721687419302,
      "sellingPrice": "₹77",
      "condition": "Rain",
      "quantity": "1 pack (Approx. 180g - 200g)",
      "discountedPrice": "₹100",
      "weatherDescription": "light rain",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/7f62bac8-cfd5-4871-b806-608b16de685c.jpeg",
      "temperature": 22.11,
      "description": "Description : White mushrooms are also known as table, common, button, or champignon mushrooms. They have a small stem, smooth cap, and mild flavor that pairs well with many dishes.Due to their exposure to UV rays or sunlight, mushrooms are a natural, non-animal source of vitamin D2 that’s capable of increasing blood levels of this vitamin as effectively as a supplement. White mushrooms are low in calories and sugar. They are also high in protein and vitamin D, and they’re a source of vitamin B12. As such, they are considered beneficial for those following plant-based diets.\n\nMultiple antioxidant compounds, including polyphenols, polysaccharides, ergothioneine, glutathione, selenium, and vitamin C, are believed to be behind mushrooms’ potential cancer-fighting properties\nCountry of Origin : India\nShelf Life : 4 days\nDescription : White mushrooms are also known as table, common, button, or champignon mushrooms. They have a small stem, smooth cap, and mild flavor that pairs well with many dishes.Due to their exposure to UV rays or sunlight, mushrooms are a natural, non-animal source of vitamin D2 that’s capable of increasing blood levels of this vitamin as effectively as a supplement. White mushrooms are low in calories and sugar. They are also high in protein and vitamin D, and they’re a source of vitamin B12. As such, they are considered beneficial for those following plant-based diets.\n\nMultiple antioxidant compounds, including polyphenols, polysaccharides, ergothioneine, glutathione, selenium, and vitamin C, are believed to be behind mushrooms’ potential cancer-fighting properties\nCountry of Origin : India\nShelf Life : 4 days",
      "title": "Mushroom Button",
      "url": "https://www.zeptonow.com/pn/mushroom-button/pvid/178b3f0f-c01d-4065-8f5c-d1902cbb5d51"
    },
    {
      "discountPercentage": "0% Off",
      "createdAt": 1724513416117,
      "sellingPrice": "₹58",
      "condition": "Clouds",
      "quantity": "100 g",
      "discountedPrice": "₹58",
      "weatherDescription": "scattered clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-1021-1021,pr-true,f-auto,q-80/cms/product_variant/97a5ab9d-9731-4da0-821d-1c7161ea25a3.jpeg",
      "temperature": 24.07,
      "description": "Description : Made from the freshest of cream, the Amul butter has lovely taste which is delicate and slightly salty. This finely processed butter is natural, pure and tastes best overwith toasts and sandwiches. Has a natural and pure formulation that gives it a great taste. Made from fresh cream that has a wonderful flavour. Spread it over toast or cook your curries in it for a heavenly taste.\nCountry of Origin : India\nShelf Life : 12 months\nFSSAI License : 10014021001010\nManufacturer Name : Gujarat Co-Operative Milk Marketing Federation\nManufacturer Address : Gujarat Co-Operative Milk Marketing Federation, Po Box 10, Amul Dairy Road, Anand 388 001, Gujarat, India.\nDescription : Made from the freshest of cream, the Amul butter has lovely taste which is delicate and slightly salty. This finely processed butter is natural, pure and tastes best overwith toasts and sandwiches. Has a natural and pure formulation that gives it a great taste. Made from fresh cream that has a wonderful flavour. Spread it over toast or cook your curries in it for a heavenly taste.\nCountry of Origin : India\nShelf Life : 12 months\nFSSAI License : 10014021001010\nManufacturer Name : Gujarat Co-Operative Milk Marketing Federation\nManufacturer Address : Gujarat Co-Operative Milk Marketing Federation, Po Box 10, Amul Dairy Road, Anand 388 001, Gujarat, India.",
      "title": "Amul Butter - Pasteurised",
      "url": "https://zeptonow.com/pn/amul-butter-pasteurised/pvid/8da0c985-dc37-495c-a8bd-6019c120cb44"
    },
    {
      "discountPercentage": "20% Off",
      "createdAt": 1722051024279,
      "sellingPrice": "₹139",
      "condition": "Clouds",
      "quantity": "1 pack (Approx. 480g - 500g)",
      "discountedPrice": "₹175",
      "weatherDescription": "broken clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-1600-1600,pr-true,f-auto,q-80/cms/product_variant/0769e3b2-9479-4b05-b278-6ffb9ca1b2e5.jpeg",
      "temperature": 23.01,
      "description": "Description : This product is halal certified.\nSucculent, flavorful, and perfect for curry lovers. Our premium chicken curry cut with skin adds an extra layer of taste and richness to your dishes. \nThis product serves: 2 to 3 people.\nCountry of Origin : India\nShelf Life : 4 days\nStorage Instructions : Vacuum packing causes a noticeable distinct smell in the product. After opening keep the packet in room temperature for 2-3 minutes to eliminate such smell. Store this product at 0 to 4 °C\nHow to Use : Best suitable for Curries.\nNutritional Info : Energy:165 kcal, \nProtein:25g, \nTotal Fat: 3.6g,\nCarbohydrates:0g.\nDescription : This product is halal certified.\nSucculent, flavorful, and perfect for curry lovers. Our premium chicken curry cut with skin adds an extra layer of taste and richness to your dishes. \nThis product serves: 2 to 3 people.\nCountry of Origin : India\nShelf Life : 4 days\nStorage Instructions : Vacuum packing causes a noticeable distinct smell in the product. After opening keep the packet in room temperature for 2-3 minutes to eliminate such smell. Store this product at 0 to 4 °C\nHow to Use : Best suitable for Curries.\nNutritional Info : Energy:165 kcal, \nProtein:25g, \nTotal Fat: 3.6g,\nCarbohydrates:0g.",
      "title": "Relish Chicken Curry Cut With Skin",
      "url": "https://www.zeptonow.com/pn/relish-chicken-curry-cut-with-skin/pvid/98c2ce55-81c2-4a1d-bec1-97e74bad6a18"
    },
    {
      "discountPercentage": "28% Off",
      "createdAt": 1722396632730,
      "sellingPrice": "₹162",
      "condition": "Clouds",
      "quantity": "500 g",
      "discountedPrice": "₹228",
      "weatherDescription": "broken clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-900-900,pr-true,f-auto,q-80/inventory/product/c3aa00c2-6d2b-4c50-8005-ef59bcf9fd6a-29995b32-2f3c-4633-b103-801138d27e22.jpeg",
      "temperature": 22.11,
      "description": "Country of Origin : China\nShelf Life : 5 days\nCountry of Origin : China\nShelf Life : 5 days",
      "title": "Baby Orange",
      "url": "https://www.zeptonow.com/pn/baby-orange/pvid/6f416513-2be6-4c46-9124-a217a83eb96a"
    },
    {
      "discountPercentage": "33% Off",
      "createdAt": 1722925848491,
      "sellingPrice": "₹118",
      "condition": "Clouds",
      "quantity": "",
      "discountedPrice": "₹118",
      "weatherDescription": "broken clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-1024-1024,pr-true,f-auto,q-80/cms/product_variant/79b2d5c5-8826-4b17-8144-8886fed3ea57.jpg",
      "temperature": 26.8,
      "description": "Country of Origin : India\nShelf Life : 3 days\nCountry of Origin : India\nShelf Life : 3 days",
      "title": "Ice Apple",
      "url": "https://www.zeptonow.com/pn/ice-apple/pvid/62303ea7-0610-4ec7-867b-705203a119bb"
    },
    {
      "discountPercentage": "Out of Stock25% Off",
      "createdAt": 1721554213928,
      "sellingPrice": "₹149",
      "condition": "Clouds",
      "quantity": "",
      "discountedPrice": "₹199",
      "weatherDescription": "broken clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-4000-4000,pr-true,f-auto,q-80/cms/product_variant/f1417e9e-0299-4794-b916-9f823b56aa4b.jpg",
      "temperature": 26.92,
      "description": "Description : Juicy and seasoned to perfection, ideal for a quick and satisfying breakfast. Enjoy them grilled, fried, or alongside eggs for a protein-packed start to your day.\nCountry of Origin : India\nShelf Life : 30 days\nDescription : Juicy and seasoned to perfection, ideal for a quick and satisfying breakfast. Enjoy them grilled, fried, or alongside eggs for a protein-packed start to your day.\nCountry of Origin : India\nShelf Life : 30 days",
      "title": "Relish Chicken Breakfast Sausages",
      "url": "https://www.zeptonow.com/pn/relish-chicken-breakfast-sausages/pvid/1c60a507-3062-4b3c-a231-af9e2bd41f50"
    },
    {
      "discountPercentage": "0%",
      "createdAt": 1723127440991,
      "sellingPrice": "₹55",
      "condition": "Clouds",
      "quantity": "400 g",
      "discountedPrice": "₹55",
      "weatherDescription": "scattered clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/b985a9bc-4996-4338-956e-58e6c7b6ba59.jpeg",
      "temperature": 23.75,
      "description": "Description : Healthy and nutritious brown bread made with whole wheat flour and cultured with yeast. Made with natural ingredients and contains no artificial colours and flavours. Brown bread that is fit to be had with accompaniment of your choice.�\nCountry of Origin : India\nShelf Life : 8 days\nFSSAI License : 1.00121E+13\nIngredients : Wheat Flour (Atta(52%), Water, Yeast, Sugar, Edible Common Salt, Wheat Gluten, Edible Vegetable Oils (Palm), Class II Preservative (282), Malt Powder, Improvers (170 (i), 510,923,1100), Acidity Regulator (260), Emulsifiers (471, 472e, 481 (i)), Antioxidant (300) (Numbers in brackets are as per International Numbering System)\nManufacturer Name : Mrs. Bectors Food Specialities Ltd\nManufacturer Address : Mrs. Bectors Food Specialities Ltd, Emaar Digital Greens - Tower A First Floor, Unit No. 22-27 Sector 61, Gurugram-122102, Haryana (India).\nNutritional Info : Energy - 257.28 kcal,Carbohydrates - 48.87 g, Of which Sugars - 2.25g,Fat - 2.56g,Saturated Fat - 0.62g,Trans Fat - 0 g,Protein - 9.69 g,Dietary Fiber - 10.45 g\nDescription : Healthy and nutritious brown bread made with whole wheat flour and cultured with yeast. Made with natural ingredients and contains no artificial colours and flavours. Brown bread that is fit to be had with accompaniment of your choice.�\nCountry of Origin : India\nShelf Life : 8 days\nFSSAI License : 1.00121E+13\nIngredients : Wheat Flour (Atta(52%), Water, Yeast, Sugar, Edible Common Salt, Wheat Gluten, Edible Vegetable Oils (Palm), Class II Preservative (282), Malt Powder, Improvers (170 (i), 510,923,1100), Acidity Regulator (260), Emulsifiers (471, 472e, 481 (i)), Antioxidant (300) (Numbers in brackets are as per International Numbering System)\nManufacturer Name : Mrs. Bectors Food Specialities Ltd\nManufacturer Address : Mrs. Bectors Food Specialities Ltd, Emaar Digital Greens - Tower A First Floor, Unit No. 22-27 Sector 61, Gurugram-122102, Haryana (India).\nNutritional Info : Energy - 257.28 kcal,Carbohydrates - 48.87 g, Of which Sugars - 2.25g,Fat - 2.56g,Saturated Fat - 0.62g,Trans Fat - 0 g,Protein - 9.69 g,Dietary Fiber - 10.45 g",
      "title": "English Oven 100% Whole Wheat Bread",
      "url": "https://www.zeptonow.com/pn/english-oven-100-whole-wheat-bread/pvid/d3eaa022-099a-4edd-9f2a-48246d9c5229"
    },
    {
      "discountPercentage": "Out of Stock60% Off",
      "createdAt": 1723419027330,
      "sellingPrice": "₹8",
      "condition": "Thunderstorm",
      "quantity": "100 g",
      "discountedPrice": "₹20",
      "weatherDescription": "thunderstorm with heavy rain",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/8d42f6c5-4e11-436d-81c4-cc24a3b28bcc.jpeg",
      "temperature": 21.8,
      "description": "Description : Coriander leaves are utilized as a seasoning element in many different cuisines.\nCountry of Origin : India\nShelf Life : 3 days\nDescription : Coriander leaves are utilized as a seasoning element in many different cuisines.\nCountry of Origin : India\nShelf Life : 3 days",
      "title": "Coriander Leaves",
      "url": "https://www.zeptonow.com/pn/coriander-leaves/pvid/90ec80d3-40d9-46b6-8ccb-e1b8cb65a76d"
    },
    {
      "discountPercentage": "50% Off",
      "createdAt": 1723051819861,
      "sellingPrice": "₹26",
      "condition": "Clouds",
      "quantity": "500 g",
      "discountedPrice": "₹26",
      "weatherDescription": "broken clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/0106346e-a7ef-497b-a9ff-18da5cb8d602.jpeg",
      "temperature": 22.43,
      "description": "Description : Lady finger includes pectin, a form of fiber that may help lower bad cholesterol. It may also enhance cholesterol breakdown and inhibit fat formation in the body. Lady finger has a high fiber content that aids digestion and avoids constipation due to its laxative properties. Because of its antioxidant properties, it also protects the liver from free radical damage. Regular consumption of Lady finger aids in cholesterol management and heart health.\nCountry of Origin : India\nShelf Life : 4 days\nDescription : Lady finger includes pectin, a form of fiber that may help lower bad cholesterol. It may also enhance cholesterol breakdown and inhibit fat formation in the body. Lady finger has a high fiber content that aids digestion and avoids constipation due to its laxative properties. Because of its antioxidant properties, it also protects the liver from free radical damage. Regular consumption of Lady finger aids in cholesterol management and heart health.\nCountry of Origin : India\nShelf Life : 4 days",
      "title": "Lady Finger",
      "url": "https://www.zeptonow.com/pn/lady-finger/pvid/abe657be-567e-4288-ba48-7ddd0a8a1271"
    },
    {
      "discountPercentage": "",
      "createdAt": 1721464219378,
      "sellingPrice": "",
      "condition": "Clouds",
      "quantity": "500 g",
      "discountedPrice": "",
      "weatherDescription": "broken clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-1021-1021,pr-true,f-auto,q-80/cms/product_variant/affddb6d-ed08-4c27-8bfe-e76021cd48b4.jpeg",
      "temperature": 26.14,
      "description": "Description : Your Favourite chicken, cleaned and skin removed. Cook the way you like it.\nCountry of Origin : India\nShelf Life : 4 days\nStorage Instructions : Vacuum packing causes a noticeable distinct smell in the product. After opening keep the packet in room temperature for 2-3 minutes to eliminate such smell.\nManufacturer Name : Nandu's\nManufacturer Address : Nandu's, 377/61, 2nd Floor, 43rd Cross, 9th Main, 5th Block, Jayanagar, Bangalore.\nDescription : Your Favourite chicken, cleaned and skin removed. Cook the way you like it.\nCountry of Origin : India\nShelf Life : 4 days\nStorage Instructions : Vacuum packing causes a noticeable distinct smell in the product. After opening keep the packet in room temperature for 2-3 minutes to eliminate such smell.\nManufacturer Name : Nandu's\nManufacturer Address : Nandu's, 377/61, 2nd Floor, 43rd Cross, 9th Main, 5th Block, Jayanagar, Bangalore.",
      "title": "Nandus Chicken Curry Cut without Skin",
      "url": "https://www.zeptonow.com/pn/nandus-chicken-curry-cut-without-skin/pvid/ff0fead7-56ad-4add-90ec-cbba8c417377"
    },
    {
      "discountPercentage": "",
      "createdAt": 1721014213837,
      "sellingPrice": "₹140",
      "condition": "Drizzle",
      "quantity": "200 g",
      "discountedPrice": "₹140",
      "weatherDescription": "light intensity drizzle",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-2000-2000,pr-true,f-auto,q-80/cms/product_variant/aaca95cb-8fff-4a1e-9909-fff376b0b50e.jpeg",
      "temperature": 21.37,
      "description": "Description : Enjoy the authentic taste of homemade paneer every day with Akshayakalpa Malai Paneer. Healthy & tasty, it is an organic dairy product which is absolutely suitable for vegetarians. No preservatives, artificial additives or flavouring, and no emulsifiers are used in this malai paneer.\nCountry of Origin : India\nShelf Life : 30 days\nFSSAI License : 11218317000001\nIngredients : Organic Milk\nManufacturer Name : Akshayakalpa Farms & Foods Pvt Ltd\nManufacturer Address : Akshayakalpa Farms & Foods Pvt Ltd, Kodihally, Anathi Gramapanchayath, Bagur(H), C. R. Patna Tq, Hassan Dist., 573131.\nDescription : Enjoy the authentic taste of homemade paneer every day with Akshayakalpa Malai Paneer. Healthy & tasty, it is an organic dairy product which is absolutely suitable for vegetarians. No preservatives, artificial additives or flavouring, and no emulsifiers are used in this malai paneer.\nCountry of Origin : India\nShelf Life : 30 days\nFSSAI License : 11218317000001\nIngredients : Organic Milk\nManufacturer Name : Akshayakalpa Farms & Foods Pvt Ltd\nManufacturer Address : Akshayakalpa Farms & Foods Pvt Ltd, Kodihally, Anathi Gramapanchayath, Bagur(H), C. R. Patna Tq, Hassan Dist., 573131.",
      "title": "Akshayakalpa Organic Malai Paneer",
      "url": "https://www.zeptonow.com/pn/akshayakalpa-organic-malai-paneer/pvid/a5b27839-d7bb-4c42-9687-16ba67ea2d83"
    },
    {
      "discountPercentage": "2% Off",
      "createdAt": 1723415414366,
      "sellingPrice": "₹131",
      "condition": "Rain",
      "quantity": "200 g",
      "discountedPrice": "₹135",
      "weatherDescription": "moderate rain",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-1021-1021,pr-true,f-auto,q-80/cms/product_variant/1155ee18-bb10-431a-804c-78307d6c432a.jpeg",
      "temperature": 22.6,
      "description": "Description : Add yummy double cheese burst to all your dishes with Amul Cheese Cubes and enjoy the mouth-watering burst of flavours. The cheese is rich in protein and vitamins making it a healthy ingredient in all the dishes. A simple omelette will also taste amazing with these cubes of Amul cheese. The cube form of cheese makes it easier to use in the pizzas, fondues and other exotic dishes. The cubic can be used in a thousand ways, from party platter to grating it into the soup. The cheese lover has many options to include cheese in their diet.\nCountry of Origin : India\nShelf Life : 9 months\nManufacturer Name : Gujarat Co-Operative Milk Marketing Federation\nManufacturer Address : Gujarat Co-Operative Milk Marketing Federation, Po Box 10, Amul Dairy Road, Anand 388 001, Gujarat, India.\nDescription : Add yummy double cheese burst to all your dishes with Amul Cheese Cubes and enjoy the mouth-watering burst of flavours. The cheese is rich in protein and vitamins making it a healthy ingredient in all the dishes. A simple omelette will also taste amazing with these cubes of Amul cheese. The cube form of cheese makes it easier to use in the pizzas, fondues and other exotic dishes. The cubic can be used in a thousand ways, from party platter to grating it into the soup. The cheese lover has many options to include cheese in their diet.\nCountry of Origin : India\nShelf Life : 9 months\nManufacturer Name : Gujarat Co-Operative Milk Marketing Federation\nManufacturer Address : Gujarat Co-Operative Milk Marketing Federation, Po Box 10, Amul Dairy Road, Anand 388 001, Gujarat, India.",
      "title": "Amul Processed Cheese Cubes",
      "url": "https://www.zeptonow.com/pn/amul-processed-cheese-cubes/pvid/d7e39d38-933d-4f4d-8c7b-985c846803c8"
    },
    {
      "discountPercentage": "39% Off",
      "createdAt": 1724095895789,
      "sellingPrice": "₹23",
      "condition": "Clouds",
      "quantity": "500 g",
      "discountedPrice": "₹38",
      "weatherDescription": "scattered clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/270711b9-d545-44a6-a984-98e0fae2cd55.jpeg",
      "temperature": 23.01,
      "description": "Description : The tomato is the edible berry of the Tomato plant. Contains vitamin C, K. Contains lycopene, an antioxidant that reduces the risk of cancer and heart-diseases. Can be consumed in diverse ways, raw or cooked, in many dishes, sauces, salads, and drinks. While tomatoes are fruits they are commonly used culinarily as a vegetable ingredient or side dish.\nCountry of Origin : India\nShelf Life : 3 days\nDescription : The tomato is the edible berry of the Tomato plant. Contains vitamin C, K. Contains lycopene, an antioxidant that reduces the risk of cancer and heart-diseases. Can be consumed in diverse ways, raw or cooked, in many dishes, sauces, salads, and drinks. While tomatoes are fruits they are commonly used culinarily as a vegetable ingredient or side dish.\nCountry of Origin : India\nShelf Life : 3 days",
      "title": "Tomato Local",
      "url": "https://www.zeptonow.com/pn/tomato-local/pvid/7e261768-88d6-4cbb-8b9b-8718625577bd"
    },
    {
      "discountPercentage": "32% Off",
      "createdAt": 1721791823455,
      "sellingPrice": "₹70",
      "condition": "Clouds",
      "quantity": "500 g",
      "discountedPrice": "₹103",
      "weatherDescription": "broken clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-500-336,pr-true,f-auto,q-80/inventory/product/7ae21cf6-2ac9-48c8-8e6f-cf27edc2aaaa-7de8a131-bfb2-4121-8615-dad1dc0306ae.jpeg",
      "temperature": 21.69,
      "description": "Country of Origin : India\nShelf Life : 4 days\nCountry of Origin : India\nShelf Life : 4 days",
      "title": "Carrot Local",
      "url": "https://www.zeptonow.com/pn/carrot-local/pvid/30db5880-2b4a-4955-9c2d-833749f7adc2"
    },
    {
      "discountPercentage": "48% Off",
      "createdAt": 1723195822597,
      "sellingPrice": "₹49",
      "condition": "Clouds",
      "quantity": "300g",
      "discountedPrice": "₹95",
      "weatherDescription": "scattered clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/41dac350-b4a0-434a-9653-2ea45fe9887e.jpeg",
      "temperature": 27.75,
      "description": "Description : Cauliflower is a vegetable that is abundant in fiber and B vitamins by nature. It offers numerous health benefits, including improved digestion and circulation. It contains antioxidants and phytonutrients that can help prevent cancer. It also contains fiber, which aids in weight loss and digestion, choline, which is necessary for learning and memory, and a variety of other critical nutrients.\nCountry of Origin : India\nShelf Life : 3 days\nDescription : Cauliflower is a vegetable that is abundant in fiber and B vitamins by nature. It offers numerous health benefits, including improved digestion and circulation. It contains antioxidants and phytonutrients that can help prevent cancer. It also contains fiber, which aids in weight loss and digestion, choline, which is necessary for learning and memory, and a variety of other critical nutrients.\nCountry of Origin : India\nShelf Life : 3 days",
      "title": "Cauliflower",
      "url": "https://www.zeptonow.com/pn/cauliflower/pvid/26574e4c-d976-4428-a3a6-2711e0a17485"
    },
    {
      "discountPercentage": "Out of Stock",
      "createdAt": 1724682623214,
      "sellingPrice": "₹275",
      "condition": "Clouds",
      "quantity": "400 g",
      "discountedPrice": "₹275",
      "weatherDescription": "scattered clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/bb6b8724-c54c-4102-809e-cb95cda5386e.jpg",
      "temperature": 24.97,
      "description": "Description : Tender, boneless fillets of chicken meat cut from the breast. Chicken breast is one of the meatier cuts of a chicken, which comes from the breast bone of the bird. This cut is skinless and has a supple texture. A good source of vitamins and minerals, chicken breast, is also a great choice for a lean protein diet. Apply a flavourful spice-rub and pan-fry, bake, grill, or slow-cook the chicken breast to relish this versatile cut.�\nCountry of Origin : India\nShelf Life : 3 days\nFSSAI License : 10017043001721\nStorage Instructions : Vacuum packing causes a noticeable distinct smell in the product. After opening keep the packet in room temperature for 2-3 minutes to eliminate such smell.\nManufacturer Name : Delighful Gourmet Private Limited\nManufacturer Address : Delighful Gourmet Private Limited, 12, Zed Peral, House of Licious, Domlur 1st Stage Domlur Layout, Bangalore, Bengaluru (Bangalore) Urban, Karnataka, 560071.\nDescription : Tender, boneless fillets of chicken meat cut from the breast. Chicken breast is one of the meatier cuts of a chicken, which comes from the breast bone of the bird. This cut is skinless and has a supple texture. A good source of vitamins and minerals, chicken breast, is also a great choice for a lean protein diet. Apply a flavourful spice-rub and pan-fry, bake, grill, or slow-cook the chicken breast to relish this versatile cut.�\nCountry of Origin : India\nShelf Life : 3 days\nFSSAI License : 10017043001721\nStorage Instructions : Vacuum packing causes a noticeable distinct smell in the product. After opening keep the packet in room temperature for 2-3 minutes to eliminate such smell.\nManufacturer Name : Delighful Gourmet Private Limited\nManufacturer Address : Delighful Gourmet Private Limited, 12, Zed Peral, House of Licious, Domlur 1st Stage Domlur Layout, Bangalore, Bengaluru (Bangalore) Urban, Karnataka, 560071.",
      "title": "Licious Chicken Breast Boneless",
      "url": "https://www.zeptonow.com/pn/licious-chicken-breast-boneless/pvid/8ff55a82-411a-4793-8259-396e72f415fb"
    },
    {
      "discountPercentage": "0% Off",
      "createdAt": 1724653842218,
      "sellingPrice": "₹140",
      "condition": "Clouds",
      "quantity": "200 g",
      "discountedPrice": "₹140",
      "weatherDescription": "scattered clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-2000-2000,pr-true,f-auto,q-80/cms/product_variant/aaca95cb-8fff-4a1e-9909-fff376b0b50e.jpeg",
      "temperature": 27.1,
      "description": "Description : Enjoy the authentic taste of homemade paneer every day with Akshayakalpa Malai Paneer. Healthy & tasty, it is an organic dairy product which is absolutely suitable for vegetarians. No preservatives, artificial additives or flavouring, and no emulsifiers are used in this malai paneer.\nCountry of Origin : India\nShelf Life : 30 days\nFSSAI License : 11218317000001\nIngredients : Organic Milk\nManufacturer Name : Akshayakalpa Farms & Foods Pvt Ltd\nManufacturer Address : Akshayakalpa Farms & Foods Pvt Ltd, Kodihally, Anathi Gramapanchayath, Bagur(H), C. R. Patna Tq, Hassan Dist., 573131.\nDescription : Enjoy the authentic taste of homemade paneer every day with Akshayakalpa Malai Paneer. Healthy & tasty, it is an organic dairy product which is absolutely suitable for vegetarians. No preservatives, artificial additives or flavouring, and no emulsifiers are used in this malai paneer.\nCountry of Origin : India\nShelf Life : 30 days\nFSSAI License : 11218317000001\nIngredients : Organic Milk\nManufacturer Name : Akshayakalpa Farms & Foods Pvt Ltd\nManufacturer Address : Akshayakalpa Farms & Foods Pvt Ltd, Kodihally, Anathi Gramapanchayath, Bagur(H), C. R. Patna Tq, Hassan Dist., 573131.",
      "title": "Akshayakalpa Organic Malai Paneer",
      "url": "https://www.zeptonow.com/pn/akshayakalpa-organic-malai-paneer/pvid/a5b27839-d7bb-4c42-9687-16ba67ea2d83"
    },
    {
      "discountPercentage": "38% Off",
      "createdAt": 1723941032274,
      "sellingPrice": "₹54",
      "condition": "Clouds",
      "quantity": "200 g",
      "discountedPrice": "₹88",
      "weatherDescription": "overcast clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/64f4c142-1f4f-45f9-bbdf-310799d18585.jpeg",
      "temperature": 22.45,
      "description": "Description : The flavor of ginger is frequently described as spicy, peppery, and warm or hot. I also find it a little sweet. Young ginger is highly juicy and has a considerably milder flavor. As it ages, it gets more fibrous, less juicy, and significantly stronger/hotter.\nCountry of Origin : India\nShelf Life : 3 days\nDescription : The flavor of ginger is frequently described as spicy, peppery, and warm or hot. I also find it a little sweet. Young ginger is highly juicy and has a considerably milder flavor. As it ages, it gets more fibrous, less juicy, and significantly stronger/hotter.\nCountry of Origin : India\nShelf Life : 3 days",
      "title": "Ginger",
      "url": "https://www.zeptonow.com/pn/ginger/pvid/2952f7bd-4254-413a-9c74-7f0717d2e5e7"
    },
    {
      "discountPercentage": "22% Off",
      "createdAt": 1721550621344,
      "sellingPrice": "₹63",
      "condition": "Clouds",
      "quantity": "1 kg",
      "discountedPrice": "₹81",
      "weatherDescription": "broken clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/9ff7104c-3324-4eea-97a8-a4deccc87c20.jpeg",
      "temperature": 25.94,
      "description": "Description : Potatoes are high in vitamin C, an antioxidant.Potassium, an electrolyte that helps our heart, muscles, and nervous system, is another important mineral in potatoes.The fiber, potassium, vitamin C, and vitamin B6 content of potatoes, together with their absence of cholesterol, all promote heart health. The fiber content of potatoes is high. Fiber reduces the total quantity of cholesterol in the blood, lowering the risk of heart disease.\nCountry of Origin : India\nShelf Life : 5 days\nDescription : Potatoes are high in vitamin C, an antioxidant.Potassium, an electrolyte that helps our heart, muscles, and nervous system, is another important mineral in potatoes.The fiber, potassium, vitamin C, and vitamin B6 content of potatoes, together with their absence of cholesterol, all promote heart health. The fiber content of potatoes is high. Fiber reduces the total quantity of cholesterol in the blood, lowering the risk of heart disease.\nCountry of Origin : India\nShelf Life : 5 days",
      "title": "Potato",
      "url": "https://www.zeptonow.com/pn/potato/pvid/d38ec8e4-9042-4b42-8f4e-fe879bd50c4b"
    },
    {
      "discountPercentage": "10% Off",
      "createdAt": 1723746617084,
      "sellingPrice": "₹49",
      "condition": "Clouds",
      "quantity": "400 g",
      "discountedPrice": "₹55",
      "weatherDescription": "overcast clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/fda0ca47-bd64-4777-bc04-163ba554da1e.jpeg",
      "temperature": 24.67,
      "description": "Description : Choose the wholesome goodness of our Fibre-rich Modern 100% Whole Wheat Bread that is made with ZERO Maida.\nSwitch today to add nourishment to your breakfast and transform you day. Kyunki, Hi-Fibre bread se rahe tummy khush. Aur fir, tummy khush to aap khush!\nDisclaimer - Zero Maida and Wheat Flour used is 100% Whole Wheat Flour (Atta)\nCountry of Origin : India\nShelf Life : 10 days\nIngredients : Whole Wheat Flour (Atta) (57.3%), Sugar, Gluten, Yeast, Edible Vegetable Oil (Refined Palmolein Oil), Iodized Salt, Milk Solids, Oat Flour, Soya Flour, Preservatives (282, 200), Malt Product, Acidity Regulators {341(i), 260, 297}, Emulsifier (471), Flour Treatment Agent (510), and Antioxidant (300). (Numbers referred above are as per International Numbering System). Contains Wheat, Milk, Oat, Soya and Barley ingredients\nManufacturer Name : Modern Food Enterprises Pvt Ltd\nManufacturer Address : Modern Food Enterprises Pvt Ltd, AIPL Business Club, 8th Floor, Wing-3, Sector � 62, Gurugram, Haryana-122002.\nDescription : Choose the wholesome goodness of our Fibre-rich Modern 100% Whole Wheat Bread that is made with ZERO Maida.\nSwitch today to add nourishment to your breakfast and transform you day. Kyunki, Hi-Fibre bread se rahe tummy khush. Aur fir, tummy khush to aap khush!\nDisclaimer - Zero Maida and Wheat Flour used is 100% Whole Wheat Flour (Atta)\nCountry of Origin : India\nShelf Life : 10 days\nIngredients : Whole Wheat Flour (Atta) (57.3%), Sugar, Gluten, Yeast, Edible Vegetable Oil (Refined Palmolein Oil), Iodized Salt, Milk Solids, Oat Flour, Soya Flour, Preservatives (282, 200), Malt Product, Acidity Regulators {341(i), 260, 297}, Emulsifier (471), Flour Treatment Agent (510), and Antioxidant (300). (Numbers referred above are as per International Numbering System). Contains Wheat, Milk, Oat, Soya and Barley ingredients\nManufacturer Name : Modern Food Enterprises Pvt Ltd\nManufacturer Address : Modern Food Enterprises Pvt Ltd, AIPL Business Club, 8th Floor, Wing-3, Sector � 62, Gurugram, Haryana-122002.",
      "title": "Modern 100% Whole Wheat - Zero Maida Breakfast Bread",
      "url": "https://www.zeptonow.com/pn/modern-100-whole-wheat-zero-maida-breakfast-bread/pvid/a9da2861-358c-4824-b58c-d357e36eeca7"
    },
    {
      "discountPercentage": "28% Off",
      "createdAt": 1722493892510,
      "sellingPrice": "₹69",
      "condition": "Clouds",
      "quantity": "1 pc (Approx. 600g - 1.2kg)",
      "discountedPrice": "₹97",
      "weatherDescription": "scattered clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/2d835650-5530-4e70-bb6f-2876f65610fc.jpeg",
      "temperature": 25.53,
      "description": "Description : Papayas contain high levels of antioxidants vitamin a, vitamin c, and vitamin e. Diets high in antioxidants may reduce the risk of heart disease. The antioxidants prevent the oxidation of cholesterol. When cholesterol oxidizes, it’s more likely to create blockages that lead to heart disease.\nCountry of Origin : India\nShelf Life : 5 days\nHow to Use : Suitable for salad and can be eaten fresh.\nDescription : Papayas contain high levels of antioxidants vitamin a, vitamin c, and vitamin e. Diets high in antioxidants may reduce the risk of heart disease. The antioxidants prevent the oxidation of cholesterol. When cholesterol oxidizes, it’s more likely to create blockages that lead to heart disease.\nCountry of Origin : India\nShelf Life : 5 days\nHow to Use : Suitable for salad and can be eaten fresh.",
      "title": "Papaya",
      "url": "https://www.zeptonow.com/pn/papaya/pvid/9d6ab15c-70e5-410f-9d4b-82be81494244"
    },
    {
      "discountPercentage": "31% Off",
      "createdAt": 1723523460571,
      "sellingPrice": "₹70",
      "condition": "Clouds",
      "quantity": "1 pc (Approx. 600g - 800g)",
      "discountedPrice": "₹102",
      "weatherDescription": "few clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-2924-3000,pr-true,f-auto,q-80/cms/product_variant/3adc39a4-e8dc-4da5-84e8-872396a75bdc.jpeg",
      "temperature": 26.89,
      "description": "Description : Muskmelon has a high fibre and water content, making it an excellent natural remedy for indigestion, constipation, and other digestive ailments.This fruit's fibre content aids in the regulation of normal bowel motions while also having a relaxing and cooling impact on the stomach. Furthermore, its high vitamin c content aids in the treatment of stomach ulcers.\nCountry of Origin : India\nShelf Life : 4 days\nHow to Use : Suitable for salad and can be eaten fresh.\nDescription : Muskmelon has a high fibre and water content, making it an excellent natural remedy for indigestion, constipation, and other digestive ailments.This fruit's fibre content aids in the regulation of normal bowel motions while also having a relaxing and cooling impact on the stomach. Furthermore, its high vitamin c content aids in the treatment of stomach ulcers.\nCountry of Origin : India\nShelf Life : 4 days\nHow to Use : Suitable for salad and can be eaten fresh.",
      "title": "Muskmelon",
      "url": "https://www.zeptonow.com/pn/muskmelon/pvid/b27712ea-5097-4c98-9250-ff25bbb71415"
    },
    {
      "discountPercentage": "18% Off",
      "createdAt": 1724599818527,
      "sellingPrice": "₹63",
      "condition": "Clouds",
      "quantity": "1 kg",
      "discountedPrice": "₹77",
      "weatherDescription": "scattered clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/3383b1f8-c1be-4e07-ad30-74418513f8fc.jpeg",
      "temperature": 24.23,
      "description": "Description : Onions are high in nutrients and have been linked to a variety of health benefits such as enhanced heart health, better blood sugar control, and greater bone density.\nCountry of Origin : India\nShelf Life : 6 days\nDescription : Onions are high in nutrients and have been linked to a variety of health benefits such as enhanced heart health, better blood sugar control, and greater bone density.\nCountry of Origin : India\nShelf Life : 6 days",
      "title": "Onion",
      "url": "https://www.zeptonow.com/pn/onion/pvid/2f6630cd-3d48-4ac8-9905-1cf2acf28ec7"
    },
    {
      "discountPercentage": "2% Off",
      "createdAt": 1720798205207,
      "sellingPrice": "₹65",
      "condition": "Rain",
      "quantity": "1 l",
      "discountedPrice": "₹67",
      "weatherDescription": "heavy intensity rain",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/a7d7f8e5-544c-40dd-8461-e4dcf24f2129.jpeg",
      "temperature": 22.59,
      "description": "Description : Good Life Milk is hygenic and rich in protein and no need to boil. The milk is homogenised. UHT Processed and aseptically packed in a special six layer, tamper-proof Tetra Packaging with 100% pure health and 0% bacteria.\nCountry of Origin : India\nShelf Life : 6 months\nManufacturer Name : Karnataka Co-Operative Milk Producer's Federation Limited\nManufacturer Address : Karnataka Co-Operative Milk Producer's Federation Limited, KMF Complex, D.R.College Post, Dr.M.H.Marigowda Road, Bengaluru-560 029.\nDescription : Good Life Milk is hygenic and rich in protein and no need to boil. The milk is homogenised. UHT Processed and aseptically packed in a special six layer, tamper-proof Tetra Packaging with 100% pure health and 0% bacteria.\nCountry of Origin : India\nShelf Life : 6 months\nManufacturer Name : Karnataka Co-Operative Milk Producer's Federation Limited\nManufacturer Address : Karnataka Co-Operative Milk Producer's Federation Limited, KMF Complex, D.R.College Post, Dr.M.H.Marigowda Road, Bengaluru-560 029.",
      "title": "Nandini Goodlife Regular Milk UHT (Tetra Pack Brik)",
      "url": "https://www.zeptonow.com/pn/nandini-goodlife-regular-milk-uht-tetra-pack-brik/pvid/b76a82b8-8c7d-4b3a-aa17-754fa3bfc0d4"
    },
    {
      "discountPercentage": "1% Off",
      "createdAt": 1722900612812,
      "sellingPrice": "₹57",
      "condition": "Clouds",
      "quantity": "100 g",
      "discountedPrice": "₹57",
      "weatherDescription": "broken clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-1021-1021,pr-true,f-auto,q-80/cms/product_variant/97a5ab9d-9731-4da0-821d-1c7161ea25a3.jpeg",
      "temperature": 21.37,
      "description": "Description : Made from the freshest of cream, the Amul butter has lovely taste which is delicate and slightly salty. This finely processed butter is natural, pure and tastes best overwith toasts and sandwiches. Has a natural and pure formulation that gives it a great taste. Made from fresh cream that has a wonderful flavour. Spread it over toast or cook your curries in it for a heavenly taste.\nCountry of Origin : India\nShelf Life : 12 months\nFSSAI License : 10014021001010\nManufacturer Name : Gujarat Co-Operative Milk Marketing Federation\nManufacturer Address : Gujarat Co-Operative Milk Marketing Federation, Po Box 10, Amul Dairy Road, Anand 388 001, Gujarat, India.\nDescription : Made from the freshest of cream, the Amul butter has lovely taste which is delicate and slightly salty. This finely processed butter is natural, pure and tastes best overwith toasts and sandwiches. Has a natural and pure formulation that gives it a great taste. Made from fresh cream that has a wonderful flavour. Spread it over toast or cook your curries in it for a heavenly taste.\nCountry of Origin : India\nShelf Life : 12 months\nFSSAI License : 10014021001010\nManufacturer Name : Gujarat Co-Operative Milk Marketing Federation\nManufacturer Address : Gujarat Co-Operative Milk Marketing Federation, Po Box 10, Amul Dairy Road, Anand 388 001, Gujarat, India.",
      "title": "Amul Butter - Pasteurised",
      "url": "https://zeptonow.com/pn/amul-butter-pasteurised/pvid/8da0c985-dc37-495c-a8bd-6019c120cb44"
    },
    {
      "discountPercentage": "0% Off",
      "createdAt": 1723955408445,
      "sellingPrice": "₹55",
      "condition": "Clouds",
      "quantity": "400 g",
      "discountedPrice": "₹55",
      "weatherDescription": "scattered clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/b985a9bc-4996-4338-956e-58e6c7b6ba59.jpeg",
      "temperature": 26.77,
      "description": "Description : Healthy and nutritious brown bread made with whole wheat flour and cultured with yeast. Made with natural ingredients and contains no artificial colours and flavours. Brown bread that is fit to be had with accompaniment of your choice.�\nCountry of Origin : India\nShelf Life : 8 days\nFSSAI License : 1.00121E+13\nIngredients : Wheat Flour (Atta(52%), Water, Yeast, Sugar, Edible Common Salt, Wheat Gluten, Edible Vegetable Oils (Palm), Class II Preservative (282), Malt Powder, Improvers (170 (i), 510,923,1100), Acidity Regulator (260), Emulsifiers (471, 472e, 481 (i)), Antioxidant (300) (Numbers in brackets are as per International Numbering System)\nManufacturer Name : Mrs. Bectors Food Specialities Ltd\nManufacturer Address : Mrs. Bectors Food Specialities Ltd, Emaar Digital Greens - Tower A First Floor, Unit No. 22-27 Sector 61, Gurugram-122102, Haryana (India).\nNutritional Info : Energy - 257.28 kcal,Carbohydrates - 48.87 g, Of which Sugars - 2.25g,Fat - 2.56g,Saturated Fat - 0.62g,Trans Fat - 0 g,Protein - 9.69 g,Dietary Fiber - 10.45 g\nDescription : Healthy and nutritious brown bread made with whole wheat flour and cultured with yeast. Made with natural ingredients and contains no artificial colours and flavours. Brown bread that is fit to be had with accompaniment of your choice.�\nCountry of Origin : India\nShelf Life : 8 days\nFSSAI License : 1.00121E+13\nIngredients : Wheat Flour (Atta(52%), Water, Yeast, Sugar, Edible Common Salt, Wheat Gluten, Edible Vegetable Oils (Palm), Class II Preservative (282), Malt Powder, Improvers (170 (i), 510,923,1100), Acidity Regulator (260), Emulsifiers (471, 472e, 481 (i)), Antioxidant (300) (Numbers in brackets are as per International Numbering System)\nManufacturer Name : Mrs. Bectors Food Specialities Ltd\nManufacturer Address : Mrs. Bectors Food Specialities Ltd, Emaar Digital Greens - Tower A First Floor, Unit No. 22-27 Sector 61, Gurugram-122102, Haryana (India).\nNutritional Info : Energy - 257.28 kcal,Carbohydrates - 48.87 g, Of which Sugars - 2.25g,Fat - 2.56g,Saturated Fat - 0.62g,Trans Fat - 0 g,Protein - 9.69 g,Dietary Fiber - 10.45 g",
      "title": "English Oven 100% Whole Wheat Bread",
      "url": "https://www.zeptonow.com/pn/english-oven-100-whole-wheat-bread/pvid/d3eaa022-099a-4edd-9f2a-48246d9c5229"
    },
    {
      "discountPercentage": "0% Off",
      "createdAt": 1723847410569,
      "sellingPrice": "₹55",
      "condition": "Clouds",
      "quantity": "400 g",
      "discountedPrice": "₹55",
      "weatherDescription": "overcast clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/b985a9bc-4996-4338-956e-58e6c7b6ba59.jpeg",
      "temperature": 23.28,
      "description": "Description : Healthy and nutritious brown bread made with whole wheat flour and cultured with yeast. Made with natural ingredients and contains no artificial colours and flavours. Brown bread that is fit to be had with accompaniment of your choice.�\nCountry of Origin : India\nShelf Life : 8 days\nFSSAI License : 1.00121E+13\nIngredients : Wheat Flour (Atta(52%), Water, Yeast, Sugar, Edible Common Salt, Wheat Gluten, Edible Vegetable Oils (Palm), Class II Preservative (282), Malt Powder, Improvers (170 (i), 510,923,1100), Acidity Regulator (260), Emulsifiers (471, 472e, 481 (i)), Antioxidant (300) (Numbers in brackets are as per International Numbering System)\nManufacturer Name : Mrs. Bectors Food Specialities Ltd\nManufacturer Address : Mrs. Bectors Food Specialities Ltd, Emaar Digital Greens - Tower A First Floor, Unit No. 22-27 Sector 61, Gurugram-122102, Haryana (India).\nNutritional Info : Energy - 257.28 kcal,Carbohydrates - 48.87 g, Of which Sugars - 2.25g,Fat - 2.56g,Saturated Fat - 0.62g,Trans Fat - 0 g,Protein - 9.69 g,Dietary Fiber - 10.45 g\nDescription : Healthy and nutritious brown bread made with whole wheat flour and cultured with yeast. Made with natural ingredients and contains no artificial colours and flavours. Brown bread that is fit to be had with accompaniment of your choice.�\nCountry of Origin : India\nShelf Life : 8 days\nFSSAI License : 1.00121E+13\nIngredients : Wheat Flour (Atta(52%), Water, Yeast, Sugar, Edible Common Salt, Wheat Gluten, Edible Vegetable Oils (Palm), Class II Preservative (282), Malt Powder, Improvers (170 (i), 510,923,1100), Acidity Regulator (260), Emulsifiers (471, 472e, 481 (i)), Antioxidant (300) (Numbers in brackets are as per International Numbering System)\nManufacturer Name : Mrs. Bectors Food Specialities Ltd\nManufacturer Address : Mrs. Bectors Food Specialities Ltd, Emaar Digital Greens - Tower A First Floor, Unit No. 22-27 Sector 61, Gurugram-122102, Haryana (India).\nNutritional Info : Energy - 257.28 kcal,Carbohydrates - 48.87 g, Of which Sugars - 2.25g,Fat - 2.56g,Saturated Fat - 0.62g,Trans Fat - 0 g,Protein - 9.69 g,Dietary Fiber - 10.45 g",
      "title": "English Oven 100% Whole Wheat Bread",
      "url": "https://www.zeptonow.com/pn/english-oven-100-whole-wheat-bread/pvid/d3eaa022-099a-4edd-9f2a-48246d9c5229"
    },
    {
      "discountPercentage": "33% Off",
      "createdAt": 1722601889210,
      "sellingPrice": "₹30",
      "condition": "Clouds",
      "quantity": "250 g",
      "discountedPrice": "₹45",
      "weatherDescription": "broken clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/267ab85f-24b7-4702-b304-4cb1d81e9bd2.jpeg",
      "temperature": 22.92,
      "description": "Description : Spinach is a healthy leafy green food that can improve skin, hair, and bone health. Additionally, this vegetable has minerals and vitamins that can provide a variety of benefits.\nCountry of Origin : India\nShelf Life : 3 days\nDescription : Spinach is a healthy leafy green food that can improve skin, hair, and bone health. Additionally, this vegetable has minerals and vitamins that can provide a variety of benefits.\nCountry of Origin : India\nShelf Life : 3 days",
      "title": "Spinach - Cleaned, without roots",
      "url": "https://www.zeptonow.com/pn/spinach-cleaned-without-roots/pvid/eeb31b35-04a7-47a7-a434-dd6625f1e82c"
    },
    {
      "discountPercentage": "",
      "createdAt": 1721766611780,
      "sellingPrice": "",
      "condition": "Clouds",
      "quantity": "100 g",
      "discountedPrice": "",
      "weatherDescription": "scattered clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-1021-1021,pr-true,f-auto,q-80/cms/product_variant/97a5ab9d-9731-4da0-821d-1c7161ea25a3.jpeg",
      "temperature": 21.37,
      "description": "Description : Made from the freshest of cream, the Amul butter has lovely taste which is delicate and slightly salty. This finely processed butter is natural, pure and tastes best overwith toasts and sandwiches. Has a natural and pure formulation that gives it a great taste. Made from fresh cream that has a wonderful flavour. Spread it over toast or cook your curries in it for a heavenly taste.\nCountry of Origin : India\nShelf Life : 12 months\nFSSAI License : 10014021001010\nManufacturer Name : Gujarat Co-Operative Milk Marketing Federation\nManufacturer Address : Gujarat Co-Operative Milk Marketing Federation, Po Box 10, Amul Dairy Road, Anand 388 001, Gujarat, India.\nDescription : Made from the freshest of cream, the Amul butter has lovely taste which is delicate and slightly salty. This finely processed butter is natural, pure and tastes best overwith toasts and sandwiches. Has a natural and pure formulation that gives it a great taste. Made from fresh cream that has a wonderful flavour. Spread it over toast or cook your curries in it for a heavenly taste.\nCountry of Origin : India\nShelf Life : 12 months\nFSSAI License : 10014021001010\nManufacturer Name : Gujarat Co-Operative Milk Marketing Federation\nManufacturer Address : Gujarat Co-Operative Milk Marketing Federation, Po Box 10, Amul Dairy Road, Anand 388 001, Gujarat, India.",
      "title": "Amul Butter - Pasteurised",
      "url": "https://zeptonow.com/pn/amul-butter-pasteurised/pvid/8da0c985-dc37-495c-a8bd-6019c120cb44"
    },
    {
      "discountPercentage": "Out of Stock4% Off",
      "createdAt": 1723246217596,
      "sellingPrice": "₹209",
      "condition": "Rain",
      "quantity": "1 pack (Approx. 480g - 500g)",
      "discountedPrice": "₹219",
      "weatherDescription": "moderate rain",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-1517-1517,pr-true,f-auto,q-80/cms/product_variant/fa902dfb-cef4-4c2c-a9f3-bca41dd47918.jpeg",
      "temperature": 22.11,
      "description": "Description : Fresh, flavorful, and perfect for traditional fish curries. Our premium Rohu curry cut with head is sourced from the finest quality Rohu farms, ensuring an authentic seafood experience. Each cut is thoughtfully portioned, including the head, to enhance the flavors and bring a delightful visual appeal to your curries. Elevate your fish dishes with Relish Rohu Curry Cut with Head. \nThis product serves: 3 to 4 people.\nCountry of Origin : India\nShelf Life : 4 days\nStorage Instructions : Vacuum packing causes a noticeable distinct smell in the product. After opening keep the packet in room temperature for 2-3 minutes to eliminate such smell. Store this product at 0 to 4 °C\nHow to Use : Best suitable for Curries/Roasts/Fry.\nManufacturer Name : Relish\nNutritional Info : Energy: 97Kcal, \nProtein: 17g,\nTotal Fat: 1g, \nCarbohydrates: 4g.\nDescription : Fresh, flavorful, and perfect for traditional fish curries. Our premium Rohu curry cut with head is sourced from the finest quality Rohu farms, ensuring an authentic seafood experience. Each cut is thoughtfully portioned, including the head, to enhance the flavors and bring a delightful visual appeal to your curries. Elevate your fish dishes with Relish Rohu Curry Cut with Head. \nThis product serves: 3 to 4 people.\nCountry of Origin : India\nShelf Life : 4 days\nStorage Instructions : Vacuum packing causes a noticeable distinct smell in the product. After opening keep the packet in room temperature for 2-3 minutes to eliminate such smell. Store this product at 0 to 4 °C\nHow to Use : Best suitable for Curries/Roasts/Fry.\nManufacturer Name : Relish\nNutritional Info : Energy: 97Kcal, \nProtein: 17g,\nTotal Fat: 1g, \nCarbohydrates: 4g.",
      "title": "Relish Rohu Curry Cut With Head",
      "url": "https://www.zeptonow.com/pn/relish-rohu-curry-cut-with-head/pvid/68405e7b-be66-44ef-aa44-79ddbfa96f5a"
    },
    {
      "discountPercentage": "0% Off",
      "createdAt": 1723303804585,
      "sellingPrice": "₹30",
      "condition": "Rain",
      "quantity": "500 ml",
      "discountedPrice": "₹30",
      "weatherDescription": "light rain",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/b77067cd-b3b1-4f1a-a4cf-975877844598.jpeg",
      "temperature": 24.56,
      "description": "Description : Goodlife Smart Homogenised Double Toned Milk UHT processed milk with Min 1.5% fat and Min 9.0% SNF fortified with vitamins A and D. It is uitable for preparing tea/coffee, milk shakes and milk delights for people leading a fitness conscious lifestyle.\nCountry of Origin : India\nShelf Life : 90 days\nFSSAI License : 10015043001137\nManufacturer Name : Karnataka Co-Operative Milk Producer's Federation Limited\nManufacturer Address : Karnataka Co-Operative Milk Producer's Federation Limited, KMF Complex, D.R.College Post, Dr.M.H.Marigowda Road, Bengaluru-560 029.\nDescription : Goodlife Smart Homogenised Double Toned Milk UHT processed milk with Min 1.5% fat and Min 9.0% SNF fortified with vitamins A and D. It is uitable for preparing tea/coffee, milk shakes and milk delights for people leading a fitness conscious lifestyle.\nCountry of Origin : India\nShelf Life : 90 days\nFSSAI License : 10015043001137\nManufacturer Name : Karnataka Co-Operative Milk Producer's Federation Limited\nManufacturer Address : Karnataka Co-Operative Milk Producer's Federation Limited, KMF Complex, D.R.College Post, Dr.M.H.Marigowda Road, Bengaluru-560 029.",
      "title": "Nandini Goodlife Toned UHT Milk (Fino Pouch)",
      "url": "https://www.zeptonow.com/pn/nandini-goodlife-toned-uht-milk-fino-pouch/pvid/b01c94d5-7fa9-4119-b157-5e401def1280"
    },
    {
      "discountPercentage": "41% Off",
      "createdAt": 1722785476014,
      "sellingPrice": "₹53",
      "condition": "Rain",
      "quantity": "2 pcs (Approx. 500g - 600g)",
      "discountedPrice": "₹91",
      "weatherDescription": "light rain",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/1d1fc004-5613-4c60-949f-9c4ad520caad.jpeg",
      "temperature": 24.77,
      "description": "Country of Origin : India\nShelf Life : 5 days\nCountry of Origin : India\nShelf Life : 5 days",
      "title": "Sweet Corn",
      "url": "https://www.zeptonow.com/pn/sweet-corn/pvid/7d396da5-f85c-4fe4-8c86-ed8dca17e528"
    },
    {
      "discountPercentage": "28% Off",
      "createdAt": 1723696227713,
      "sellingPrice": "₹74",
      "condition": "Clouds",
      "quantity": "Pack of 10",
      "discountedPrice": "₹103",
      "weatherDescription": "scattered clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-1504-1504,pr-true,f-auto,q-80/cms/product_variant/99edb123-18ec-4dff-88b0-62926cfcc8fa.jpeg",
      "temperature": 28.27,
      "description": "Description : Savor the farm-fresh goodness of Relish White Eggs. These premium-quality eggs are carefully selected to ensure freshness and taste, making them a versatile ingredient for a wide range of dishes. Whether you're preparing a hearty breakfast, baking delicious desserts, or adding protein to your salads, Relish White Eggs are the perfect choice. With their rich flavor and nutrient-packed goodness, they are a wholesome addition to any meal. Elevate your culinary creations with Relish White Eggs.\nCountry of Origin : India\nShelf Life : 21 days\nManufacturer Name : Relish\nDescription : Savor the farm-fresh goodness of Relish White Eggs. These premium-quality eggs are carefully selected to ensure freshness and taste, making them a versatile ingredient for a wide range of dishes. Whether you're preparing a hearty breakfast, baking delicious desserts, or adding protein to your salads, Relish White Eggs are the perfect choice. With their rich flavor and nutrient-packed goodness, they are a wholesome addition to any meal. Elevate your culinary creations with Relish White Eggs.\nCountry of Origin : India\nShelf Life : 21 days\nManufacturer Name : Relish",
      "title": "Relish White Eggs",
      "url": "https://www.zeptonow.com/pn/relish-white-eggs/pvid/fd54d5f6-4a7b-4d0b-a3bb-dbef78cc9396"
    },
    {
      "discountPercentage": "52% Off",
      "createdAt": 1723602622187,
      "sellingPrice": "₹18",
      "condition": "Mist",
      "quantity": "500 g",
      "discountedPrice": "₹38",
      "weatherDescription": "mist",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/0106346e-a7ef-497b-a9ff-18da5cb8d602.jpeg",
      "temperature": 24.8,
      "description": "Description : Lady finger includes pectin, a form of fiber that may help lower bad cholesterol. It may also enhance cholesterol breakdown and inhibit fat formation in the body. Lady finger has a high fiber content that aids digestion and avoids constipation due to its laxative properties. Because of its antioxidant properties, it also protects the liver from free radical damage. Regular consumption of Lady finger aids in cholesterol management and heart health.\nCountry of Origin : India\nShelf Life : 4 days\nDescription : Lady finger includes pectin, a form of fiber that may help lower bad cholesterol. It may also enhance cholesterol breakdown and inhibit fat formation in the body. Lady finger has a high fiber content that aids digestion and avoids constipation due to its laxative properties. Because of its antioxidant properties, it also protects the liver from free radical damage. Regular consumption of Lady finger aids in cholesterol management and heart health.\nCountry of Origin : India\nShelf Life : 4 days",
      "title": "Lady Finger",
      "url": "https://www.zeptonow.com/pn/lady-finger/pvid/abe657be-567e-4288-ba48-7ddd0a8a1271"
    },
    {
      "discountPercentage": "29% Off",
      "createdAt": 1722839487322,
      "sellingPrice": "₹39",
      "condition": "Clouds",
      "quantity": "500 g",
      "discountedPrice": "₹55",
      "weatherDescription": "scattered clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/679f8906-5e13-4b27-9f73-00caec87200d.jpeg",
      "temperature": 26.94,
      "description": "Description : Cucumber is a high-water-content, nutritious fruit. Cucumber may help lower blood sugar levels, avoid constipation, and aid in weight loss. Eat the skin as well to get the most out of the cucumber's health advantages.\nCountry of Origin : India\nShelf Life : 4 days\nDescription : Cucumber is a high-water-content, nutritious fruit. Cucumber may help lower blood sugar levels, avoid constipation, and aid in weight loss. Eat the skin as well to get the most out of the cucumber's health advantages.\nCountry of Origin : India\nShelf Life : 4 days",
      "title": "Cucumber Green",
      "url": "https://www.zeptonow.com/pn/cucumber-green/pvid/cabae210-289e-4aba-9a52-2ad18b34a2fc"
    },
    {
      "discountPercentage": "5% Off",
      "createdAt": 1722882604670,
      "sellingPrice": "₹63",
      "condition": "Rain",
      "quantity": "1 l",
      "discountedPrice": "₹63",
      "weatherDescription": "moderate rain",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-1399-1078,pr-true,f-auto,q-80/cms/product_variant/3933c010-eb77-43b7-9583-486a47da4d3a.jpeg",
      "temperature": 21.78,
      "description": "Description : Good Life Milk is hygenic and rich in protein and no need to boil. The milk is homogenised. UHT Processed and aseptically packed in a special six layer, tamper-proof Tetra Packaging with 100% pure health and 0% bacteria.\nCountry of Origin : India\nShelf Life : 6 months\nManufacturer Name : Karnataka Co-Operative Milk Producer's Federation Limited\nManufacturer Address : Karnataka Co-Operative Milk Producer's Federation Limited, KMF Complex, D.R.College Post, Dr.M.H.Marigowda Road, Bengaluru-560 029.\nDescription : Good Life Milk is hygenic and rich in protein and no need to boil. The milk is homogenised. UHT Processed and aseptically packed in a special six layer, tamper-proof Tetra Packaging with 100% pure health and 0% bacteria.\nCountry of Origin : India\nShelf Life : 6 months\nManufacturer Name : Karnataka Co-Operative Milk Producer's Federation Limited\nManufacturer Address : Karnataka Co-Operative Milk Producer's Federation Limited, KMF Complex, D.R.College Post, Dr.M.H.Marigowda Road, Bengaluru-560 029.",
      "title": "Nandini Goodlife Toned Milk UHT (Tetra Pack Brick)",
      "url": "https://www.zeptonow.com/pn/nandini-goodlife-regular-milk-uht-tetra-pack-brik/pvid/b76a82b8-8c7d-4b3a-aa17-754fa3bfc0d4"
    },
    {
      "discountPercentage": "0% Off",
      "createdAt": 1724326419292,
      "sellingPrice": "₹140",
      "condition": "Clouds",
      "quantity": "200 g",
      "discountedPrice": "₹140",
      "weatherDescription": "broken clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-2000-2000,pr-true,f-auto,q-80/cms/product_variant/aaca95cb-8fff-4a1e-9909-fff376b0b50e.jpeg",
      "temperature": 28.44,
      "description": "Description : Enjoy the authentic taste of homemade paneer every day with Akshayakalpa Malai Paneer. Healthy & tasty, it is an organic dairy product which is absolutely suitable for vegetarians. No preservatives, artificial additives or flavouring, and no emulsifiers are used in this malai paneer.\nCountry of Origin : India\nShelf Life : 30 days\nFSSAI License : 11218317000001\nIngredients : Organic Milk\nManufacturer Name : Akshayakalpa Farms & Foods Pvt Ltd\nManufacturer Address : Akshayakalpa Farms & Foods Pvt Ltd, Kodihally, Anathi Gramapanchayath, Bagur(H), C. R. Patna Tq, Hassan Dist., 573131.\nDescription : Enjoy the authentic taste of homemade paneer every day with Akshayakalpa Malai Paneer. Healthy & tasty, it is an organic dairy product which is absolutely suitable for vegetarians. No preservatives, artificial additives or flavouring, and no emulsifiers are used in this malai paneer.\nCountry of Origin : India\nShelf Life : 30 days\nFSSAI License : 11218317000001\nIngredients : Organic Milk\nManufacturer Name : Akshayakalpa Farms & Foods Pvt Ltd\nManufacturer Address : Akshayakalpa Farms & Foods Pvt Ltd, Kodihally, Anathi Gramapanchayath, Bagur(H), C. R. Patna Tq, Hassan Dist., 573131.",
      "title": "Akshayakalpa Organic Malai Paneer",
      "url": "https://www.zeptonow.com/pn/akshayakalpa-organic-malai-paneer/pvid/a5b27839-d7bb-4c42-9687-16ba67ea2d83"
    },
    {
      "discountPercentage": "Out of Stock17% Off",
      "createdAt": 1724650239393,
      "sellingPrice": "₹264",
      "condition": "Clouds",
      "quantity": "4 pcs (Approx. 720g - 820g)",
      "discountedPrice": "₹319",
      "weatherDescription": "scattered clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/c643a754-bc83-469a-9cae-cce85260528d.jpeg",
      "temperature": 26.48,
      "description": "Description : Pomegranates can have up to three times more antioxidants than green tea or red wine. Antioxidants protect cells from damage and reduce inflammation and the effects of aging. Studies have suggested that pomegranates can protect your heart in many ways, including lowering blood pressure and reducing blood sugar levels.\nCountry of Origin : India\nShelf Life : 4 days\nHow to Use : Eat the juicy seeds raw or add into salads, garnishes or desserts. Enjoy the fresh pomegranate juice by blending them.\nDescription : Pomegranates can have up to three times more antioxidants than green tea or red wine. Antioxidants protect cells from damage and reduce inflammation and the effects of aging. Studies have suggested that pomegranates can protect your heart in many ways, including lowering blood pressure and reducing blood sugar levels.\nCountry of Origin : India\nShelf Life : 4 days\nHow to Use : Eat the juicy seeds raw or add into salads, garnishes or desserts. Enjoy the fresh pomegranate juice by blending them.",
      "title": "Pomegranate",
      "url": "https://www.zeptonow.com/pn/pomegranate/pvid/085b06eb-cf40-4922-acee-ad29826410f5"
    },
    {
      "discountPercentage": "Out of Stock28% Off",
      "createdAt": 1724153434305,
      "sellingPrice": "₹35",
      "condition": "Clouds",
      "quantity": "250 g",
      "discountedPrice": "₹49",
      "weatherDescription": "broken clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-644-708,pr-true,f-auto,q-80/cms/product_variant/8ec5a140-004e-4961-a76d-da7bc02b3ed3.jpeg",
      "temperature": 29.29,
      "description": "Description : In India, fenugreek leaves are consumed as vegetables. Fenugreek is taken orally for digestive disorders such as appetite loss, upset stomach, constipation & stomach inflammation\nCountry of Origin : India\nShelf Life : 3 days\nDescription : In India, fenugreek leaves are consumed as vegetables. Fenugreek is taken orally for digestive disorders such as appetite loss, upset stomach, constipation & stomach inflammation\nCountry of Origin : India\nShelf Life : 3 days",
      "title": "Fenugreek (Methi)",
      "url": "https://www.zeptonow.com/pn/fenugreek-methi/pvid/2aa60e3e-2d3c-439f-b0c1-ef4aa6abf7a8"
    },
    {
      "discountPercentage": "19% Off",
      "createdAt": 1723808006473,
      "sellingPrice": "₹149",
      "condition": "Clouds",
      "quantity": "1 pack (Approx. 480g - 500g)",
      "discountedPrice": "₹185",
      "weatherDescription": "broken clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-1280-1280,pr-true,f-auto,q-80/cms/product_variant/b7f8adb4-6901-4e97-8078-654ae5314309.jpeg",
      "temperature": 29,
      "description": "Description : This product is halal certified.\nTender, flavorful, and convenient. Relish chicken curry cut is expertly processed to deliver the perfect balance of taste and texture & juicyness.\nThis product serves: 2 to 3 people.\nCountry of Origin : India\nShelf Life : 4 days\nStorage Instructions : Vacuum packing causes a noticeable distinct smell in the product. After opening keep the packet in room temperature for 2-3 minutes to eliminate such smell. Store this product at 0 to 4 °C\nHow to Use : Best suitable for Curries.\nManufacturer Name : Relish\nNutritional Info : Energy:165 kcal, \nProtein:25g, \nTotal Fat: 3.6g,\nCarbohydrates:0g.\nDescription : This product is halal certified.\nTender, flavorful, and convenient. Relish chicken curry cut is expertly processed to deliver the perfect balance of taste and texture & juicyness.\nThis product serves: 2 to 3 people.\nCountry of Origin : India\nShelf Life : 4 days\nStorage Instructions : Vacuum packing causes a noticeable distinct smell in the product. After opening keep the packet in room temperature for 2-3 minutes to eliminate such smell. Store this product at 0 to 4 °C\nHow to Use : Best suitable for Curries.\nManufacturer Name : Relish\nNutritional Info : Energy:165 kcal, \nProtein:25g, \nTotal Fat: 3.6g,\nCarbohydrates:0g.",
      "title": "Relish Chicken Curry Cut Without Skin",
      "url": "https://www.zeptonow.com/pn/relish-chicken-curry-cut-without-skin/pvid/8ddd4d0f-3ea7-410b-936e-cf35ddf70b1d"
    },
    {
      "discountPercentage": "Out of Stock14% Off",
      "createdAt": 1724293815621,
      "sellingPrice": "₹239",
      "condition": "Clouds",
      "quantity": "1 pack (Approx. 280g - 300g)",
      "discountedPrice": "₹279",
      "weatherDescription": "scattered clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-1280-1280,pr-true,f-auto,q-80/cms/product_variant/5a7f7726-a274-42c4-be18-0e4bca8b0f07.jpeg",
      "temperature": 21.69,
      "description": "Description : Indulge in a delicious and nutritious meal with Relish Basa/Pangas Fillet. Sourced from the finest quality basa fish, these fillets are rich in flavor and packed with nutrients. Whether you grill, bake, or fry them, these fillets are perfect for creating a variety of culinary delights. Add a touch of gourmet to your meals with Relish Basa/Pangas Fillet and savor the exquisite taste of fresh fish!\nCountry of Origin : India\nShelf Life : 4 days\nManufacturer Name : Relish\nDescription : Indulge in a delicious and nutritious meal with Relish Basa/Pangas Fillet. Sourced from the finest quality basa fish, these fillets are rich in flavor and packed with nutrients. Whether you grill, bake, or fry them, these fillets are perfect for creating a variety of culinary delights. Add a touch of gourmet to your meals with Relish Basa/Pangas Fillet and savor the exquisite taste of fresh fish!\nCountry of Origin : India\nShelf Life : 4 days\nManufacturer Name : Relish",
      "title": "Relish Basa / Pangas Fillet",
      "url": "https://www.zeptonow.com/pn/relish-basa-pangas-fillet/pvid/528ac9e2-8065-4663-bc3b-f8b3a3ae21c9"
    },
    {
      "discountPercentage": "Out of Stock20% Off",
      "createdAt": 1722745855236,
      "sellingPrice": "₹199",
      "condition": "Clouds",
      "quantity": "",
      "discountedPrice": "₹249",
      "weatherDescription": "scattered clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-3936-2624,pr-true,f-auto,q-80/cms/product_variant/c0a24f38-7a6d-4fd2-890b-82688dada602.jpg",
      "temperature": 24.42,
      "description": "Description : Bite-sized delights packed with tender chicken and gooey cheese, ideal for quick snacks or appetizers. Quick to prepare and irresistibly tasty, they are perfect for any occasion.\nCountry of Origin : India\nShelf Life : 30 days\nManufacturer Name : Relish\nDescription : Bite-sized delights packed with tender chicken and gooey cheese, ideal for quick snacks or appetizers. Quick to prepare and irresistibly tasty, they are perfect for any occasion.\nCountry of Origin : India\nShelf Life : 30 days\nManufacturer Name : Relish",
      "title": "Relish Chicken Cheese Shot",
      "url": "https://www.zeptonow.com/pn/relish-chicken-cheese-shot/pvid/610a71e7-a275-44ca-8607-aaab67ad3fdf"
    },
    {
      "discountPercentage": "Out of Stock27% Off",
      "createdAt": 1724326473805,
      "sellingPrice": "₹72",
      "condition": "Clouds",
      "quantity": "1 pack (Approx. 180g - 200g)",
      "discountedPrice": "₹99",
      "weatherDescription": "broken clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/7f62bac8-cfd5-4871-b806-608b16de685c.jpeg",
      "temperature": 28.44,
      "description": "Description : White mushrooms are also known as table, common, button, or champignon mushrooms. They have a small stem, smooth cap, and mild flavor that pairs well with many dishes.Due to their exposure to UV rays or sunlight, mushrooms are a natural, non-animal source of vitamin D2 that’s capable of increasing blood levels of this vitamin as effectively as a supplement. White mushrooms are low in calories and sugar. They are also high in protein and vitamin D, and they’re a source of vitamin B12. As such, they are considered beneficial for those following plant-based diets.\n\nMultiple antioxidant compounds, including polyphenols, polysaccharides, ergothioneine, glutathione, selenium, and vitamin C, are believed to be behind mushrooms’ potential cancer-fighting properties\nCountry of Origin : India\nShelf Life : 4 days\nDescription : White mushrooms are also known as table, common, button, or champignon mushrooms. They have a small stem, smooth cap, and mild flavor that pairs well with many dishes.Due to their exposure to UV rays or sunlight, mushrooms are a natural, non-animal source of vitamin D2 that’s capable of increasing blood levels of this vitamin as effectively as a supplement. White mushrooms are low in calories and sugar. They are also high in protein and vitamin D, and they’re a source of vitamin B12. As such, they are considered beneficial for those following plant-based diets.\n\nMultiple antioxidant compounds, including polyphenols, polysaccharides, ergothioneine, glutathione, selenium, and vitamin C, are believed to be behind mushrooms’ potential cancer-fighting properties\nCountry of Origin : India\nShelf Life : 4 days",
      "title": "Mushroom Button",
      "url": "https://www.zeptonow.com/pn/mushroom-button/pvid/178b3f0f-c01d-4065-8f5c-d1902cbb5d51"
    },
    {
      "discountPercentage": "0% Off",
      "createdAt": 1723807815033,
      "sellingPrice": "₹67",
      "condition": "Clouds",
      "quantity": "1 l",
      "discountedPrice": "₹67",
      "weatherDescription": "broken clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-1399-1078,pr-true,f-auto,q-80/cms/product_variant/3933c010-eb77-43b7-9583-486a47da4d3a.jpeg",
      "temperature": 28.43,
      "description": "Description : Good Life Milk is hygenic and rich in protein and no need to boil. The milk is homogenised. UHT Processed and aseptically packed in a special six layer, tamper-proof Tetra Packaging with 100% pure health and 0% bacteria.\nCountry of Origin : India\nShelf Life : 6 months\nManufacturer Name : Karnataka Co-Operative Milk Producer's Federation Limited\nManufacturer Address : Karnataka Co-Operative Milk Producer's Federation Limited, KMF Complex, D.R.College Post, Dr.M.H.Marigowda Road, Bengaluru-560 029.\nDescription : Good Life Milk is hygenic and rich in protein and no need to boil. The milk is homogenised. UHT Processed and aseptically packed in a special six layer, tamper-proof Tetra Packaging with 100% pure health and 0% bacteria.\nCountry of Origin : India\nShelf Life : 6 months\nManufacturer Name : Karnataka Co-Operative Milk Producer's Federation Limited\nManufacturer Address : Karnataka Co-Operative Milk Producer's Federation Limited, KMF Complex, D.R.College Post, Dr.M.H.Marigowda Road, Bengaluru-560 029.",
      "title": "Nandini Goodlife Toned Milk UHT (Tetra Pack Brick)",
      "url": "https://www.zeptonow.com/pn/nandini-goodlife-regular-milk-uht-tetra-pack-brik/pvid/b76a82b8-8c7d-4b3a-aa17-754fa3bfc0d4"
    },
    {
      "discountPercentage": "33% Off",
      "createdAt": 1722033020296,
      "sellingPrice": "₹63",
      "condition": "Clouds",
      "quantity": "1 kg",
      "discountedPrice": "₹95",
      "weatherDescription": "overcast clouds",
      "imageUrl": "https://cdn.zeptonow.com/production///tr:w-600,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/9ff7104c-3324-4eea-97a8-a4deccc87c20.jpeg",
      "temperature": 21.06,
      "description": "Description : Potatoes are high in vitamin C, an antioxidant.Potassium, an electrolyte that helps our heart, muscles, and nervous system, is another important mineral in potatoes.The fiber, potassium, vitamin C, and vitamin B6 content of potatoes, together with their absence of cholesterol, all promote heart health. The fiber content of potatoes is high. Fiber reduces the total quantity of cholesterol in the blood, lowering the risk of heart disease.\nCountry of Origin : India\nShelf Life : 4 days\nDescription : Potatoes are high in vitamin C, an antioxidant.Potassium, an electrolyte that helps our heart, muscles, and nervous system, is another important mineral in potatoes.The fiber, potassium, vitamin C, and vitamin B6 content of potatoes, together with their absence of cholesterol, all promote heart health. The fiber content of potatoes is high. Fiber reduces the total quantity of cholesterol in the blood, lowering the risk of heart disease.\nCountry of Origin : India\nShelf Life : 4 days",
      "title": "Potato",
      "url": "https://www.zeptonow.com/pn/potato/pvid/d38ec8e4-9042-4b42-8f4e-fe879bd50c4b"
    }];