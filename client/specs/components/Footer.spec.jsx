import React from 'react';
import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

import Footer from '../../components/Footer/Index';

describe('Footer component', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });

  it('should render component', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.length).toBe(1);
  });
});
