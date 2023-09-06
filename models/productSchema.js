const Schema = require('mongoose').Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  image: String,
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  price: { type: Number, required: true },
  unit: String  
}, {
  timestamps: true
});

module.exports = productSchema;
