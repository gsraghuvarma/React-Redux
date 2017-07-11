/*
 *
 * Addaccount
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';
 class Addaccount extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
        super();
        this.state = {
			name: '',
			upassword: '',
			email: '',
			contact: '',
			users:[],
		};
		this.goToAddaccount = this.goToAddaccount.bind(this);
		this.inputChange = this.inputChange.bind(this);
  }
  inputChange (event) {
	  this.setState({
		  [event.target.name]:event.target.value,
	  });
  }
  goToAddaccount() {
	var user = {
		name:this.state.name,
		uP:this.state.upassword,
		email:this.state.email,
		contact:this.state.contact
	}
	
	this.setState(
	{
		users: [...this.state.users, user]
	}
	);
  }
  goToBack() {
	browserHistory.push('/adminsection');
  }
  render() {
	  console.log(this.state);
    return (
      <div>
      <div className="containersub">
      <div><h2>Add account</h2></div>
	  <div className="Loginusername">
	    <label>Name</label> : <input type='text' name='name' value={this.state.name} onChange={this.inputChange} />
	  </div>
	  <div className="Loginusername">
	    <label>Password</label> : <input type='password' name='upassword' value={this.state.upassword} onChange={this.inputChange} />
	  </div>
	  <div className="Loginusername">
	    <label>Email</label> : <input type='text' name='email' value={this.state.email} onChange={this.inputChange} />
	  </div>
	  <div className="Loginusername">
	    <label>Contact No</label> : <input type='text' name='contact' value={this.state.contact} onChange={this.inputChange} />
	  </div>
	  <div>
			<input type='button' className="AdminLogin" value='Add Account' onClick={this.goToAddaccount} />
			<input type='button' className="AccountLogin" value='Back' onClick={this.goToBack} />
	  </div>
	  
		<table className="table">
						    <thead>
						      <tr>
						        <th>Name</th>
						        <th>Password</th>
						        <th>Email</th>
						        <th>Contact</th>
						      </tr>
						    </thead>
						    </table>
			{
				this.state.users.map(function (user, index) {
					return (
						
						<table className="table">
						<tbody key={index}>
					      <tr>
					        <td>{user.name}</td>
					        <td>{user.uP}</td>
					        <td>{user.email}</td>
					        <td>{user.contact}</td>
					      </tr>
					    </tbody>
		</table>
					    /*<h1>{user.name}</h1>*/
					
					);
				})
			}
      </div>
      </div>
    );
  }
}

Addaccount.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Addaccount);
