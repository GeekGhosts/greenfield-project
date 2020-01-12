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

class CategorieM extends React.Component{
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
        <MDBCol lg="2" md="0" className="mb-lg-0 mb-4" style={{marginbottom: "50px !important"}}>
          <MDBCard cascade narrow ecommerce>
            <Link to="/men/category">
              <MDBCardImage
                cascade
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/1.jpg"
                top
                alt="sample photo"
                overlay="white-slight"
              />
              <MDBCardBody cascade className="text-center">
                <MDBCardTitle>
                  <strong>T-shirt</strong>
                </MDBCardTitle>
              </MDBCardBody>
            </Link>
          </MDBCard>
        </MDBCol>
    )
    }
  }

module.exports= CategorieM;
