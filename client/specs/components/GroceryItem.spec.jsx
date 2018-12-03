import React from 'react';
import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

import { GroceryItem } from '../../components/GroceryItem/Index';
import GroceryItemView from '../../components/GroceryItem/GroceryItemView';
import { $fn, groceriesMock } from '../mocks';

describe('GroceryItemView component', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });

  it('should render component', () => {
    const grocery = { ...groceriesMock[0] };
    const wrapper = shallow(<GroceryItemView
      grocery={grocery}
      showEdit
      showLoader
      editClickHandler={$fn()}
      editCloseHandler={$fn()}
      purchaseClickHandler={$fn()}
      deleteClickHandler={$fn()}
      setLoaderStatus={$fn()}
    />);
    expect(wrapper.length).toBe(1);
  });
});

describe('GroceryItem component', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });

  it('should render component', () => {
    const grocery = { ...groceriesMock[0] };
    const wrapper = shallow(<GroceryItem
      grocery={grocery}
      editShowGroceryId={grocery._id}
      setShowEditGrocery={$fn()}
      deleteGrocery={$fn()}
      setPurchaseStatus={$fn()}
    />);
    expect(wrapper.length).toBe(1);
  });
});
