/*
 *
 * Addstudent
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectAddstudent from './selectors';
import {browserHistory} from 'react-router';
import axios from 'axios';
class Addstudent extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
   super();
    this.state = {
      name: '',
      email: '',
      course: '',
      fee: '',
      paid: '',
      due: '',
      address: '',
      city: '',
      state: '',
      country: '',
      contactno: ''

    };
    this.inputChange = this.inputChange.bind(this);
    this.validateUser = this.validateUser.bind(this);
	  this.goToAddsubmit = this.goToAddsubmit.bind(this);
    }

    validateUser () {
      
    }
    inputChange (event) {
    this.setState({
      [event.target.name]:event.target.value,
    });
  }
  goToAddsubmit() {
    this.setState({
      [event.target.name]:event.target.value,
    });
	var obj =   {
      name: this.state.name,
      email: this.state.email,
      course: this.state.course,
      fee: this.state.fee,
      paid: this.state.paid,
      due: this.state.due,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      country: this.state.country,
      contactno: this.state.contactno
  }
    axios.post('http://10.20.200.42:8080/Angular/addStudent',obj)
      .then(function(data) {
		    console.log(data);
			   alert('Successfully Submited Form: ' + data);
		   }, function(reason) {
		     alert('Failed: ' + reason);
		});
  }

  goToBack() {
    browserHistory.push('/login');
  }


  render() {
    return (
      <div>
       <div className="containersub">
        <div><h2>Add Student</h2></div>
            <div className="Loginusername">
              <label>Name</label> : <input type='text' name='name' value={this.state.name} onChange={this.inputChange} />
            </div>
            <div className="Loginusername">
              <label>Email</label> : <input type='text' name='email' value={this.state.email} onChange={this.inputChange} />
            </div>
            <div className="Loginusername">
              <label>Course</label> : <input type='text' name='course' value={this.state.course} onChange={this.inputChange}  />
            </div>
            <div className="Loginusername">
              <label>Fee</label> : <input type='text' name='fee' value={this.state.fee} onChange={this.inputChange}  />
            </div>
            <div className="Loginusername">
              <label>Paid</label> : <input type='text' name='paid' value={this.state.paid} onChange={this.inputChange}  />
            </div>
            <div className="Loginusername">
              <label>Due</label> : <input type='text' name='due' value={this.state.due} onChange={this.inputChange}  />
            </div>
            <div className="Loginusername">
              <label>Address</label> : <textarea name="address" value={this.state.address} onChange={this.inputChange}></textarea>
            </div>
            <div className="Loginusername">
              <label>City </label> : <input type='text' name='city' value={this.state.city} onChange={this.inputChange} />
            </div>
            <div className="Loginusername">
              <label>State </label> : <input type='text' name='state' value={this.state.state} onChange={this.inputChange}  />
            </div>
            <div className="Loginusername">
              <label>Country </label> : <input type='text' name='country' value={this.state.country} onChange={this.inputChange} />
            </div>
            <div className="Loginusername">
              <label>Contact No</label> : <input type='text' name='contactno' value={this.state.contactno} onChange={this.inputChange} />
            </div>
      <div>
      <input type='button' className="AdminLogin" value='Submit' onClick={this.goToAddsubmit} />
      <input type='button' className="AccountLogin" value='Back' onClick={this.goToBack} />
      </div>
      </div>
      </div>
    );
  }
}

Addstudent.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  addstudent: makeSelectAddstudent(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Addstudent);
