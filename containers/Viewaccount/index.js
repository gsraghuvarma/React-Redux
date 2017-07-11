/*
 *
 * Viewaccount
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';

export class Viewaccount extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  
  goToAddStudent() {
    browserHistory.push('/addstudent');
  }
  goToViewStudent() {
    browserHistory.push('/viewstudent');
  }
  goToEditStudent() {
    browserHistory.push('/editstudent');
  }
  goToLogout() {
    browserHistory.push('/login');
  }

  render() {
    return (
      <div>
      <div className="container">
      <div><h2>View Account</h2></div>
      <div>
        <input type='button' className="AdminLogin" value='Add Student' onClick={this.goToAddStudent} />
        <input type='button' className="AccountLogin" value='View Student' onClick={this.goToViewStudent} />
      </div>
      <div>
        <input type='button' className="AdminLogin" value='Edit Student' onClick={this.goToEditStudent} />
        <input type='button' className="AccountLogin" value='Logout' onClick={this.goToLogout} />
      </div>
      </div>
    </div>
    );
  }
}

Viewaccount.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Viewaccount);
