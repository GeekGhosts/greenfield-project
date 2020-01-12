import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      register_name: "",
      register_email: "",
      register_password: "",
      register_password_confirmation: ""
    };
  }

  handleClick(event) {
    event.preventDefault();
    var data = {};
    for (var keys in this.state) {
      data[keys] = this.state[keys]
    }
    var that = this
    $.post("/signIn", data, function(boo){
      if (boo) {
        that.props.authenticated(that.state.email);
        that.props.redirectHome();
      } else {
        that.resetState();
      }

    })

  }

  typing(event) {
    this.setState({[event.target.id]: event.target.value});
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
      <h2 className="h2 text-center py-4">First time you visit us?</h2>
        <MDBCardBody>
          <form>
            <div className="grey-text">
              <MDBInput id="register_name" label="Your name" icon="user" group type="text" validate error="wrong" success="right" value={this.state.register_name} onChange={this.typing.bind(this)} />

              <MDBInput id="register_email" label="Your email" icon="envelope" group type="email" validate error="wrong" success="right" value={this.state.register_email} onChange={this.typing.bind(this)} />

              <MDBInput id="register_password" label="Your password" icon="lock" group type="password" validate value={this.state.register_password} onChange={this.typing.bind(this)} />

              <MDBInput id="register_password_confirmation" label="Confirm your password" icon="exclamation-triangle" group type="password" validate error="wrong" success="right" value={this.state.register_password_confirmation} onChange={this.typing.bind(this)} />

            </div>
            <div className="text-center py-4 mt-3">
              <MDBBtn color="cyan" type="submit">Register</MDBBtn>
            </div>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    );
  }
}

export default SignUp;