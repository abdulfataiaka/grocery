import React from 'react';
import PropTypes from 'prop-types';
import ManageGrocery from '../ManageGrocery/Index';

const EditGroceryView = ({
  show,
  grocery,
  closeHandler,
  changeHandler,
  submitHandler
}) => (
  <div className="edit-overlay" style={{ display: `${show ? 'block' : 'none'}`}}>
    <div className="overlay"></div>
    <div className="content">
      <ManageGrocery
        grocery={grocery}
        title={'Edit Grocery'}
        changeHandler={changeHandler}
        submitHandler={submitHandler}
        closeHandler={closeHandler}
      />
    </div>
  </div>
);


EditGroceryView.propTypes = {
  grocery: PropTypes.shape({}).isRequired,
  show: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  changeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired
}

export default EditGroceryView;
