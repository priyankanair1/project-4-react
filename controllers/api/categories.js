const Categories = require('../../models/category');
module.exports = {
  index
};

async function index(req, res) {
  const categories = await Categories.find({}).sort('name');
  console.log(categories);
  res.json(categories);
}
