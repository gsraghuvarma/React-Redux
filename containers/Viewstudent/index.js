/*
 *
 * Viewstudent
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';
import axios from 'axios';

class Viewstudent extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  
  constructor(props) {
   super(props);
   this.state = {
      posts: []
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
      due: this.state.due,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      country: this.state.country,
      contact: this.state.contact
  }
    /*axios.get('/addUser',obj)
      .then(function(data) {
        console.log(data);
      alert('Success: ' + data.data.msg);
    }, function(reason) {
      alert('Failed: ' + reason);
    });*/


    axios.get('http://10.20.200.42:8080/Angular/getStudents')
      .then(res => {
        console.log(res);
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ posts });
      });
  }


  render() {
    return (
      <div>
      <div>
      <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th>Fee</th>
                    <th>Due</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Country</th>
                    <th>Contact No</th>
                  </tr>
                </thead>
      </table>

      {
        this.state.posts.map(function (obj, index) {
          return (
            
            <table className="table">
            <tbody key={index}>
                <tr>
                  <td>{obj.name}</td>
                  <td>{obj.email}</td>
                  <td>{obj.course}</td>
                  <td>{obj.fee}</td>
                  <td>{obj.due}</td>
                  <td>{obj.address}</td>
                  <td>{obj.city}</td>
                  <td>{obj.state}</td>
                  <td>{obj.country}</td>
                  <td>{obj.contact}</td>
                </tr>
              </tbody>
    </table>
          
          );
        })
      }

      </div>
      </div>
    );
  }
}

Viewstudent.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Viewstudent);
