import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

export const groceriesMock = [
  {
    _id: 1,
    name: 'Melon',
    purchased: true,
    price: '$15',
    image: '/images/groceries/2.jpg',
  },

  {
    _id: 2,
    name: 'Water Melon',
    price: '$82',
    purchased: false,
    image: '/images/groceries/1.jpg',
  },

  {
    _id: 3,
    name: 'Vegetables',
    purchased: true,
    price: '$17',
    image: '/images/groceries/3.jpg',
  }
];

export const errorMock = {
  message: 'Error message'
};

export const mockStore = configureStore([thunk]);
