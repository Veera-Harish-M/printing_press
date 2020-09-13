import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import logo from './logos.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Fire from '../config/fire'


export default class Navigbar extends Component {

  constructor(){
    super();
    this.state={
      user:{}
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener()
  {
    Fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user})
      }else{
        this.setState({user:null})
      }
    })
  }

  logout(){
    var r = window.confirm("Are U sure! U Want to Logout");
    if (r === true) {
      Fire.auth().signOut();  
    } else {
      alert("Continue Shopping :) ")
}
    
  }

  
    render() {

        return (
      <><Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
<Navbar.Brand href="/">
      <img
        src={logo}
        width="40"
        height="40"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
      <Navbar.Brand href="/">Rani Printers</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/contact">Contacts</Nav.Link>
        <NavDropdown title="Our Products" >

          <NavDropdown.Item><Link to={'/category/printproducts'}>Calender</Link></NavDropdown.Item>
          <NavDropdown.Item><Link to={'/category/invitation'}>Weading Cards</Link></NavDropdown.Item>
          <NavDropdown.Item><Link to={'/category/visitingcard'}>Visiting Card</Link></NavDropdown.Item>
          <NavDropdown.Item><Link to={'/category/gifts'}>Gifts Cards</Link></NavDropdown.Item>
          <NavDropdown.Item><Link to={'/category/diary'}>Diary</Link></NavDropdown.Item>
          <NavDropdown.Item><Link to={'/category/banner'}>Banners</Link></NavDropdown.Item>
          
      </NavDropdown>
   
          </Nav>
        <Nav>
        <Nav.Link href="/about">About Us</Nav.Link>
          {this.state.user? <Nav.Link onClick={this.logout}>Logout</Nav.Link>:<Nav.Link href="/login">Login</Nav.Link>}
  
          <Nav.Link href="/cart">Cart</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

      </>
        )
    }
}
