import React from 'react';
import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

import NoGroceries from '../../components/NoGroceries/Index';

describe('NoGroceries component', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });

  it('should render component', () => {
    const wrapper = shallow(<NoGroceries />);
    expect(wrapper.length).toBe(1);
  });
});
