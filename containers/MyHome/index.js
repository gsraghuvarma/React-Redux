/*
 *
 * MyHome
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export class MyHome extends React.Component { // eslint-disable-line react/prefer-stateless-function
  goToAdminLogin() {
	  
  }
  
  render() {
    return (
      <h1>
        <FormattedMessage {...messages.header} />
		<div>
			<input type='button' value='Admin Login' onClick={this.goToAdminLogin} />
			<input type='button' value='Admin Dash' />
		</div>
      </h1>
    );
  }
}

MyHome.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(MyHome);
