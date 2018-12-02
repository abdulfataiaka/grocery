import moxios from 'moxios';

import {
  fetchGroceriesSuccess,
  fetchGroceriesFailure,
  setGroceriesLoadingStatus,
  setPurchaseStatusSuccess,
  setPurchaseStatusFailure,
  deleteGrocerySuccess,
  deleteGroceryFailure,
  editGrocerySuccess,
  editGroceryFailure,
  addGrocerySuccess,
  addGroceryFailure,
  setShowEditGrocery,
  setAddModalState,
  addGrocery,
  fetchGroceries,
  setPurchaseStatus,
  deleteGrocery,
  editGrocery
} from '../../actions/groceryAction';

import {
  FETCH_GROCERIES_SUCCESS,
  FETCH_GROCERIES_FAILURE,
  SET_FETCH_GROCERIES_LOADING_STATUS,
  SET_PURCHASE_STATUS_SUCCESS,
  SET_PURCHASE_STATUS_FAILURE,
  DELETE_GROCERY_FAILURE,
  DELETE_GROCERY_SUCCESS,
  EDIT_GROCERY_SUCCESS,
  EDIT_GROCERY_FAILURE,
  ADD_GROCERY_SUCCESS,
  ADD_GROCERY_FAILURE,
  SET_SHOW_EDIT_GROCERY,
  CHG_ADD_GROCERY_MODAL_STATE
} from '../../actions/types';

import {
  groceriesMock,
  errorMock,
  mockStore
} from '../mocks';

describe('Testing action creators', () => {
  describe('fetchGroceriesSuccess', () => {
    const groceries = [...groceriesMock];
    const result = fetchGroceriesSuccess(groceries);
    it('should return an object with type and payload', () => {
      expect(typeof result).toBe('object');
      expect(result.type).toBe(FETCH_GROCERIES_SUCCESS);
      expect(result.payload).toBe(groceries);
    });
  });

  describe('fetchGroceriesFailure', () => {
    const error = { ...errorMock };
    const result = fetchGroceriesFailure(error);
    it('should return an object with type and payload', () => {
      expect(typeof result).toBe('object');
      expect(result.type).toBe(FETCH_GROCERIES_FAILURE);
      expect(result.payload).toBe(error);
    });
  });

  describe('setGroceriesLoadingStatus', () => {
    const result = setGroceriesLoadingStatus(true);
    it('should return an object with type and payload', () => {
      expect(typeof result).toBe('object');
      expect(result.type).toBe(SET_FETCH_GROCERIES_LOADING_STATUS);
      expect(result.payload).toBe(true);
    });
  });
});

