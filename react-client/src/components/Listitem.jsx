import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";
import { BrowserRouter as Router, Switch, Route, Link, hashHistory } from 'react-router-dom';

import Article from './Article.jsx'
const ListItem = () => {
  return (
    <MDBContainer>
      <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId="1">
              <MDBRow>
              <MDBCol md="4">
              <Article/>
              </MDBCol>
              <MDBCol md="4">
              <Article/>
              </MDBCol>
              <MDBCol md="4">
              <Article/>
              </MDBCol>
              </MDBRow>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
            <MDBRow>
              <MDBCol md="4">
              <Article/>
              </MDBCol>
              <MDBCol md="4">
              <Article/>
              </MDBCol>
              <MDBCol md="4">
              <Article/>
              </MDBCol>
              </MDBRow>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
            <MDBRow>
              <MDBCol md="4">
              <Article/>
              </MDBCol>
              <MDBCol md="4">
              <Article/>
              </MDBCol>
              <MDBCol md="4">
              <Article/>
              </MDBCol>
              </MDBRow>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default ListItem;