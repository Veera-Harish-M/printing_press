import React, { Component } from 'react'
import logo from './images/logos.png'
import './css/login.css'
import './css/font-awesome.min.css'
import fire from '../config/fire'
import { withRouter } from "react-router-dom";

 class login extends Component {
  constructor(props)
  {
    super(props)
    this.login=this.login.bind(this)
    this.handleChange=this.handleChange.bind(this)
    this.state={
      email : "",
      password : ""
    }
  }
 
  login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
      console.log(u);
      this.props.history.push("/");
      
    }).catch((err)=>{
      alert("invalid Credentials")
      console.log(err);
      
    })
  }


handleChange(e){
  this.setState({
    [e.target.name]:e.target.value
  })
}



forget(){
  var auth = fire.auth();
  var emailAddress = prompt('Enter your email');
  if(emailAddress==="")
  {
    alert('Inavalid email')
  }else{
    auth.sendPasswordResetEmail(emailAddress).then(function() {
      alert('email sent')
      }).catch(function(error) {
        alert('Something went wrong')
    });
  }
  
}

  render() {  
      return (
        
    <div style={{paddingTop:'0rem !important',marginTop:'0px !important'}}>
    <title>Rani Printers</title>
    
    <section className="main">
      <div className="layer">
        
        <div className="content-w3ls">
          <div className="text-center icon">
            <span>
              <img src={logo} alt="Logo"/>
            </span>
          </div>
          <div className="content-bottom">
            <form action="#" method="post">
              <div className="field-group">
                <span className="fa fa-user" aria-hidden="true" />
                <div className="wthree-field">
  
                <input  
                name="email"
                id="email" 
                type="email" 
                placeholder="Email"
                onChange={this.handleChange} 
                value={this.state.email}
                required/>
  
                </div>
              </div>
              <div className="field-group">
                <span className="fa fa-lock" aria-hidden="true" />
                <div className="wthree-field">
                
                <input 
                name="password"
                id="myInput" 
                type="Password" 
                placeholder="Password"
                onChange={this.handleChange} 
                value={this.state.password}
                
                required/>
                
                </div>
              </div>
              <div className="wthree-field">
                
                <button onClick={this.login} type="submit" className="btn">
                  Get Started
                </button>
              </div>
              <ul className="list-login">
                <li className="switch-agileits">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" 
                    defaultChecked/>
                    keep Logged in
                  </label>
                </li>
                <li>
                  <p style={{cursor:'pointer'}} onClick={this.forget} className="text-right">
                    forgot password?
                  </p>
                </li>
                <li className="clearfix" />
              </ul>
              <ul className="list-login-bottom">
                <li className>
                  <a href="/register" className>
                    Create Account
                  </a>
                </li>
                <li className>
                  <a href="/contact" className="text-right">
                    Need Help?
                  </a>
                </li>
                <li className="clearfix" />
              </ul>
            </form>
          </div>
        </div>
        <div   className="bottom-grid1">
          <div  className="links">
            <ul className="links-unordered-list">
              <li >
                <a href="/about" >
                  About Us
                </a>
              </li>
              <li >
                <a href="/about" >
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>
          <div  className="copyright">
            <p>Designed By YOUR Groupname</p>
          </div>
        </div>
      </div>
    </section>
  </div>
            )
    }
}
export default withRouter(login);