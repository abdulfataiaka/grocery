import React from 'react';
import PropTypes from 'prop-types';
import AddModal from '../AddModal/Index';

const HeaderView = ({
  addModalBtnClick,
  showAddNewGroceryModal,
  closeAddGroceryModal,
  addGrocery,
}) => (
  <header>
    <div className="align clearfix">
      <img src="/images/logo.jpg" className="float-left" alt="pagelogo" />
      <span id="page-name">Grocery Store</span>

      <div id="add-btn-wrapper" className="float-right">
        <button onClick={addModalBtnClick} type="button" id="add-btn">
          <i className="fas fa-plus-circle" />
          <span>Add New</span>
        </button>

        { showAddNewGroceryModal && (
          <AddModal
            closeAddGroceryModal={closeAddGroceryModal}
            addGrocery={addGrocery}
          />
        )}
      </div>
    </div>
  </header>
);

HeaderView.propTypes = {
  showAddNewGroceryModal: PropTypes.bool.isRequired,
  closeAddGroceryModal: PropTypes.func.isRequired,
  addModalBtnClick: PropTypes.func.isRequired,
  addGrocery: PropTypes.func.isRequired,
};

export default HeaderView;
