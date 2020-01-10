import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } from "mdbreact";
import { BrowserRouter as Router, Switch, Route, Link, hashHistory } from 'react-router-dom';


const Body = (props) => {
  return (
    <div>
    <section className="text-center my-5">
      <MDBRow >
        <MDBCol lg="6" md="6" className="mb-lg-2 mb-4">
          <MDBCard collection className="z-depth-1-half">
            <div className="view zoom">
              <Link to="Men">
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
              <Link to ='Women'>
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

export default Body;

