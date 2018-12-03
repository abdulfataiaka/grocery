import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GroceryListView from './GroceryListView';

export const GroceryList = ({ groceries }) => (
  <GroceryListView
    groceries={groceries}
  />
);

GroceryList.propTypes = {
  groceries: PropTypes.arrayOf(PropTypes.shape({})),
};

const mapStateToProps = ({ groceries }) => ({
  groceries,
});

export default connect(mapStateToProps, null)(GroceryList);
