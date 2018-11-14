import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ManageGrocery from '../ManageGrocery/Index';
import { addGrocery } from '../../actions/groceryAction';

class AddModal extends Component {
  static initialGrocery = {
    name: '',
    price: '',
    image: ''
  }

  constructor(props) {
    super(props);

    this.state = {
      grocery: {
        ...AddModal.initialGrocery
      }
    }
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.addGrocery(this.state.grocery);
    this.setState({
      grocery: {
        ...AddModal.initialGrocery
      }
    });
    this.closeModalHandler();
  }

  onChangeHandler = (event) => {
    const { target: { name, value }} = event;

    this.setState(({ grocery }) => ({
      grocery: {
        ...grocery,
        [name]: value
      }
    }));
  }

  closeModalHandler = () => {
    this.props.closeAddGroceryModal();
  }

  render() {
    const { grocery } = this.state;

    return (
      <div id="add-modal">
        <ManageGrocery
          grocery={grocery}
          title={'New Grocery'}
          changeHandler={this.onChangeHandler}
          submitHandler={this.onSubmitHandler}
          closeHandler={this.closeModalHandler}
        />
      </div>
    );
  }
}

AddModal.propTypes = {
  closeAddGroceryModal: PropTypes.func.isRequired
}

export default AddModal;
