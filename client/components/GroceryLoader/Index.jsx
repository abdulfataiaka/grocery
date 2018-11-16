import React from 'react';
import PropTypes from 'prop-types';

const GroceryLoader = ({ show, text }) => (
  <div className="loader-overlay" style={{ display: `${show ? 'block' : 'none'}` }}>
    <div className="overlay" />
    <div className="content">
      <div className="main">
        <img src="/images/loader.gif" alt="" />

        <span className="text">
          { text || 'Loading' }
        </span>
      </div>
    </div>
  </div>
);


GroceryLoader.propTypes = {
  show: PropTypes.bool.isRequired,
  text: PropTypes.string,
};

export default GroceryLoader;
