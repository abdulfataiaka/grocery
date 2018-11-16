import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderView from './HeaderView';
import { setAddModalState, addGrocery } from '../../actions/groceryAction';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  
  openAddGroceryModal = () => {
    this.props.setAddModalState(true);
  }

  closeAddGroceryModal = () => {
    this.props.setAddModalState(false);
  }

  render() {
    const { showAddNewGroceryModal, addGrocery } = this.props;

    return (
      <HeaderView
        showAddNewGroceryModal={showAddNewGroceryModal}
        addModalBtnClick={this.openAddGroceryModal}
        closeAddGroceryModal={this.closeAddGroceryModal}
        addGrocery={addGrocery}
      />
    );
  }
}

Header.propTypes = {
  showAddNewGroceryModal: PropTypes.bool.isRequired,
  setAddModalState: PropTypes.func.isRequired,
  addGrocery: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  setAddModalState,
  addGrocery
};

const mapStateToProps = ({ global }) => ({
  showAddNewGroceryModal: global.showAddNewGroceryModal
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
