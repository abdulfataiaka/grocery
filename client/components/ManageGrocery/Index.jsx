import React from 'react';
import PropTypes from 'prop-types';

const ManageGrocery = ({
  title,
  grocery,
  closeHandler,
  changeHandler,
  submitHandler
}) => (
  <form onSubmit={submitHandler}>
    <div className="field-heading clearfix">
      <span className="title float-left">
        { title || 'Manage Grocery' }
      </span>

      <button type="submit" className="actico float-right">
        <i className="fas fa-check"></i>
      </button>

      <button
        type="button"
        className="actico last float-right"
        onClick={closeHandler}
      >
        <i className="fas fa-times"></i>
      </button>
    </div>

    <div className="fset">
      <label>Name</label>
      <input
        type="text"
        value={grocery.name}
        name="name"
        onChange={changeHandler}
      />
    </div>

    <div className="fset">
      <label>Price</label>
      <input
        type="text"
        value={grocery.price}
        name="price"
        onChange={changeHandler}
      />
    </div>

    <div className="fset">
      <label>Image URL</label>
      <input
        type="text"
        value={grocery.image}
        name="image"
        onChange={changeHandler}
      />
    </div>
  </form>
);


ManageGrocery.propTypes = {
  title: PropTypes.string,
  grocery: PropTypes.shape({}).isRequired,
  changeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
  closeHandler: PropTypes.func.isRequired
}

export default ManageGrocery;
