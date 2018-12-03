import React from 'react';
import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

import ManageGrocery from '../../components/ManageGrocery/Index';
import { $fn, groceriesMock } from '../mocks';

describe('ManageGrocery component', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });

  it('should render component', () => {
    const grocery = { ...groceriesMock[0] };
    const wrapper = shallow(<ManageGrocery
      title="Edit grocery"
      grocery={grocery}
      changeHandler={$fn()}
      submitHandler={$fn()}
      closeHandler={$fn()}
    />);
    expect(wrapper.length).toBe(1);
  });
});
