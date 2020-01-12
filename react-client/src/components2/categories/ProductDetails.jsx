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
//import Product from './Product.jsx'

class ProductDetails extends React.Component{
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
       <div>this is product details</div>
      )
    }
};

module.exports = ProductDetails;
