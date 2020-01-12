import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } from "mdbreact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  hashHistory
} from "react-router-dom";

class Women extends React.Component {
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
    <section className="text-center my-5" style={{margin:" 50px"}}>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        All our categories
      </h2>

      <MDBRow >
        <MDBCol lg="3" md="6" className="mb-lg-2 mb-4">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/1.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="grey-text">
                <h5>Denim</h5>
              </a>
              <MDBCardTitle>
                <strong>
                 <Link to="/women/category"> <a href="#!">Denim trousers</a> </Link>
                </strong>
              </MDBCardTitle>

              <MDBCardText>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
              </MDBCardText>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/2.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="grey-text">
                <h5>Shoes</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href="#!">High heels</a>
                </strong>
              </MDBCardTitle>

              <MDBCardText>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
              </MDBCardText>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/4.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="grey-text">
                <h5>Outwear</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href="#!">Brown coat</a>
                </strong>
              </MDBCardTitle>

              <MDBCardText>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
              </MDBCardText>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/3.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="grey-text">
                <h5>Blouses</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href="#!">Shirt</a>
                </strong>
              </MDBCardTitle>

              <MDBCardText>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

    </section>
  );
}
}

module.exports = Women;