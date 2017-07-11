/*
 *
 * Adminsection
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';

export class Adminsection extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  goToAddaccount() {
	browserHistory.push('/Addaccount');
  }
  goToViewaccount() {
	browserHistory.push('/Viewaccount');
  }
  goToLogout() {
	browserHistory.push('/login');
  }
  
  render() {
    return (
      <div>
      <div className="container">
      <h1>Admin Section</h1>
	    <div>
			<div><input type='button' className="AdminLogin" value='Add Account' onClick={this.goToAddaccount} /></div>
			<div><input type='button' className="AccountLogin" value='View Account' onClick={this.goToViewaccount} /></div>
			<div><input type='button' className="AdminLogin" value='Logout' onClick={this.goToLogout} /></div>
		  </div>
      </div>
      </div>
    );
  }
}

Adminsection.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Adminsection);
