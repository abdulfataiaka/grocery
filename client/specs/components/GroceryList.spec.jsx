import React from 'react';
import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

import { GroceryList } from '../../components/GroceryList/Index';
import GroceryListView from '../../components/GroceryList/GroceryListView';
import { groceriesMock } from '../mocks';

describe('GroceryListView component', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });

  it('should render component', () => {
    const groceries = [...groceriesMock];
    const wrapper = shallow(<GroceryListView groceries={groceries} />);
    expect(wrapper.length).toBe(1);
  });
});

describe('GroceryItem component', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });

  it('should render component', () => {
    const groceries = [...groceriesMock];
    const wrapper = shallow(<GroceryList groceries={groceries} />);
    expect(wrapper.length).toBe(1);
  });
});
