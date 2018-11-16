import axios from 'axios';

import {
  SET_SHOW_EDIT_GROCERY,
  DELETE_GROCERY_SUCCESS,
  DELETE_GROCERY_FAILURE,
  CHG_ADD_GROCERY_MODAL_STATE,
  ADD_GROCERY_FAILURE,
  ADD_GROCERY_SUCCESS,
  EDIT_GROCERY_SUCCESS,
  EDIT_GROCERY_FAILURE,
  SET_PURCHASE_STATUS_SUCCESS,
  SET_PURCHASE_STATUS_FAILURE,
  FETCH_GROCERIES_SUCCESS,
  FETCH_GROCERIES_FAILURE,
  SET_FETCH_GROCERIES_LOADING_STATUS,
} from './types';

/**
 *
 *
 * @description Update store with fetched groceries
 *
 * @param { Array } groceries
 *
 * @returns { Object }
 */
export const fetchGroceriesSuccess = groceries => ({
  type: FETCH_GROCERIES_SUCCESS,
  payload: groceries,
});

/**
 *
 *
 * @description Handle error
 *
 * @param { Object } error
 *
 * @returns { Object }
 */
export const fetchGroceriesFailure = error => ({
  type: FETCH_GROCERIES_FAILURE,
  payload: error,
});

/**
 *
 *
 * @description Show loading for groceries fetch
 *
 * @param { Boolean } status
 *
 * @returns { Object }
 */
export const setGroceriesLoadingStatus = status => ({
  type: SET_FETCH_GROCERIES_LOADING_STATUS,
  payload: status,
});

/**
 *
 *
 * @description Update purchased status
 *
 * @param { Integer } groceryId
 * @param { Boolean } status
 *
 * @returns { Function }
 */
export const setPurchaseStatusSuccess = (groceryId, status) => dispatch => dispatch({
  type: SET_PURCHASE_STATUS_SUCCESS,
  payload: { groceryId, status },
});

/**
 *
 *
 * @description Handle error for purchased state change
 *
 * @param { Object } error
 *
 * @returns { Function }
 */
export const setPurchaseStatusFailure = error => dispatch => dispatch({
  type: SET_PURCHASE_STATUS_FAILURE,
  payload: error,
});

/**
 *
 *
 * @description Delete grocery from store
 *
 * @param { Integer } groceryId
 *
 * @returns { Function }
 */
export const deleteGrocerySuccess = groceryId => dispatch => dispatch({
  type: DELETE_GROCERY_SUCCESS,
  payload: groceryId,
});

/**
 *
 *
 * @description Handle error for purchased state change
 *
 * @param { Object } error
 *
 * @returns { Function }
 */
export const deleteGroceryFailure = error => dispatch => dispatch({
  type: DELETE_GROCERY_FAILURE,
  payload: error,
});

/**
 *
 *
 * @description Update grocery in store
 *
 * @param { Object } grocery
 *
 * @returns { Function }
 */
export const editGrocerySuccess = grocery => dispatch => dispatch({
  type: EDIT_GROCERY_SUCCESS,
  payload: grocery,
});

/**
 *
 *
 * @description Handle error for edit grocery
 *
 * @param { Object } error
 *
 * @returns { Function }
 */
export const editGroceryFailure = error => dispatch => dispatch({
  type: EDIT_GROCERY_FAILURE,
  payload: error,
});

/**
 *
 *
 * @description Add grocery to store
 *
 * @param { Object } grocery
 *
 * @returns { Function }
 */
export const addGrocerySuccess = grocery => dispatch => dispatch({
  type: ADD_GROCERY_SUCCESS,
  payload: { ...grocery, purchased: false },
});

/**
 *
 *
 * @description Handle error for add grocery
 *
 * @param { Object } error
 *
 * @returns { Function }
 */
export const addGroceryFailure = error => dispatch => dispatch({
  type: ADD_GROCERY_FAILURE,
  payload: error,
});

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
  payload: groceryId,
});

/**
 *
 *
 * @description Show or hide add modal
 *
 * @param {*} status
 *
 * @returns { Function }
 */
export const setAddModalState = status => dispatch => dispatch({
  type: CHG_ADD_GROCERY_MODAL_STATE,
  payload: status,
});

/**
 *
 *
 * @description Update database to add grocery
 *
 * @param { Object } groceryDetails
 *
 * @returns { Function }
 */
export const addGrocery = groceryDetails => dispatch => axios.post('/api/groceries', { ...groceryDetails })
  .then((response) => {
    const { grocery } = response.data;
    dispatch(addGrocerySuccess(grocery));
  })
  .catch((error) => {
    dispatch(addGroceryFailure(error));
  });


/**
 *
 *
 * @description Fetch groceries from database
 *
 * @returns { Function }
 */
export const fetchGroceries = () => (dispatch) => {
  setGroceriesLoadingStatus(true);

  return axios.get('/api/groceries')
    .then((response) => {
      const { groceries } = response.data;

      dispatch(fetchGroceriesSuccess(groceries.reverse()));
      dispatch(setGroceriesLoadingStatus(false));
    })
    .catch((error) => {
      dispatch(fetchGroceriesFailure(error));
      dispatch(setGroceriesLoadingStatus(false));
      throw error;
    });
};


/**
 *
 *
 * @description Update purchased state inn database
 *
 * @param { Integer } groceryId
 * @param { Boolean } status
 *
 * @returns { Function }
 */
export const setPurchaseStatus = (groceryId, status) => dispatch => (
  axios.patch(`/api/groceries/${groceryId}`, { purchased: status })
    .then(() => {
      dispatch(setPurchaseStatusSuccess(groceryId, status));
    })
    .catch((error) => {
      dispatch(setPurchaseStatusFailure(error));
      throw error;
    })
);


/**
 *
 *
 * @description Delete grocery in database
 *
 * @param { Integer } groceryId
 *
 * @returns { Function }
 */
export const deleteGrocery = groceryId => dispatch => (
  axios.delete(`/api/groceries/${groceryId}`)
    .then(() => {
      dispatch(deleteGrocerySuccess(groceryId));
    })
    .catch((error) => {
      dispatch(deleteGroceryFailure(error));
    })
);


/**
 *
 *
 * @description Update grocery in database
 *
 * @param { Object } grocery
 *
 * @returns { Function }
 */
export const editGrocery = grocery => dispatch => (
  axios.put(`/api/groceries/${grocery._id}`, grocery)
    .then(() => {
      dispatch(editGrocerySuccess(grocery));
    })
    .catch((error) => {
      dispatch(editGroceryFailure(error));
      throw error;
    })
);
