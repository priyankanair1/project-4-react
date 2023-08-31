require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Product = require('./models/product');

// IIFE
// Immediately Invoked Function Expression
(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Vegetables', sortOrder: 10},
    {name: 'Fruits', sortOrder: 20},
    {name: 'Meat/Protien', sortOrder: 30},
    {name: 'Dairy', sortOrder: 40},
    {name: 'Condiments/Spices', sortOrder: 50},
    {name: 'Beverages', sortOrder: 60},
    {name: 'Personal', sortOrder: 70},
    {name: 'Grains/Pulses', sortOrder: 70},
  ]);

  await Product.deleteMany({});
  const products = await Product.create([
    {name: 'Apples', category: categories[1], price: 5.95},
    {name: 'Banana',  category: categories[1], price: 6.95},
    {name: 'WaterMelon', category: categories[1], price: 3.95},
    {name: 'Kiwi', category: categories[1], price: 14.95},
    {name: 'Orange',category: categories[1], price: 13.95},
    {name: 'Carrot', category: categories[0], price: 25.95},
    {name: 'Broccoli', category: categories[0], price: 1.95},
    {name: 'Potatoes', category: categories[0], price: 4.95},
    {name: 'Tomatoes', category: categories[0], price: 3.95},
    {name: 'Spinach', category: categories[0], price: 7.95},
    {name: 'Chicken', category: categories[2], price: 1.95},
    {name: 'Beef', category: categories[2], price: 2.95},
    {name: 'Pork', category: categories[2], price: 3.95},
    {name: 'Yogurt', category: categories[3], price: 1.95},
    {name: 'Milk',  category: categories[3], price: 0.95},
    {name: 'Butter', category: categories[3], price: 2.95},
    {name: 'Cheese', category: categories[3], price: 3.95},
    {name: 'Rice', category: categories[7], price: 0.95},
    {name: 'Pasta', category: categories[7], price: 0.95},
    {name: 'Green Gram', category: categories[7], price: 8.95},
    {name: 'Moong Daal', category: categories[7], price: 3.95},
    {name: 'Brown Rice', category: categories[7], price: 7.95},
    {name: 'Quinoa', category: categories[7], price: 2.95},
    {name: 'Bread', category: categories[7], price: 3.95},
    {name: 'Pepper', category: categories[4], price: 0.95},
    {name: 'Cinnamon', category: categories[4], price: 0.95},
    {name: 'Mustard', category: categories[4], price: 8.95},
    {name: 'Paprika', category: categories[4], price: 3.95},
    {name: 'Cumin', category: categories[4], price: 7.95},
    {name: 'Salt', category: categories[4], price: 14.95},
    {name: 'Mayo',category: categories[4], price: 13.95},
    {name: 'Ketcup', category: categories[4], price: 25.95},
    {name: 'Chilli Powder', category: categories[4], price: 1.95},
    {name: 'Ranch Dressing', category: categories[4], price: 4.95},
    {name: 'Orange Juice', category: categories[5], price: 3.95},
    {name: 'Coco Cola', category: categories[5], price: 7.95},
    {name: 'Apple Juice', category: categories[5], price: 1.95},
    {name: 'Coconut Water', category: categories[5], price: 2.95},
    {name: 'Cold Coffee', category: categories[5], price: 3.95},
    {name: 'Sparkling Water', category: categories[5], price: 1.95},
    {name: 'Lemonade',  category: categories[5], price: 0.95},
    {name: 'Shampoo', category: categories[6], price: 2.95},
    {name: 'Deodorant', category: categories[6], price: 3.95},
    {name: 'Floss', category: categories[6], price: 0.95},
    {name: 'ToothPaste', category: categories[6], price: 0.95},
    {name: 'Bodywash', category: categories[6], price: 8.95},
    {name: 'Soap', category: categories[6], price: 3.95},
    {name: 'Sunscrean', category: categories[6], price: 7.95},
  ]);
  
    process.exit();
  
  })();
  