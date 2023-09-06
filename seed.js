require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Product = require('./models/product');

// IIFE
// Immediately Invoked Function Expression
(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Vegetables', sortOrder: 10, image: 'https://as2.ftcdn.net/v2/jpg/00/10/34/37/1000_F_10343740_3W3izpz69cqamcyyKthcEoCCgP5r77i0.jpg'},
    {name: 'Fruits', sortOrder: 20, image: 'https://as1.ftcdn.net/v2/jpg/05/29/28/14/1000_F_529281499_IsAjvi96GtpC5GjS7OPMDeONye68VUxl.webp'},
    {name: 'Meat/Protien', sortOrder: 30, image: 'https://media.istockphoto.com/id/1282866808/photo/fresh-raw-chicken.jpg?s=1024x1024&w=is&k=20&c=HnRIOAoETgT4Y3ghtyL1AMpDq6O83CDPcQCRknS5Kh4='},
    {name: 'Dairy', sortOrder: 40, image: 'https://target.scene7.com/is/image/Target/GUEST_fde33ed9-845b-41ee-9dde-056f00a72177?wid=1200&hei=1200&qlt=80&fmt=webp'},
    {name: 'Condiments/Spices', sortOrder: 50, image: 'https://m.media-amazon.com/images/I/41di4euMgjL._SX300_SY300_QL70_FMwebp_.jpg'},
    {name: 'Beverages', sortOrder: 60, image: 'https://m.media-amazon.com/images/I/41qDl0pJf9L._SY300_SX300_QL70_FMwebp_.jpg'},
    {name: 'Grains/Pulses', sortOrder: 70, image: 'https://target.scene7.com/is/image/Target/GUEST_fbfb37f4-c7eb-40f0-9e84-d1ab859fcb06?wid=1200&hei=1200&qlt=80&fmt=webp'},
    {name: 'Personal', sortOrder: 70, image: 'https://i5.walmartimages.com/seo/Dove-Renewing-Liquid-Body-Wash-with-Pump-Peony-and-Rose-Oil-30-6-oz_3c5151ba-7e51-42be-afbb-10e639bcef68.1e0cb5b1f53bc0e10e695c4577e83d9b.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},
  ]);

  await Product.deleteMany({});
  const products = await Product.create([
    {name: 'Apples', description: 'Product description', category: categories[1], unit:'lb', unit:'lb', price: 5.95, image: 'https://as1.ftcdn.net/v2/jpg/05/29/28/14/1000_F_529281499_IsAjvi96GtpC5GjS7OPMDeONye68VUxl.webp'},
    {name: 'Banana',  description: 'Product description', category: categories[1], unit:'lb', price: 1.95, image: 'https://as1.ftcdn.net/v2/jpg/00/33/88/02/1000_F_33880235_4SaVkmhk6tEVPoG8zoWItRrBjj3ukkle.jpg'},
    {name: 'Grapes',  description: 'Product description', category: categories[1], unit:'lb', price: 6.95, image: 'https://target.scene7.com/is/image/Target/GUEST_3da37683-5f20-40f5-8e6c-023c21516cb8?wid=1200&hei=1200&qlt=80&fmt=webp'},
    {name: 'WaterMelon', description: 'Product description', category: categories[1], unit:'lb', price: 3.95, image: 'https://as2.ftcdn.net/v2/jpg/00/54/20/55/1000_F_54205535_c6fnnmoRnVx7lS4Y0o9PxtBrhXfDK7jm.jpg'},
    {name: 'Kiwi', description: 'Product description', category: categories[1], unit:'lb', price: 4.95, image: 'https://as2.ftcdn.net/v2/jpg/00/68/65/13/1000_F_68651370_CVcQlAdJqvxtL8bIUm70UP1HwnFXOblQ.jpg'},
    {name: 'Orange',description: 'Product description', category: categories[1], unit:'lb', price: 5.95, image: 'https://as1.ftcdn.net/v2/jpg/00/29/69/78/1000_F_29697857_Rh1QHZRduOv5u8KclCX0cGTPpkVPbtFt.jpg'},
    {name: 'Beetroot', description: 'Beetroots are a good source of nutrients, fiber, and many plant compounds. The health benefits of this vegetable include improved heart health, the ability to reduce blood pressure, and enhanced exercise capacity.', category: categories[0], unit:'lb', price: 1.95, image: 'https://as1.ftcdn.net/v2/jpg/05/45/47/48/1000_F_545474888_xq2iUjyEXPRruiIYQ62U0LCtKBiZMFk9.webp'},
    {name: 'Zucchini', description: 'Product description', category: categories[0], unit:'lb', price: 2.95, image: 'https://images.bonanzastatic.com/afu/images/8c1a/892a/bed1_10683716299/il_fullxfull.1617635177_dsib.jpg'},
    {name: 'Broccoli', description: 'Product description', category: categories[0], unit:'lb', price: 1.95, image: 'https://as2.ftcdn.net/v2/jpg/00/10/34/37/1000_F_10343740_3W3izpz69cqamcyyKthcEoCCgP5r77i0.jpg'},
    {name: 'Potatoes', description: 'Product description', category: categories[0], unit:'lb', price: 4.95, image: 'https://as1.ftcdn.net/v2/jpg/00/41/30/10/1000_F_41301053_AbLi3hlosbLajBo7lQdNyfGz9eusxY1x.jpg'},
    {name: 'Tomatoes', description: 'Product description', category: categories[0], unit:'lb', price: 3.95, image: 'https://as1.ftcdn.net/v2/jpg/00/34/61/76/1000_F_34617669_p9r4GrR83TBEXCZrRny6AaigqPUEPFp5.jpg'},
    {name: 'Lettuce', description: 'Product description', category: categories[0], unit:'lb', price: 1.95, image: 'https://as2.ftcdn.net/v2/jpg/00/53/59/03/1000_F_53590332_GktsdggabKrEv4a3URfSalFHofBoFOqL.jpg'},
    {name: 'Chicken', description: 'Product description', category: categories[2], unit:'lb', price: 1.95, image:'https://media.istockphoto.com/id/1282866808/photo/fresh-raw-chicken.jpg?s=1024x1024&w=is&k=20&c=HnRIOAoETgT4Y3ghtyL1AMpDq6O83CDPcQCRknS5Kh4='},
    {name: 'Lamp', description: 'Product description', category: categories[2], unit:'lb', price: 2.95, image: 'https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/59a14bf6-7f77-4d6c-8dbe-8367adcbd3c4-retina-large.png'},
    {name: 'Beef', description: 'Product description', category: categories[2], unit:'lb', price: 2.95, image: 'https://previews.123rf.com/images/volff/volff1511/volff151100386/47442901-raw-beaf-steaks-with-parsley-on-a-white-background.jpg'},
    {name: 'Egg', description: 'Product description', category: categories[2], unit:'lb', price: 3.95, image: 'https://www.instacart.com/image-server/932x932/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/product-image/file/large_3a6753cc-c5b7-4274-a007-6a734897dcc7.jpeg'},
    {name: 'Sausage', description: 'Product description', category: categories[2], unit:'lb', price: 3.95, image: 'https://www.instacart.com/image-server/932x932/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/product-image/file/large_bcf545aa-f4ff-4abf-860b-90f0ad0580f7.jpg'},
    {name: 'Pork', description: 'Product description', category: categories[2], unit:'lb', price: 3.95, image: 'https://s3.envato.com/files/260691014/IMG_5795.jpg'},
    {name: 'Yogurt', description: 'Product description', category: categories[3], unit:'item', price: 3.95, image: 'https://target.scene7.com/is/image/Target/GUEST_6d8b42ed-c96b-485d-bc78-faefd7f97d06?wid=1200&hei=1200&qlt=80&fmt=webp'},
    {name: 'Fresh Cream', description: 'Product description', category: categories[3], unit:'item', price: 6.95, image: 'https://www.instacart.com/image-server/932x932/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/product-image/file/large_6f70d1a2-ceaf-468a-b4a3-f6607d142e78.png'},
    {name: 'Butter Milk', description: 'Product description', category: categories[3], unit:'item', price: 5.95, image: 'https://www.instacart.com/image-server/932x932/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/product-image/file/large_6db37d4a-b436-42f4-bd88-9d5b8ec00a4b.png'},
    {name: 'Milk',  description: 'Product description', category: categories[3], unit:'item', price: 0.95, image: 'https://target.scene7.com/is/image/Target/GUEST_fde33ed9-845b-41ee-9dde-056f00a72177?wid=1200&hei=1200&qlt=80&fmt=webp'},
    {name: 'Butter', description: 'Product description', category: categories[3], unit:'item', price: 2.95, image: 'https://target.scene7.com/is/image/Target/GUEST_537051c1-d4ff-4fdd-8db7-4515369943cb?wid=1200&hei=1200&qlt=80&fmt=webp'},
    {name: 'Cheese', description: 'Product description', category: categories[3], unit:'item', price: 3.95, image: 'https://target.scene7.com/is/image/Target/GUEST_d43fa437-c562-48cf-9943-7711e0ed8eff?wid=1200&hei=1200&qlt=80&fmt=webp'},
    {name: 'Rice', description: 'Product description', category: categories[6], unit:'item', price: 0.95, image: 'https://target.scene7.com/is/image/Target/GUEST_ecfd58b2-8bfb-44ea-9f21-95bf12188573?wid=1200&hei=1200&qlt=80&fmt=webp'},
    {name: 'Pasta', description: 'Product description', category: categories[6], unit:'item', price: 0.95, image: 'https://target.scene7.com/is/image/Target/GUEST_5ae5aa78-6d3d-4691-add6-e74acd3c45d4?wid=1200&hei=1200&qlt=80&fmt=webp'},
    {name: 'Green Gram', description: 'Product description', category: categories[6], unit:'lb', price: 8.95, image: 'https://www.distacart.com/cdn/shop/products/r1YHMMxArd_800x.jpg?v=1669987212'},
    {name: 'Moong Dal', description: 'Product description', category: categories[6], unit:'lb', price: 3.95, image: 'https://m.media-amazon.com/images/I/41LupxCpyFL._SX300_SY300_QL70_FMwebp_.jpg'},
    {name: 'Brown Rice', description: 'Product description', category: categories[6], unit:'lb', price: 7.95, image: 'https://target.scene7.com/is/image/Target/GUEST_ecfd58b2-8bfb-44ea-9f21-95bf12188573?wid=1200&hei=1200&qlt=80&fmt=webp'},
    {name: 'Quinoa', description: 'Product description', category: categories[6], unit:'lb', price: 2.95, image: 'https://target.scene7.com/is/image/Target/GUEST_fbfb37f4-c7eb-40f0-9e84-d1ab859fcb06?wid=1200&hei=1200&qlt=80&fmt=webp'},
    {name: 'Bread', description: 'Product description', category: categories[6], unit:'item', price: 3.95, image: 'https://target.scene7.com/is/image/Target/GUEST_1b3f9a38-74d2-4c32-a417-2ab5a85e2320?wid=1200&hei=1200&qlt=80&fmt=webp'},
    {name: 'Pepper', description: 'Product description', category: categories[4], unit:'lb', price: 0.95, image: 'https://target.scene7.com/is/image/Target/GUEST_515dddb3-24b6-4fdd-9665-f09959d347f3?wid=1200&hei=1200&qlt=80&fmt=webp'},
    {name: 'Cinnamon', description: 'Product description', category: categories[4], unit:'lb', price: 0.95, image: 'https://target.scene7.com/is/image/Target/GUEST_6449224b-ffd4-4f0e-a29a-f858362e1329?wid=1200&hei=1200&qlt=80&fmt=webp'},
    {name: 'Mustard', description: 'Product description', category: categories[4], unit:'lb', price: 8.95, image: 'https://i5.walmartimages.com/seo/Great-Value-Stone-Ground-Mustard-12-oz-Squeeze-Bottle_23482dad-36e6-4d06-aa90-51e15d81583f.c78f8bec30058778d737bc91127b7be6.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},
    {name: 'Paprika', description: 'Product description', category: categories[4], unit:'lb', price: 3.95, image: 'https://m.media-amazon.com/images/I/41di4euMgjL._SX300_SY300_QL70_FMwebp_.jpg'},
    {name: 'Cumin', description: 'Product description', category: categories[4], unit:'lb', price: 7.95, image: 'https://target.scene7.com/is/image/Target/GUEST_64186fd2-9fd3-4672-b7ad-8b8925cc182a?wid=1200&hei=1200&qlt=80&fmt=webp'},
    {name: 'Salt', description: 'Product description', category: categories[4], unit:'lb', price: 4.95, image: 'https://target.scene7.com/is/image/Target/GUEST_96277bc3-4f71-4bc2-b2e3-76472de5be71?wid=1200&hei=1200&qlt=80&fmt=webp'},
    {name: 'Mayo',description: 'Product description', category: categories[4], unit:'item', price: 3.95, image: 'https://target.scene7.com/is/image/Target/GUEST_235137cc-2f02-46d8-a2dc-1238e885b9f8?wid=1200&hei=1200&qlt=80&fmt=webp'},
    {name: 'Ketcup', description: 'Product description', category: categories[4], unit:'item', price: 2.95, image: 'https://target.scene7.com/is/image/Target/GUEST_7380ee41-b0b0-4662-b7be-e0880469746e?wid=1200&hei=1200&qlt=80&fmt=webp'},
    {name: 'Chilli Powder', description: 'Product description', category: categories[4], unit:'lb', price: 1.95, image: 'https://target.scene7.com/is/image/Target/GUEST_91e282e7-e050-45c6-a338-172aa335af65?wid=1200&hei=1200&qlt=80&fmt=webp'},
    {name: 'Ranch Dressing', description: 'Product description', category: categories[4], unit:'item', price: 4.95, image:'https://target.scene7.com/is/image/Target/GUEST_8b657e66-4070-4604-8e58-ea7e30cd6f5d?wid=1200&hei=1200&qlt=80&fmt=webp'},
    {name: 'Orange Juice', description: 'Product description', category: categories[5], unit:'item', price: 3.95, image: 'https://target.scene7.com/is/image/Target/GUEST_41ead0c2-818d-4fc5-b54c-109abd56593d?wid=1200&hei=1200&qlt=80&fmt=webp'},
    {name: 'Coco Cola', description: 'Product description', category: categories[5], unit:'item', price: 7.95, image: 'https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/208206/208206_p/208206'},
    {name: 'Apple Juice', description: 'Product description', category: categories[5], unit:'item', price: 1.95, image: 'https://target.scene7.com/is/image/Target/GUEST_a2cf7527-e09f-4dbe-9177-6171453193ae?wid=1200&hei=1200&qlt=80&fmt=webp'},
    {name: 'Coconut Water', description: 'Product description', category: categories[5], unit:'item', price: 2.95, image: 'https://m.media-amazon.com/images/I/41qDl0pJf9L._SY300_SX300_QL70_FMwebp_.jpg'},
    {name: 'Cold Coffee', description: 'Product description', category: categories[5], unit:'lb', price: 3.95, image: 'https://target.scene7.com/is/image/Target/GUEST_5befc930-6f2c-40d8-9d9e-513ad264cf0f?wid=1200&hei=1200&qlt=80&fmt=webp'},
    {name: 'Sparkling Water', description: 'Product description', category: categories[5], unit:'item', price: 1.95, image: 'https://target.scene7.com/is/image/Target/GUEST_dcc89ff9-8dee-4915-aa46-3fec9e86fe9c?wid=1200&hei=1200&qlt=80&fmt=webp'},
    {name: 'Lemonade',  description: 'Product description', category: categories[5], unit:'item', price: 0.95, image: 'https://target.scene7.com/is/image/Target/GUEST_0ddc0098-88dc-4b60-9d9a-7f3fa0d83a22?wid=1200&hei=1200&qlt=80&fmt=webp'},
    {name: 'Shampoo', description: 'Product description', category: categories[7], unit:'item', price: 2.95, image: 'https://target.scene7.com/is/image/Target/GUEST_692725ee-5c4e-4f66-ba81-4747d66c2b05?wid=1200&hei=1200&qlt=80&fmt=webp'},
    {name: 'Deodorant', description: 'Product description', category: categories[7], unit:'item', price: 3.95, image: 'https://target.scene7.com/is/image/Target/GUEST_a61652d2-69e6-469e-872b-dc57dedadf8f?wid=1200&hei=1200&qlt=80&fmt=webp'},
    {name: 'Floss', description: 'Product description', category: categories[7], unit:'item', price: 0.95, image: 'https://target.scene7.com/is/image/Target/GUEST_6760376c-c742-4ab1-ad8b-880e535a0805?wid=1200&hei=1200&qlt=80&fmt=webp'},
    {name: 'ToothPaste', description: 'Product description', category: categories[7], unit:'item', price: 0.95, image: 'https://target.scene7.com/is/image/Target/GUEST_e33da2f5-47ca-4f84-b2c3-50a41cdeac8c?wid=1200&hei=1200&qlt=80&fmt=webp'},
    {name: 'Bodywash', description: 'Product description', category: categories[7], unit:'item', price: 8.95, image: 'https://i5.walmartimages.com/seo/Dove-Renewing-Liquid-Body-Wash-with-Pump-Peony-and-Rose-Oil-30-6-oz_3c5151ba-7e51-42be-afbb-10e639bcef68.1e0cb5b1f53bc0e10e695c4577e83d9b.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},
    {name: 'Soap', description: 'Product description', category: categories[7], unit:'item', price: 3.95, image: 'https://target.scene7.com/is/image/Target/GUEST_d54b6b91-6f6d-4ba7-a9cb-d8af504103b0?wid=1200&hei=1200&qlt=80&fmt=webp'},
    {name: 'Sunscrean', description: 'Product description', category: categories[7], unit:'item', price: 7.95, image: 'https://target.scene7.com/is/image/Target/GUEST_78ece096-508a-46e2-980b-ea68a7469854?wid=1200&hei=1200&qlt=80&fmt=webp'}
  ]);
  
    process.exit();
  
  })();
  