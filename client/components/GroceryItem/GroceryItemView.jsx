import React from 'react';
import PropTypes from 'prop-types';
import EditGrocery from '../EditGrocery/Index';
import GroceryLoader from '../GroceryLoader/Index';

const GroceryItemView = ({
  grocery,
  showLoader,
  showEdit,
  editClickHandler,
  editCloseHandler,
  purchaseClickHandler,
  deleteClickHandler,
  setLoaderStatus,
}) => (
  <div className="grocery-box">
    <GroceryLoader show={showLoader} />

    <EditGrocery
      grocery={grocery}
      show={showEdit}
      editCloseHandler={editCloseHandler}
      setLoaderStatus={setLoaderStatus}
    />

    <div className="img-box">
      <img src={grocery.image} alt="" />
    </div>

    <div className="base-desc">
      <div className="top clearfix">
        <span className="title float-left">{grocery.name}</span>
        <span className="price float-right">{grocery.price}</span>
      </div>

      <div className="bottom clearfix">
        <button
          type="button"
          className={`purchase-btn float-left ${grocery.purchased && 'disabled'}`}
          onClick={purchaseClickHandler}
        >
          { grocery.purchased ? 'Purchased' : 'Purchase' }
        </button>

        <button
          type="button"
          className="actico float-right"
          onClick={deleteClickHandler}
        >
          <i className="fas fa-trash" />
        </button>

        <button
          type="button"
          className="actico last float-right"
          onClick={editClickHandler}
        >
          <i className="fas fa-edit" />
        </button>
      </div>
    </div>
  </div>
);

GroceryItemView.propTypes = {
  grocery: PropTypes.shape({}).isRequired,
  showEdit: PropTypes.bool.isRequired,
  showLoader: PropTypes.bool.isRequired,
  editClickHandler: PropTypes.func.isRequired,
  editCloseHandler: PropTypes.func.isRequired,
  purchaseClickHandler: PropTypes.func.isRequired,
  deleteClickHandler: PropTypes.func.isRequired,
  setLoaderStatus: PropTypes.func.isRequired,
};

export default GroceryItemView;
