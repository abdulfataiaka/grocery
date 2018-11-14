import {
  SET_SHOW_EDIT_GROCERY,
  EDIT_GROCERY_SUCCESS,
  CHG_ADD_GROCERY_MODAL_STATE
} from '../actions/types';

const initialState = {
  editShowGroceryId: null,
  showAddNewGroceryModal: false
};

export default (state=initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SHOW_EDIT_GROCERY: return {
      ...state,
      editShowGroceryId: payload
    };
    
    case EDIT_GROCERY_SUCCESS: return {
      ...state,
      editShowGroceryId: null
    };

    case CHG_ADD_GROCERY_MODAL_STATE: return {
      ...state,
      showAddNewGroceryModal: payload
    };

    default: return state;
  }
}
