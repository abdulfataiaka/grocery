import mongoose from 'mongoose';

const { Schema } = mongoose;
const groceryItemSchema = new Schema(
  {
    _id: Number,
    name: String,
    price: String,
    image: String,
    purchased: Boolean,
  },
);

const GroceryItem = mongoose.model('GroceryItem', groceryItemSchema, 'groceryItems');
module.exports = GroceryItem;
