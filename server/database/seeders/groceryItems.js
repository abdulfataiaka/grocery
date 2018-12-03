/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import GroceryItem from '../models/groceryItem';
import { getLastId, setLastId } from '../models/autoCounter';

const documents = [
  {
    name: 'Melon',
    purchased: true,
    price: '15',
    image: '/images/groceries/2.jpg',
  },

  {
    name: 'Water Melon',
    price: '82',
    purchased: false,
    image: '/images/groceries/1.jpg',
  },

  {
    name: 'Vegetables',
    purchased: true,
    price: '17',
    image: '/images/groceries/3.jpg',
  },

  {
    name: 'Tomatoes',
    purchased: false,
    price: '23',
    image: '/images/groceries/4.jpg',
  },
];

export default () => {
  getLastId('groceryItems', (error, lastId) => {
    let startId = lastId;

    documents.forEach((doc) => {
      startId++;
      doc._id = startId;
      (new GroceryItem(doc)).save();
    });

    setLastId('groceryItems', startId, () => {});
  });
};
