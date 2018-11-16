import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GroceryItemView from './GroceryItemView';
import { setShowEditGrocery, setPurchaseStatus, deleteGrocery } from '../../actions/groceryAction';

/**
 *
 *
 * @description GroceryItem Cpmponent
 *
 * @name GroceryItem
 *
 * @extends {Component}
 */
class GroceryItem extends Component {
  /**
   * @description Creates an instance of GroceryItem.
   *
   * @param { Object } props
   *
   * @memberof GroceryItem
   */
  constructor(props) {
    super(props);

    this.state = {
      showLoader: false,
    };
  }

  /**
   *
   *
   * @description Handle edit button click
   *
   * @memberof GroceryItem
   */
  editClickHandler = () => {
    const { grocery: { _id } } = this.props;
    this.props.setShowEditGrocery(_id);
  }

  /**
   *
   *
   * @description Handle edit view close
   *
   * @memberof GroceryItem
   */
  editCloseHandler = () => {
    this.props.setShowEditGrocery(null);
  }

  /**
   *
   *
   * @description Update loader status
   *
   * @param { Boolean } status
   *
   * @memberof GroceryItem
   */
  setLoaderStatus = (status) => {
    this.setState({ showLoader: status });
  }

  /**
   *
   *
   * @description Handle purchase button click
   *
   * @memberof GroceryItem
   */
  purchaseClickHandler = () => {
    const { _id, purchased } = this.props.grocery;
    this.setState({ showLoader: true });

    this.props.setPurchaseStatus(_id, !purchased)
      .then(() => {
        this.setState({ showLoader: false });
      })
      .catch(() => {
        this.setState({ showLoader: false });
      });
  }

  /**
   *
   *
   * @description Handle delete button click
   *
   * @memberof GroceryItem
   */
  deleteClickHandler = () => {
    const { grocery: { _id } } = this.props;
    this.setState({ showLoader: true });

    this.props.deleteGrocery(_id)
      .catch(() => {
        this.setState({ showLoader: false });
      });
  }

  render() {
    const { showLoader } = this.state;
    const { grocery, editShowGroceryId } = this.props;

    return (
      <GroceryItemView
        grocery={grocery}
        showEdit={editShowGroceryId === grocery._id}
        showLoader={showLoader}
        editClickHandler={this.editClickHandler}
        editCloseHandler={this.editCloseHandler}
        purchaseClickHandler={this.purchaseClickHandler}
        deleteClickHandler={this.deleteClickHandler}
        setLoaderStatus={this.setLoaderStatus}
      />
    );
  }
}


GroceryItem.propTypes = {
  grocery: PropTypes.shape({
    purchased: PropTypes.bool.isRequired,
    _id: PropTypes.number.isRequired,
  }).isRequired,
  editShowGroceryId: PropTypes.any,
  setShowEditGrocery: PropTypes.func.isRequired,
  deleteGrocery: PropTypes.func.isRequired,
  setPurchaseStatus: PropTypes.func.isRequired,
};

const mapStateToProps = ({ global }) => ({
  editShowGroceryId: global.editShowGroceryId,
});

const mapDispatchToProps = {
  setShowEditGrocery,
  setPurchaseStatus,
  deleteGrocery,
};

export default connect(mapStateToProps, mapDispatchToProps)(GroceryItem);
