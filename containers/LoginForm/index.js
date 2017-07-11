/*
 *
 * LoginForm
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';

class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
			username: '',
			password: '',
			message: '',
		};
		this.inputChange = this.inputChange.bind(this);
		this.validateUser = this.validateUser.bind(this);
    }
  validateUser () {
	console.log('test', this.state);
	if(this.state.username==='admin' && this.state.password==='admin') {
		browserHistory.push('/adminsection');
	}else {
		this.setState({
		  message: 'Login Failed!! ',
	  });
	}
  }
  inputChange (event) {
	  this.setState({
		  [event.target.name]:event.target.value,
	  });
  }
  
  render() {
    return (
      <div>
       <div className="container">
		<div className="Loginusername">
			<label>Username </label>: <input type='text' name='username' value={this.state.username} onChange={this.inputChange} required/>
		</div>
		<div className="Loginusername">
			<label>Password </label> : <input type='password' name='password' value={this.state.password} onChange={this.inputChange} required/>
		</div>
		<div>
			<input type='button' className="AdminLogin" value='Login' onClick={this.validateUser}/>
		</div>
		<div className="errorMsg">
			{this.state.message}
		</div>
		</div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  username: React.PropTypes.string,
  password: React.PropTypes.string,
};

export default LoginForm;
