import React from "react";
import $ from 'jquery';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBTooltip, MDBCardFooter, MDBIcon, MDBBtn } from "mdbreact";
import { BrowserRouter as Router, Switch, Route, Link, hashHistory, useParams } from "react-router-dom";

// This component renders the product details page. it gets one specific product through a fetch call given the productId (passed as props) and returns that product information in the state.
class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      product: {},
      // the following two lines are necessary because on the mount, product.size is still undefined, so they need to be set after we fetch the data.
      sizes: "", // rendering sizes as a string
      arr: [] // rendering sizes as an array
    }
  }

  // when component mounts, fetch the product given the id passed in the props
  componentDidMount() {
    $.get(`/api/products/${this.props.id}`, (result)=> {
      var str = result.size.join(', ')
      this.setState({
        product: result,
        sizes: str.substring(0, str.length - 2),
        arr: result.size
      })
    })
  }

  // handle the click on "add to cart".
  // NB: Due to the lack of time, this is always going to add ONE element of size "M", easy to fix, we just didn't have the time. do not forget to link the value of the options on change and pass it here on click. add a quantity field and pass it here to fix the issue.
  handleClick() {
    this.props.addToCart(this.state.product, "M", 1);
  }

  render() {
    return (
      <MDBRow>
        <MDBCol md="6" className="customDiv">
          <MDBCardImage
            cascade
            top
            src={this.state.product.image}
            waves
            style={{ height: "33rem" }}
          />
        </MDBCol>
        <MDBCol md="6">
          <MDBCard className="m-2" style={{ width: "40rem", height: "33rem" }} cascade ecommerce wide>

            <MDBCardBody cascade className="text-center">
              <MDBCardTitle tag="h5">Category</MDBCardTitle>
              <MDBCardTitle>
                <a href="#!">
                  <strong>{this.state.product.title}</strong>
                </a>
              </MDBCardTitle>
              <MDBCardText>
              {this.state.product.description}
              </MDBCardText>
              <MDBCardFooter style={{display: "flex", flexDirection: "column", textAlign: "left"}}>
                <span className="float-left"><strong>Brand: </strong>{this.state.product.brand}</span>
                <span className="float-left"><strong>Price: </strong>{this.state.product.price}$</span>
                <span className="float-left"><strong>Sizes: </strong>{this.state.sizes}</span>
                <span className="float-left"><strong>Color: </strong>{this.state.product.color}</span>
                <span className="float-left"> <strong>Rating:</strong>{this.state.product.rating}</span>

              </MDBCardFooter>
                <div>
                  <p className="grey-text">Choose your size</p>
                  <div className="row text-center">
                    {
                      this.state.arr.map((elem,index)=>(
                        <div className="col-md-4 col-12 ">
                          <div className="form-group">
                            <input className="form-check-input"  type="radio"/>
                            <label className="form-check-label dark-grey-text" value={elem}>{elem}</label>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                  <div className="row mt-3 mb-4">
                    <div className="col-md-12 text-center text-md-left text-md-right">
                      <button className="btn btn-primary btn-rounded" onClick={this.handleClick.bind(this)}>
                        <i className="fas fa-cart-plus mr-2" aria-hidden="true" ></i> Add to cart</button>
                    </div>
                  </div>
                </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

    )
  }
}

export default ProductDetails;


