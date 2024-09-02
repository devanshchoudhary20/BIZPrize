const fs = require('fs');
const path = require('path');

const titleNormalise = (title) => {
  return title.replace(/[^a-zA-Z0-9]/g, ' ')
              .replace(/\s+/g, ' ')
              .trim()
              .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => 
                index === 0 ? word.toLowerCase() : word.toUpperCase()
              )
              .replace(/\s+/g, '');
}

const simplifyQuantity = (quantity) => {
  const match = quantity.match(/(\d+)\s*(\w+)/);
  if (match) {
    return `${match[1]}${match[2]}`.toLowerCase();
  }
  return quantity.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

const itemsToSave = {};
const indexItems = [];

const SeperateEachitem = (data) => {
  data.forEach((item) => {
    const itemTitle = titleNormalise(item.title);
    const simplifiedQuantity = simplifyQuantity(item.quantity);
    const key = `${itemTitle}_${simplifiedQuantity}`;
    
    if (key in itemsToSave) {
      itemsToSave[key].push(item);
    } else {
      itemsToSave[key] = [item];
      indexItems.push({
        title: item.title,
        filename: `${key}.json`,
        quantity: item.quantity,
        imageUrl: item.imageUrl,
      });
    }
  });

  const folderPath = path.join(__dirname, 'items');
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  Object.entries(itemsToSave).forEach(([key, items]) => {
    fs.writeFileSync(
      path.join(folderPath, `${key}.json`),
      JSON.stringify(items, null, 2)
    );
  });

  // Create index.json
  fs.writeFileSync(
    path.join(folderPath, 'index.json'),
    JSON.stringify(indexItems, null, 2)
  );
};

function processData() {
  const outputPath = path.join(__dirname, 'output.js');
  const fileContent = fs.readFileSync(outputPath, 'utf8');

  const dataMatch = fileContent.match(/export const data = (\[[\s\S]*\]);/);
  if (!dataMatch) {
    throw new Error('Data not found in the expected format');
  }

  const data = JSON.parse(dataMatch[1]);
  SeperateEachitem(data);
}

processData();