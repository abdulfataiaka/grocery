import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EditGroceryView from './EditGroceryView';
import { editGrocery, setShowEditGrocery } from '../../actions/groceryAction';

/**
 *
 *
 * @description EditGrocery Component
 *
 * @name EditGrocery
 *
 * @extends {Component}
 */
export class EditGrocery extends Component {
  /**
   * @description Creates an instance of EditGrocery
   *
   * @param { Object } props
   *
   * @memberof EditGrocery
   */
  constructor(props) {
    super(props);

    this.state = {
      grocery: { ...props.grocery },
    };
  }

  /**
   *
   *
   * @description Handle action after update
   *
   * @param { Object } prevProps
   *
   * @memberof EditGrocery
   */
  shouldComponentUpdate(nextProps) {
    const { editShowGroceryId: oldShowId } = this.props;
    const { grocery, editShowGroceryId: newShowId } = nextProps;

    if (oldShowId !== newShowId) {
      this.setState({ grocery: { ...grocery } });
    }

    return true;
  }

  /**
   *
   *
   * @description Handle fields change
   *
   * @param { Object } event
   *
   * @memberof EditGrocery
   */
  onChangeHandler = (event) => {
    const { grocery } = this.state;
    const { target: { name, value } } = event;

    this.setState({
      grocery: {
        ...grocery,
        [name]: value,
      },
    });
  }

  /**
   *
   *
   * @description Handle form submit
   *
   * @param { Object } event
   *
   * @memberof EditGrocery
   */
  onSubmitHandler = (event) => {
    event.preventDefault();
    if (!this.detailsChanged()) return;

    this.props.setLoaderStatus(true);
    this.props.editGrocery(this.state.grocery)
      .then(() => {
        this.props.setLoaderStatus(false);
      })
      .catch(() => {
        this.props.setLoaderStatus(false);
      });
    this.props.setShowEditGrocery(null);
  }

  /**
   *
   *
   * @description Check if details did change
   *
   * @memberof EditGrocery
   */
  detailsChanged = () => {
    const { grocery: stateGrocery } = this.state;
    const { grocery: propsGrocery } = this.props;

    return (
      stateGrocery.name.toLowerCase() !== propsGrocery.name.toLowerCase()
      || stateGrocery.price !== propsGrocery.price
      || stateGrocery.image !== propsGrocery.image
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
  setLoaderStatus: PropTypes.func.isRequired,
  editShowGroceryId: PropTypes.any,
  editGrocery: PropTypes.func.isRequired,
  setShowEditGrocery: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  editGrocery,
  setShowEditGrocery,
};

const mapStateToProps = ({ global }) => ({
  editShowGroceryId: global.editShowGroceryId,
});

export default connect(mapStateToProps, mapDispatchToProps)(EditGrocery);
