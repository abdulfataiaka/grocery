import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EditGroceryView from './EditGroceryView';
import { editGrocery } from '../../actions/groceryAction';

class EditGrocery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      grocery: { ...props.grocery }
    }
  }

  componentDidUpdate(prevProps) {
    const { editShowGroceryId: oldShowId } = prevProps;
    const { grocery, editShowGroceryId: newShowId } = this.props;

    if (oldShowId !== newShowId) {
      this.setState({ grocery: { ...grocery }})
    }
  }

  onChangeHandler = (event) => {
    const { grocery } = this.state;
    const { target: { name, value } } = event;

    this.setState({
      grocery: {
        ...grocery,
        [name]: value
      }
    });
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    if(!this.detailsChanged()) {
      console.log('No changes has been made');
    }

    else {
      this.props.editGrocery(this.state.grocery);
    }
  }

  detailsChanged = () => {
    const { grocery: stateGrocery } = this.state;
    const { grocery: propsGrocery } = this.props;

    return (
      stateGrocery.name.toLowerCase() !== propsGrocery.name.toLowerCase() ||
      stateGrocery.price !== propsGrocery.price ||
      stateGrocery.image !== propsGrocery.image
    );
  }

  render() {
    const { show, editCloseHandler } = this.props;
    const { grocery } = this.state;

    return (
      <EditGroceryView
        show={show}
        grocery={grocery}
        closeHandler={editCloseHandler}
        changeHandler={this.onChangeHandler}
        submitHandler={this.onSubmitHandler}
      />
    );
  }
}

EditGrocery.propTypes = {
  grocery: PropTypes.shape({}).isRequired,
  show: PropTypes.bool.isRequired,
  editCloseHandler: PropTypes.func.isRequired,
  editShowGroceryId: PropTypes.any
}

const mapDispatchToProps = {
  editGrocery
};

const mapStateToProps = ({ global }) => ({
  editShowGroceryId: global.editShowGroceryId
});

export default connect(mapStateToProps, mapDispatchToProps)(EditGrocery);

