import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import SignUp from './signup.jsx';
import Login from './login.jsx';
import $ from 'jquery';
import { Redirect } from 'react-router-dom'

class Account extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {
        userId: ""
      }
    };
  }


  render() {
    return (
      <MDBContainer>
      {
          (this.props.userData.name === "") ? (
              <MDBRow>
                {/* render the signup and the login forms on the body */}
                <SignUp setUserData={this.props.setUserData} />
                <Login setUserData={this.props.setUserData} />
              </MDBRow>
              // Redirect the client to the home if he login
          ) : <Redirect to='/' />
        }
      </MDBContainer>
    );
  }
}

export default Account;