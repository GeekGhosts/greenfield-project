import React from "react";
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

import CategorieF from "./CategorieF.jsx";

class WomenProductsCategories extends React.Component {

  render(){
    return(<div>
              <section className="text-center my-5" style={{margin:" 50px"}}>
                <h1>All Women product </h1>
                <MDBRow>
                  <CategorieF />
                  <CategorieF />
                  <CategorieF />
                </MDBRow>
              </section>
            </div>
    )
  }
};

module.exports= WomenProductsCategories;
