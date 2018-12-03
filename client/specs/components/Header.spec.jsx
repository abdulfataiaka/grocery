import React from 'react';
import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

import { Header } from '../../components/Header/Index';
import HeaderView from '../../components/Header/HeaderView';
import { $fn } from '../mocks';

describe('HeaderView component', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });

  it('should render component', () => {
    const wrapper = shallow(<HeaderView
      showAddNewGroceryModal
      closeAddGroceryModal={$fn()}
      addModalBtnClick={$fn()}
      addGrocery={$fn()}
    />);
    expect(wrapper.length).toBe(1);
  });
});

describe('Header component', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });

  it('should render component', () => {
    const wrapper = shallow(<Header
      showAddNewGroceryModal
      setAddModalState={$fn()}
      addGrocery={$fn()}
    />);
    expect(wrapper.length).toBe(1);
  });
});
