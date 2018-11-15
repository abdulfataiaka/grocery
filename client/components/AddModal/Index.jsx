import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ManageGrocery from '../ManageGrocery/Index';
import GroceryLoader from '../GroceryLoader/Index';

/**
 *
 *
 * @description Add Modal Component
 *
 * @name AddModal
 */
class AddModal extends Component {
  static initialGrocery = {
    name: '',
    price: '',
    image: '',
  }

  /**
   * @description Creates an instance of AddModal.
   *
   * @param { Object } props
   *
   * @memberof AddModal
   */
  constructor(props) {
    super(props);

    this.state = {
      showLoader: false,
      grocery: {
        ...AddModal.initialGrocery,
      },
    };
  }

  /**
   *
   *
   * @description Handle form submit
   *
   * @param { Object } event
   *
   * @memberof AddModal
   */
  onSubmitHandler = (event) => {
    event.preventDefault();
    this.setState({ showLoader: true });
    this.props.addGrocery(this.state.grocery)
      .then(() => {
        this.setState({ showLoader: false });
        this.closeModalHandler();
      })
      .catch(() => {
        this.setState({ showLoader: false });
      });
  }

  /**
   *
   *
   * @description Handle fields change
   *
   * @param { Object } event
   *
   * @memberof AddModal
   */
  onChangeHandler = (event) => {
    const { target: { name, value } } = event;

    this.setState(({ grocery }) => ({
      grocery: {
        ...grocery,
        [name]: value,
      },
    }));
  }

  /**
   *
   *
   * @description Handle close modal action
   *
   * @memberof AddModal
   */
  closeModalHandler = () => {
    this.setState({
      grocery: {
        ...AddModal.initialGrocery,
      },
    });
    this.props.closeAddGroceryModal();
  }

  render() {
    const { grocery, showLoader } = this.state;

    return (
      <div id="add-modal">
        <GroceryLoader show={showLoader} text="Adding Grocery" />
        <div id="add-modal-form">
          <ManageGrocery
            grocery={grocery}
            title="New Grocery"
            changeHandler={this.onChangeHandler}
            submitHandler={this.onSubmitHandler}
            closeHandler={this.closeModalHandler}
          />
        </div>
      </div>
    );
  }
}

AddModal.propTypes = {
  closeAddGroceryModal: PropTypes.func.isRequired,
  addGrocery: PropTypes.func.isRequired,
};

export default AddModal;
