import React from 'react';
import PropTypes from 'prop-types';
import GroceryItem from '../GroceryItem/Index';
import NoGroceries from '../NoGrceries/Index';

const GroceryListView = ({ groceries }) => (
  !groceries.length
    ? <NoGroceries />
    : (
      <div className="row">
        {
        groceries.map(grocery => (
          <div key={grocery._id} className="col-3">
            <GroceryItem grocery={grocery} />
          </div>
        ))
      }
      </div>
    )
);

GroceryListView.propTypes = {
  groceries: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default GroceryListView;
