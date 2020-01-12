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

class CategorieF extends React.Component{

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
      <MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce wide>
      <MDBCardImage cascade top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/shoes%20(3).jpg"
        waves />
      <MDBCardBody cascade className="text-center">
        <MDBCardTitle tag="h5">
          Shoes
        </MDBCardTitle>
        <MDBCardTitle>
          <a href="#!"><strong>Product name</strong></a>
        </MDBCardTitle>
        <ul className="rating" style={{display:" -webkit-inline-box","list-style-type": "none"
}}>
          <li style={{"padding-right": "10px"}}>
            <MDBIcon icon="star" />
          </li>
          <li style={{"padding-right": "10px"}}>
            <MDBIcon icon="star" />
          </li>
          <li style={{"padding-right": "10px"}}>
            <MDBIcon icon="star" />
          </li>
          <li style={{"padding-right": "10px"}}>
            <MDBIcon icon="star" />
          </li>
          <li style={{"padding-right": "10px"}} >
            <MDBIcon className="far" icon="star" />
          </li>
        </ul>
        <MDBCardText>
          Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates. Temporibus autem quibusdam. Lorem Ipsum dolor ament.
        </MDBCardText>
        <MDBCardFooter style={{padding:" unset"}}>
          <span className="float-left">49$</span>
          <span className="float-right">
            <MDBTooltip placement="top">
              <MDBBtn tag="a" color="transparent" size="lg"  target="_blank" className="p-1 m-0 mr-2 z-depth-0" >
                  <MDBIcon icon="shopping-cart" style={{ color: "black"}}/>
              </MDBBtn>
              <div>Add to Cart</div>
            </MDBTooltip>
          </span>
        </MDBCardFooter>
      </MDBCardBody>
    </MDBCard>
    )
  }
};

module.exports= CategorieF;
