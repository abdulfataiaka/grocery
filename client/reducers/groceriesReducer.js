import {
  SET_PURCHASE_STATUS_SUCCESS,
  SET_PURCHASE_STATUS_FAILURE,
  FETCH_GROCERIES_SUCCESS,
  FETCH_GROCERIES_FAILURE,
  DELETE_GROCERY_SUCCESS,
  DELETE_GROCERY_FAILURE,
  EDIT_GROCERY_SUCCESS,
  EDIT_GROCERY_FAILURE,
  ADD_GROCERY_SUCCESS
} from '../actions/types';

export default (state=[], action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_GROCERIES_SUCCESS: return [
      ...payload
    ];

    case FETCH_GROCERIES_FAILURE: return state;

    case SET_PURCHASE_STATUS_SUCCESS: return (
      state.map(grocery => {
        const alterable = { ...grocery };

        if (alterable._id === payload.groceryId) {
          alterable.purchased = payload.status;
        }
        
        return alterable;
      })
    );
    
    case SET_PURCHASE_STATUS_FAILURE: return state;

    case EDIT_GROCERY_SUCCESS: return (
      state.map(grocery => {
        let alterable = { ...grocery };

        if (alterable._id === payload._id) {
          alterable = { ...alterable, ...payload }
        }

        return alterable;
      })
    );

    case EDIT_GROCERY_FAILURE: return state;

    case DELETE_GROCERY_SUCCESS: return (
      state.filter(grocey => grocey._id !== payload)
    );
    
    case  DELETE_GROCERY_FAILURE: return state;

    case ADD_GROCERY_SUCCESS: return [
      { ...payload }, ...state
    ];

    default: return state;
  }
}
