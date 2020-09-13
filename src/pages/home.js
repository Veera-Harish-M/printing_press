import React, { Component } from "react";
import "./css/home.css";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {
  Image,
  Col,
  Row,
  Jumbotron,
  CardDeck,
  Button,
  Form,
} from "react-bootstrap";
import Services from "../components/Services";
import { Link } from "react-router-dom";
import Vibrant from "./images/vibrant.png";
import Context from "../context";
import { Parallax } from "react-parallax";
class home extends Component {
  render() {
    return (
      <div style={{ overflow: "hidden" }}>
        <Hero hero="roomsHero">
          <Banner
            title="RANI PRINTERS"
            subtitle="--- THE RIGHT PARTNER YOUR PRINTING NEEDS ---"
          ></Banner>
        </Hero>

        <Jumbotron style={{ background: "white" }}>
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              <div className="Trending">
                <span>
                  <h1 className="hTrending">Trending</h1>
                </span>
              </div>

              <div className="TRENDING">
                <span>
                  <h6 className="h6Trending">
                    <b>TRENDING</b>
                  </h6>
                </span>
              </div>
            </Col>
            <Col md={3}></Col>
          </Row>
          <Row>
            <Col md={1}></Col>
            <Col md={10}>
              <CardDeck>
                <Context ctype="trendingproduct" />
              </CardDeck>
            </Col>
            <Col md={1}></Col>
          </Row>
        </Jumbotron>

        <Jumbotron style={{ textAlign: "center" }}>
          <Row style={{ paddingBottom: "3rem" }}>
            <Col md={3}></Col>
            <Col md={6}>
              <div className="Trending">
                <span>
                  <h1 className="hTrending">Category</h1>
                </span>
              </div>

              <div className="TRENDING">
                <span>
                  <h6 className="h6Trending">
                    <b>SHOP BY CATEGORY</b>
                  </h6>
                </span>
              </div>
            </Col>
            <Col md={3}></Col>
          </Row>
          <Button variant="primary">
            <Link style={{ color: "white" }} to={"/category/printproducts"}>
              Calender
            </Link>
          </Button>{" "}
          <Button variant="dark">
            <Link style={{ color: "white" }} to={"/category/invitation"}>
              Weading Cards
            </Link>
          </Button>{" "}
          <Button variant="success">
            <Link style={{ color: "white" }} to={"/category/visitingcard"}>
              Visiting Card
            </Link>
          </Button>{" "}
          <Button variant="warning">
            <Link style={{ color: "white" }} to={"/category/gifts"}>
              Gifts Cards
            </Link>
          </Button>{" "}
          <Button variant="danger">
            <Link style={{ color: "white" }} to={"/category/banner"}>
              Banners
            </Link>
          </Button>{" "}
          <Button variant="info">
            <Link style={{ color: "white" }} to={"/category/diary"}>
              Diary
            </Link>
          </Button>{" "}
        </Jumbotron>

        <Jumbotron>
          <Jumbotron className="jumback">
            <Parallax bgImage={require("./images/Invite.jpg")} strength={500}>
              <Row>
                <Col md={1}></Col>
                <Col md={6}>
                  <h1 className="hinfo">
                    Rani <br />
                    Printers
                  </h1>
                  <h3 className="pinfo">
                    We redefine printing by bringing web-2-print technologies in
                    India. It will offer most convenient, economical and
                    friendly way to order Business printing. We offer the best
                    online photo printing service in India. We have 40 years of
                    experience in printing services
                  </h3>
                </Col>

                <Col md={5}></Col>
              </Row>
            </Parallax>
          </Jumbotron>

          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              <div className="Trending">
                <span>
                  <h1 className="hTrending">Services</h1>
                </span>
              </div>

              <div className="TRENDING">
                <span>
                  <h6 className="h6Trending">
                    <b>SERVICES</b>
                  </h6>
                </span>
              </div>
            </Col>
            <Col md={3}></Col>
          </Row>
          <Services />

          <Image src={Vibrant} alt="alternate" />
        </Jumbotron>

        <Row style={{ paddingBottom: "3rem" }}>
          <Col md={3}></Col>
          <Col md={6}>
            <div className="Trending">
              <span>
                <h1 className="hTrending">Subscribe </h1>
              </span>
            </div>

            <div className="TRENDING">
              <span>
                <h6 className="h6Trending">
                  <b>SUBSCRIBE TO OUR NEWSLETTER</b>
                </h6>
              </span>
            </div>
          </Col>
          <Col md={3}></Col>
        </Row>

        <Row style={{ paddingBottom: "5rem" }}>
          <Col md={2}></Col>
          <Col md={6}>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Enter your email"
            />
          </Col>
          <Col md={2}>
            <Button size="lg" variant="dark">
              Subscribe
            </Button>
          </Col>
          <Col md={2}></Col>
        </Row>
      </div>
    );
  }
}
export default home;
