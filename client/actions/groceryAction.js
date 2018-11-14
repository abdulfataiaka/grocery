import {
  SET_SHOW_EDIT_GROCERY,
  SET_PURCHASE_STATUS,
  EDIT_GROCERY_SUCCESS,
  DELETE_GROCERY_SUCCESS,
  CHG_ADD_GROCERY_MODAL_STATE,
  ADD_GROCERY_SUCCESS
} from './types';

/**
 * 
 * 
 * @description Set edit view to show
 * 
 * @param { null | id } groceryId
 * 
 * @returns { Function }
 */
export const setShowEditGrocery = groceryId => dispatch => dispatch({
  type: SET_SHOW_EDIT_GROCERY,
  payload: groceryId
});

export const setPurchaseStatus = (groceryId, status) => dispatch => dispatch({
  type: SET_PURCHASE_STATUS,
  payload: { groceryId, status }
});

export const editGrocery = grocery => dispatch => dispatch({
  type: EDIT_GROCERY_SUCCESS,
  payload: grocery
});

export const deleteGrocery = groceryId => dispatch => dispatch({
  type: DELETE_GROCERY_SUCCESS,
  payload: groceryId
});

export const setAddModalState = (status) => dispatch => dispatch({
  type: CHG_ADD_GROCERY_MODAL_STATE,
  payload: status
});

export const addGrocery = grocery => dispatch => dispatch({
  type: ADD_GROCERY_SUCCESS,
  payload: { ...grocery, id: (1 + Math.random()) * 1000, purchased: false }
});