describe('Testing thunks', () => {
  it('should dispatch setPurchaseStatusSuccess', () => {
    const store = mockStore();
    const expectedActions = [
      {
        type: SET_PURCHASE_STATUS_SUCCESS,
        payload: {
          groceryId: 1,
          status: true
        }
      }
    ];

    store.dispatch(setPurchaseStatusSuccess(1, true));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch setPurchaseStatusFailure', () => {
    const store = mockStore();
    const expectedActions = [
      {
        type: SET_PURCHASE_STATUS_FAILURE,
        payload: 1
      }
    ];

    store.dispatch(setPurchaseStatusFailure(1, true));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch deleteGrocerySuccess', () => {
    const store = mockStore();
    const expectedActions = [
      {
        type: DELETE_GROCERY_SUCCESS,
        payload: 1
      }
    ];

    store.dispatch(deleteGrocerySuccess(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch deleteGroceryFailure', () => {
    const store = mockStore();
    const expectedActions = [
      {
        type: DELETE_GROCERY_FAILURE,
        payload: 1
      }
    ];

    store.dispatch(deleteGroceryFailure(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch editGrocerySuccess', () => {
    const store = mockStore();
    const grocery = { ...groceriesMock[0] };
    const expectedActions = [
      {
        type: EDIT_GROCERY_SUCCESS,
        payload: { ...grocery }
      }
    ];

    store.dispatch(editGrocerySuccess(grocery));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch editGroceryFailure', () => {
    const store = mockStore();
    const error = { errorMock };
    const expectedActions = [
      {
        type: EDIT_GROCERY_FAILURE,
        payload: error
      }
    ];

    store.dispatch(editGroceryFailure(error));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch addGrocerySuccess', () => {
    const store = mockStore();
    const grocery = { ...groceriesMock[0] };
    const expectedActions = [
      {
        type: ADD_GROCERY_SUCCESS,
        payload: { ...grocery, purchased: false }
      }
    ];

    store.dispatch(addGrocerySuccess(grocery));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch addGrocerySuccess', () => {
    const store = mockStore();
    const error = { errorMock };
    const expectedActions = [
      {
        type: ADD_GROCERY_FAILURE,
        payload: error
      }
    ];

    store.dispatch(addGroceryFailure(error));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch setShowEditGrocery', () => {
    const store = mockStore();
    const expectedActions = [
      {
        type: SET_SHOW_EDIT_GROCERY,
        payload: 1
      }
    ];

    store.dispatch(setShowEditGrocery(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch setAddModalState', () => {
    const store = mockStore();
    const expectedActions = [
      {
        type: CHG_ADD_GROCERY_MODAL_STATE,
        payload: true
      }
    ];

    store.dispatch(setAddModalState(true));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch setAddModalState', () => {
    const store = mockStore();
    const expectedActions = [
      {
        type: CHG_ADD_GROCERY_MODAL_STATE,
        payload: true
      }
    ];

    store.dispatch(setAddModalState(true));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('Testing thunks with axios requests', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should dispatch addGrocery action', (done) => {
    const store = mockStore();
    const grocery = { ...groceriesMock[0] };

    moxios.stubRequest('/api/groceries', {
      status: 201,
      response: {
        grocery: { ...grocery }
      }
    });

    const expectedActions = [
      {
        type: ADD_GROCERY_SUCCESS,
        payload: { ...grocery, purchased: false }
      }
    ];

    store.dispatch(addGrocery(grocery));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('should dispatch fetchGroceries action', (done) => {
    const store = mockStore();

    moxios.stubRequest('/api/groceries', {
      status: 200,
      response: {
        groceries: [...groceriesMock]
      }
    });

    const expectedActions = [
      {
        type: FETCH_GROCERIES_SUCCESS,
        payload: [...groceriesMock].reverse()
      },
      {
        type: SET_FETCH_GROCERIES_LOADING_STATUS,
        payload: false
      }
    ];

    store.dispatch(fetchGroceries());
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('should dispatch setPurchaseStatus action', (done) => {
    const store = mockStore();
    const groceryId = 1;

    moxios.stubRequest(`/api/groceries/${groceryId}`, {
      status: 200,
      response: {}
    });

    const expectedActions = [
      {
        type: SET_PURCHASE_STATUS_SUCCESS,
        payload: { groceryId, status: true }
      }
    ];

    store.dispatch(setPurchaseStatus(1, true));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('should dispatch deleteGrocery action', (done) => {
    const store = mockStore();
    const groceryId = 1;

    moxios.stubRequest(`/api/groceries/${groceryId}`, {
      status: 200,
      response: {}
    });

    const expectedActions = [
      {
        type: DELETE_GROCERY_SUCCESS,
        payload: groceryId
      }
    ];

    store.dispatch(deleteGrocery(1, true));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('should dispatch editGrocery action', (done) => {
    const store = mockStore();
    const grocery = { ...groceriesMock[0] };

    moxios.stubRequest(`/api/groceries/${grocery._id}`, {
      status: 200,
      response: {}
    });

    const expectedActions = [
      {
        type: EDIT_GROCERY_SUCCESS,
        payload: { ...grocery }
      }
    ];

    store.dispatch(editGrocery(grocery));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
