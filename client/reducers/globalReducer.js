import {
  SET_SHOW_EDIT_GROCERY,
  CHG_ADD_GROCERY_MODAL_STATE,
  SET_FETCH_GROCERIES_LOADING_STATUS
} from '../actions/types';

const initialState = {
  editShowGroceryId: null,
  showAddNewGroceryModal: false,
  fetchGroceriesLoading: false
};

export default (state=initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_FETCH_GROCERIES_LOADING_STATUS: return {
      ...state,
      fetchGroceriesLoading: payload
    };

    case SET_SHOW_EDIT_GROCERY: return {
      ...state,
      editShowGroceryId: payload
    };

    case CHG_ADD_GROCERY_MODAL_STATE: return {
      ...state,
      showAddNewGroceryModal: payload
    };

    default: return state;
  }
}
