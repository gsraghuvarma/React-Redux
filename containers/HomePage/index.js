/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  goToAdminLogin() {
	browserHistory.push('/login');
  }
  
  render() {
    return (
      
		<div>
      <div className="container">
      <div><h2>Fee Report</h2></div>
			<div><input type='button' className="AdminLogin" value='Admin Login' onClick={this.goToAdminLogin} /></div>
			<div><input type='button' className="AccountLogin" value='Accountant Login' /></div>
      </div>
		</div>
      
    );
  }
}


HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(HomePage);