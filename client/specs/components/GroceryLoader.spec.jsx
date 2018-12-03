import React from 'react';
import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

import GroceryLoader from '../../components/GroceryLoader/Index';

describe('GroceryLoader component', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });

  it('should render component', () => {
    const wrapper = shallow(<GroceryLoader show />);
    expect(wrapper.length).toBe(1);
  });
});
