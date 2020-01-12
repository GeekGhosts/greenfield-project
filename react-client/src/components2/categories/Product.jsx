import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  hashHistory
} from "react-router-dom";
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

class Product extends React.Component{
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
    <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
      <Link to="/men/category/ProductID/ProductDetails">
        <MDBCard className="align-items-center">
          <MDBCardImage
            src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
            top
            alt="sample photo"
            overlay="white-slight"
          />
          <MDBCardBody className="text-center">
            <a href="#!" className="grey-text">
              <h5>Shirt</h5>
              {/* name to rendere  */}
            </a>
            <h5>
              <strong>
                <a href="#!" className="dark-grey-text">
                  Denim shirt{" "}
                  <MDBBadge pill color="danger">
                    NEW {/* change on state new best discount */}
                  </MDBBadge>
                </a>
              </strong>
            </h5>
            <h4 className="font-weight-bold blue-text">
              <strong>120$</strong> {/* price to rendere  */}
            </h4>
          </MDBCardBody>
        </MDBCard>
      </Link>
    </MDBCol>
  );
  }
};
module.exports= Product;
