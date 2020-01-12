import React from "react";
import $ from 'jquery';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBIcon,
  MDBTooltip,
  MDBBadge,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBBtn
} from "mdbreact";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  hashHistory
} from "react-router-dom";

class Body extends React.Component{
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
    <div style={{ margin: "40px" }}>
      <section className="text-center my-5">
        <MDBRow>
          <MDBCol lg="6" md="6" className="mb-lg-2 mb-4">
            <MDBCard collection className="z-depth-1-half">
              <div className="view zoom">
                <Link to="/men">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </Link>
              </div>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="6" md="6" className="mb-lg-2 mb-4">
            <MDBCard collection className="z-depth-1-half">
              <div className="view zoom">
                <Link to="/women">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/9.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </Link>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
    </div>
  );

  }

};

module.exports = Body;
