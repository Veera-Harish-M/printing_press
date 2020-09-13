import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Image, Jumbotron, Row, Col, Figure, Carousel} from 'react-bootstrap';
import ChairPerson from './images/chairperson.png';
import './css/about.css';
import Services from '../components/Services';
import Prod from './images/ourproducts.jpg';

import Cro1 from './images/cro.jpg';
import Cro2 from './images/cro1.jpg';
import Cro3 from './images/cro2.jpg';
import Cro4 from './images/cro3.jpeg';
import Cro5 from './images/cro4.jpg';

function about () {
  return (
    <div>
      <Hero hero="productsHero">
        <Banner
          title="RANI PRINTERS"
          subtitle="--- THE RIGHT PARTNER YOUR PRINTING NEEDS ---"
        />
      </Hero>

      <Jumbotron style={{backgroundColor: 'white'}}>
        <Row>
          <Col md={3} />
          <Col md={6} style={{padding: '2rem', marginBottom: '3rem'}}>
            <div className="Trending">
              <span><h1 className="hTrending">About Us</h1></span>
            </div>

            <div className="TRENDING">
              <span><h6 className="h6Trending"><b>ABOUT US</b></h6></span>
            </div>
          </Col>
          <Col md={3} />
        </Row>
        <Jumbotron style={{padding: '0px', marginBottom: '0px'}}>
          <Row>
            <Col style={{padding: '30px'}} md={1} />
            <Col
              md={5}
              style={{
                paddingLeft: '1rem',
                padding: '2rem',
                paddingTop: '9rem',
                wordSpacing: '1px',
                textAlign: 'center',
              }}
            >
              <h3 className="fontchng">
                We redefine printing by bringing web-2-print technologies in India. It will offer most convenient, economical and friendly way to order Business printing. We offer the best online photo printing service in India. We have 40 years of experience in printing services
              </h3>
            </Col>
            <Col md={1} style={{backgroundColor: 'black'}} />
            <Col style={{padding: '30px', backgroundColor: 'black'}} md={1} />
            <Col style={{backgroundColor: 'black'}} md={4}>
              <Figure>
                <Figure.Image
                  style={{paddingTop: '30px'}}
                  src={ChairPerson}
                  height="400px"
                  width="280px"
                  alt="ChairPerson"
                />
                <Figure.Caption style={{textAlign: 'center'}}>
                  <h5>Mr.V.Natarajan<br />ChairPerson</h5>
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
        </Jumbotron>
      </Jumbotron>
      <Jumbotron>
        <Row>
          <Col md={3} />
          <Col md={6} style={{padding: '2rem', marginBottom: '3rem'}}>
            <div className="Trending">
              <span><h1 className="hTrending">Our Products</h1></span>
            </div>

            <div className="TRENDING">
              <span><h6 className="h6Trending"><b>OUR PRODUCTS</b></h6></span>
            </div>
          </Col>
          <Col md={3} />
        </Row>

        <Image src={Prod} alt="products" />
      </Jumbotron>

      <Jumbotron>
        <Row>
          <Col md={3} />
          <Col md={6}>
            <div className="Trending">
              <span><h1 className="hTrending">Services</h1></span>
            </div>

            <div className="TRENDING">
              <span><h6 className="h6Trending"><b>SERVICES</b></h6></span>
            </div>
          </Col>
          <Col md={3} />
        </Row>
        <Services />
      </Jumbotron>

      <Jumbotron>
        <Row style={{marginBottom: '3rem'}}>
          <Col md={3} />
          <Col md={6}>
            <div className="Trending">
              <span><h1 className="hTrending">Conditions</h1></span>
            </div>

            <div className="TRENDING">
              <span>
                <h6 className="h6Trending"><b>TERMS AND CONDITIONS</b></h6>
              </span>
            </div>
          </Col>
          <Col md={3} />
        </Row>
        <div style={{padding: '3rem', wordSpacing: '1px', lineHeight: '1.6'}}>
          <h4 style={{lineHeight: '2'}}>
            The customer who tends to buy our products should abide by our terms and conditions given below
          </h4>
          <div style={{padding: '3rem'}}>
            <h4 style={{lineHeight: '2', color: 'blue'}}>1.	Order</h4>
            <h5 style={{textIndent: '5%', lineHeight: '1.6'}}>
              Ordering any product from us should be clear and to the point,once all the customization is done there will be no cancellation.
            </h5>
            <h4 style={{lineHeight: '2', color: 'blue'}}>2.	Customization</h4>
            <h5 style={{textIndent: '5%', lineHeight: '1.6'}}>
              {' '}Customization of products can vary their final price amount.
            </h5>

            <h4 style={{lineHeight: '2', color: 'blue'}}>
              3.	Cancellation policy
            </h4>
            <h5 style={{textIndent: '5%', lineHeight: '1.6'}}>
              Once ordered,the cancellation is not entertained,but still if you want to cancel your order the refund amount varies according to the product, quantity and the price.
              {' '}
            </h5>
            <h4 style={{lineHeight: '2', color: 'blue'}}>4.	Delivery</h4>
            <h5 style={{textIndent: '5%', lineHeight: '1.6'}}>
              {' '}
              The order purchased by the customer will reach them within 7-10 business working days from the date of purchase.
            </h5>
          </div>
        </div>

        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={Cro1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Cro3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Cro4} alt="Fourth slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img src={Cro2} alt="second slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img src={Cro5} alt="Fifth slide" />

          </Carousel.Item>
        </Carousel>
      </Jumbotron>

      <Jumbotron style={{backgroundColor: 'white'}}>
        <Row style={{marginBottom: '3rem'}}>
          <Col md={3} />
          <Col md={6}>
            <div className="Trending">
              <span><h1 className="hTrending">Reach Us</h1></span>
            </div>

            <div className="TRENDING">
              <span><h6 className="h6Trending"><b>REACH US</b></h6></span>
            </div>
          </Col>
          <Col md={3} />
        </Row>

        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31493.11748196734!2d78.83069173501573!3d9.365117356905111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b019801ad2eaaa1%3A0xb04a8cd190937026!2sRamanathapuram%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1588967456719!5m2!1sen!2sin"
          width="100%"
          height="450"
          frameborder="0"
          style={{border: '0'}}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        />
      </Jumbotron>
    </div>
  );
}

export default about;
