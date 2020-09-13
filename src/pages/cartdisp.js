import React, { Component } from "react";
import Cart from "./Cart";
import { Card, Row, Col } from "react-bootstrap";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

export default class cartdisp extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      tax: 0,
      ship: 0,
      cartitems: JSON.parse(localStorage.getItem("cart")),
    };
  }

  componentDidMount() {
    var products = this.state.cartitems;
    var tot = this.state.total;
    if (products.length !== 0) {
      for (var i = 0; i < products.length; i++) {
        tot = tot + products[i].price * products[i].qty;
      }
      this.setState({ total: tot });
      this.setState({ tax: (15 * tot) / 100 });
      this.setState({ ship: (10 * tot) / 100 });
    } else {
      this.setState({ totol: 0 });
      this.setState({ tax: 0 });
      this.setState({ ship: 0 });
    }
  }

  render() {
    return (
      <div>
        <Hero hero="productsHero">
          <Banner
            title="RANI PRINTERS"
            subtitle="--- THE RIGHT PARTNER YOUR PRINTING NEEDS ---"
          ></Banner>
        </Hero>
        <Card style={{ margin: "1rem" }}>
          <table className="table">
            <Row
              style={{
                backgroundColor: "#b9b8b854",
                margin: "1rem",
                padding: "1rem",
              }}
            >
              <Col md={2}></Col>
              <Col md={6}>Product</Col>
              <Col>Price</Col>
              <Col>Quantity</Col>
              <Col>Remove</Col>
            </Row>
            <tbody>
              <Cart />
            </tbody>
          </table>
        </Card>
        <Row>
          <Col md={6}></Col>
          <Col md={5}>
            <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
              Order summary{" "}
            </div>
            <div className="p-4">
              <ul className="list-unstyled mb-4">
                <li className="d-flex justify-content-between py-3 border-bottom">
                  <strong className="text-muted">Order Subtotal </strong>
                  <strong>₹{this.state.total}</strong>
                </li>
                <li className="d-flex justify-content-between py-3 border-bottom">
                  <strong className="text-muted">
                    Shipping and handling(10%)
                  </strong>
                  <strong>₹{this.state.ship}</strong>
                </li>
                <li className="d-flex justify-content-between py-3 border-bottom">
                  <strong className="text-muted">Tax(15%)</strong>
                  <strong>₹{this.state.tax}</strong>
                </li>
                <li className="d-flex justify-content-between py-3 border-bottom">
                  <strong className="text-muted">Total</strong>
                  <h5 className="font-weight-bold">
                    ₹{this.state.total + this.state.tax + this.state.ship}
                  </h5>
                </li>
              </ul>
              <a
                href="/payment"
                className="btn btn-dark rounded-pill py-2 btn-block"
              >
                Procceed to checkout
              </a>
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
      </div>
    );
  }
}
