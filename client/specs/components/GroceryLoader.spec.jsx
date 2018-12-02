import React from 'react';
import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

import AddModal from '../../components/AddModal/Index';
import { $fn } from '../mocks';

describe('AddModal component', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });

  it('should render component', () => {
    const wrapper = shallow(<AddModal
      closeAddGroceryModal={$fn()}
      addGrocery={$fn()}
    />);
    expect(wrapper.length).toBe(1);
  });
});
