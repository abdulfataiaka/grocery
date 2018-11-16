import GroceryItem from '../models/groceryItem';
import { getLastId, setLastId } from '../models/autoCounter';

const documents = [
  {
    name: 'Melon',
    purchased: true,
    price: '$5',
    image: '/images/groceries/2.jpg'
  },

  {
    name: 'Water Melon',
    price: '$8',
    purchased: false,
    image: '/images/groceries/1.jpg'
  },

  {
    name: 'Vegetables',
    purchased: true,
    price: '$10',
    image: '/images/groceries/3.jpg'
  },

  {
    name: 'Tomatoes',
    purchased: false,
    price: '$15',
    image: '/images/groceries/4.jpg'
  },
  {
    name: 'Pepper',
    purchased: false,
    price: '$15',
    image: '/images/groceries/5.jpg'
  },
  {
    name: 'Starburst',
    purchased: false,
    price: '$15',
    image: '/images/groceries/6.jpg'
  },
  {
    name: 'Potatoes',
    purchased: false,
    price: '$15',
    image: '/images/groceries/7.jpg'
  },
  {
    name: 'Ground Turkey',
    purchased: false,
    price: '$15',
    image: '/images/groceries/8.jpg'
  }
];

getLastId('groceryItems', function(error, lastId) {
  // assume no error
  let startId = lastId;
  documents.forEach(function(doc) {
    startId++;
    doc._id = startId;
    (new GroceryItem(doc)).save();
  });

  setLastId('groceryItems', startId, function(error) {});
});
