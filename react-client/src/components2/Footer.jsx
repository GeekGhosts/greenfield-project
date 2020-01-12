import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata: {
        userId: "",
        hastoken: false
      }
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
  render(){
        return (
          <MDBFooter color="grey" className="font-small pt-4 mt-4">
            <BrowserRouter>
                <MDBNav className="justify-content-center">
                  <MDBNavItem>
                    <MDBNavLink active to="#!"><a className="nav-link waves-effect waves-light"><i className="fab fa-facebook-f"></i></a>
      </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!"><a className="nav-link waves-effect waves-light"><i className="fab fa-twitter"></i></a></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!"><a className="nav-link waves-effect waves-light"><i className="fab fa-instagram"></i></a></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!"><a className="nav-link waves-effect waves-light"><i className="fab fa-youtube"></i></a></MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
              </BrowserRouter>
            <MDBContainer fluid className="text-center text-md-left">
              <MDBRow>
                <MDBCol md="6">
                  <h5 className="title">Footer Content</h5>
                  <p>
                    Here you can use rows and columns here to organize your footer
                    content.
                  </p>
                </MDBCol>
                <MDBCol md="6">
                  <ul>
                    <li className="list-unstyled">
                      <a href="#!">About Us</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!">Contact Us</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!">Collection</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!">Map</a>
                    </li>
                  </ul>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
              <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="#"> GeekGhost </a>
              </MDBContainer>
            </div>
          </MDBFooter>
  );
  }
}

module.exports = Footer;