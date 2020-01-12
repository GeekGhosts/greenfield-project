import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

class Login extends React.Component {
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
      <MDBCol md="6" >
      <MDBCard style={{height:" 588px"}}>
        <h2 className="h2 text-center py-4">Already have an account?</h2>
        <MDBCardBody>
          <form>
            <p className="h4 text-center py-4">Log in</p>
            <div className="grey-text">

              <MDBInput id="login_email" label="Your email" icon="envelope" group type="email" validate error="wrong" success="right" />

              <MDBInput id="login_password" label="Your password" icon="lock" group type="password" validate />

            </div>
            <div className="text-center py-4 mt-3">
              <MDBBtn color="cyan" type="submit"> Login </MDBBtn>
            </div>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    );
  }
}

export default Login;