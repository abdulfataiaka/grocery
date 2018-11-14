import React from 'react';

const GroceryLoader = ({ show, text }) => (
  <div className="loader-overlay" style={{ display: `${show ? 'block' : 'none'}`}}>
    <div className="overlay"></div>
    <div className="content">
      <div className="main">
        <img src="/images/loader.gif" />
        <span className="text">
          { text ? text : 'Loading' }
        </span>
      </div>
    </div>
  </div>
);

export default GroceryLoader;
