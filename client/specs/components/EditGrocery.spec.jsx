import React from 'react';
import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

import { EditGrocery } from '../../components/EditGrocery/Index';
import EditGroceryView from '../../components/EditGrocery/EditGroceryView';
import { $fn, groceriesMock } from '../mocks';

describe('EditGroceryView component', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });

  it('should render component', () => {
    const grocery = { ...groceriesMock[0] };
    const wrapper = shallow(<EditGroceryView
      grocery={grocery}
      show
      closeHandler={$fn()}
      changeHandler={$fn()}
      submitHandler={$fn()}
    />);
    expect(wrapper.length).toBe(1);
  });
});

describe('EditGrocery component', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });

  it('should render component', () => {
    const grocery = { ...groceriesMock[0] };
    const wrapper = shallow(<EditGrocery
      grocery={grocery}
      show
      editCloseHandler={$fn()}
      setLoaderStatus={$fn()}
      editShowGroceryId={grocery._id}
      editGrocery={$fn()}
      setShowEditGrocery={$fn()}
    />);
    expect(wrapper.length).toBe(1);
  });
});
