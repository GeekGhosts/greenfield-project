import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import SignUp from './signup.jsx';
import Login from './login.jsx';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      someState: []
    };
  }

  componentDidMount() {
    // $.ajax({
    //   url: '/someroute',
    //   success: (data) => {
    //     this.setState({
    //       someState: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <SignUp />
          <Login />
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Account;