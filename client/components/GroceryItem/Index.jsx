import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GroceryItemView from './GroceryItemView';
import { setShowEditGrocery, setPurchaseStatus, deleteGrocery } from '../../actions/groceryAction';

class GroceryItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoader: false
    }
  }

  editClickHandler = () => {
    const { grocery: { id } } = this.props;
    this.props.setShowEditGrocery(id);
  }

  editCloseHandler = () => {
    this.props.setShowEditGrocery(null);
  }

  purchaseClickHandler = () => {
    const { id, purchased } = this.props.grocery;
    this.props.setPurchaseStatus(id, !purchased);
  }

  deleteClickHandler = () => {
    const { grocery: { id } } = this.props;
    this.props.deleteGrocery(id);
  }

  render() {
    const { showLoader } = this.state;
    const { grocery, editShowGroceryId } = this.props;

    return (
      <GroceryItemView
        grocery={grocery}
        showEdit={editShowGroceryId === grocery.id}
        showLoader={showLoader}
        editClickHandler={this.editClickHandler}
        editCloseHandler={this.editCloseHandler}
        purchaseClickHandler={this.purchaseClickHandler}
        deleteClickHandler={this.deleteClickHandler}
      />
    );
  }
}


GroceryItem.propTypes = {
  grocery: PropTypes.shape({}).isRequired,
  editShowGroceryId: PropTypes.any
}

const mapStateToProps = ({ global }) => ({
  editShowGroceryId: global.editShowGroceryId
});

const mapDispatchToProps = {
  setShowEditGrocery,
  setPurchaseStatus,
  deleteGrocery
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryItem);

