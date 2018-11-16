import React from 'react';
import GroceryItem from '../GroceryItem/Index';
import NoGroceries from '../NoGrceries/Index';

const GroceryListView = ({ groceries }) => (
  !groceries.length
    ? <NoGroceries />
    : (
    <div className="row">
      {
        groceries.map((grocery) => (
          <div key={grocery._id} className="col-3">
            <GroceryItem grocery={grocery} />
          </div>
        ))
      }
    </div>
  )
);

export default GroceryListView;
