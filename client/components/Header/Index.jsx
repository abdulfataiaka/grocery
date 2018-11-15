import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderView from './HeaderView';
import { setAddModalState, addGrocery } from '../../actions/groceryAction';

class Header extends Component {
  /**
   *
   *
   * @description Handle open add modal
   *
   * @memberof GroceryItem
   */
  openAddGroceryModal = () => {
    this.props.setAddModalState(true);
  }

  /**
   *
   *
   * @description Handle close add modal
   *
   * @memberof GroceryItem
   */
  closeAddGroceryModal = () => {
    this.props.setAddModalState(false);
  }

  render() {
    const { showAddNewGroceryModal } = this.props;

    return (
      <HeaderView
        showAddNewGroceryModal={showAddNewGroceryModal}
        addModalBtnClick={this.openAddGroceryModal}
        closeAddGroceryModal={this.closeAddGroceryModal}
        addGrocery={this.props.addGrocery}
      />
    );
  }
}

Header.propTypes = {
  showAddNewGroceryModal: PropTypes.bool.isRequired,
  setAddModalState: PropTypes.func.isRequired,
  addGrocery: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  setAddModalState,
  addGrocery,
};

const mapStateToProps = ({ global }) => ({
  showAddNewGroceryModal: global.showAddNewGroceryModal,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
