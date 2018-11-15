import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header/Index';
import Footer from './Footer/Index';
import GroceryList from './GroceryList/Index';

import '../styles/app.scss';

const App = ({ showAddNewGroceryModal }) => (
  <div id="wrapper">
    <Header />

    <div id="view-content">
      { showAddNewGroceryModal && <div id="page-overlay" /> }

      <div className="align mt-5">
        <GroceryList />
      </div>
    </div>

    <Footer />
  </div>
);

const mapStateToProps = ({ global }) => ({
  showAddNewGroceryModal: global.showAddNewGroceryModal,
});

App.propTypes = {
  showAddNewGroceryModal: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(App);
