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

import CategorieM from "./CategorieM.jsx";

class MenProductsCategories extends React.Component{

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
    return(
      <div>
      <section className="text-center my-5" style={{ margin: "50px"}}>
        <h1>All Men products categories </h1>
        <MDBRow>
          <CategorieM />
          <CategorieM />
          <CategorieM />
          <CategorieM />
          <CategorieM />
          <CategorieM />
        </MDBRow>
      </section>
    </div>
    )
  }

}

module.exports =  MenProductsCategories;
