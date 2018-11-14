import {
  SET_PURCHASE_STATUS,
  EDIT_GROCERY_SUCCESS,
  DELETE_GROCERY_SUCCESS,
  ADD_GROCERY_SUCCESS
} from '../actions/types';

const initialState = [
  {
    id: 1,
    name: 'Melon',
    purchased: true,
    price: '$5',
    image: '/images/groceries/2.jpg'
  },

  {
    id: 2,
    name: 'Water Melon',
    price: '$8',
    purchased: false,
    image: '/images/groceries/1.jpg'
  },

  {
    id: 3,
    name: 'Vegetables',
    purchased: true,
    price: '$10',
    image: '/images/groceries/3.jpg'
  },

  {
    id: 4,
    name: 'Tomatoes',
    purchased: false,
    price: '$15',
    image: '/images/groceries/4.jpg'
  },
  {
    id: 5,
    name: 'Pepper',
    purchased: false,
    price: '$15',
    image: '/images/groceries/5.jpg'
  },
  {
    id: 6,
    name: 'Starburst',
    purchased: false,
    price: '$15',
    image: '/images/groceries/6.jpg'
  },
  {
    id: 7,
    name: 'Potatoes',
    purchased: false,
    price: '$15',
    image: '/images/groceries/7.jpg'
  },
  {
    id: 8,
    name: 'Ground Turkey',
    purchased: false,
    price: '$15',
    image: '/images/groceries/8.jpg'
  }
];

export default (state=initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_PURCHASE_STATUS: return (
      state.map(grocery => {
        const alterable = { ...grocery };

        if (alterable.id === payload.groceryId) {
          alterable.purchased = payload.status;
        }
        
        return alterable;
      })
    );

    case EDIT_GROCERY_SUCCESS: return (
      state.map(grocery => {
        let alterable = { ...grocery };

        if (alterable.id === payload.id) {
          alterable = { ...alterable, ...payload }
        }
        
        return alterable;
      })
    );

    case DELETE_GROCERY_SUCCESS: return (
      state.filter(grocey => grocey.id !== payload)
    );
      
    case ADD_GROCERY_SUCCESS: return [
      { ...payload }, ...state
    ];

    default: return state;
  }
}
