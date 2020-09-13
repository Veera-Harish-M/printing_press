import React,{Component} from 'react'
import {Card,Button,Form,Container, Row,Col} from 'react-bootstrap'
import './css/register.css'
import fire from '../config/fire'
import { withRouter } from "react-router-dom";


class register extends Component {
    constructor(props)
    {
      super(props)
      this.handleChange=this.handleChange.bind(this)
      this.signup=this.signup.bind(this)
      this.state={
        email : "",
        password : "",
        confirmpassword: "",
        address:"",
        phone:""
      }
    }
     
  
handleChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  signup(e){
    e.preventDefault();
    if(this.state.password===this.state.confirmpassword)
    {
            fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
                console.log(u)
            }).catch((err)=>{
                console.log(err)
            })

            fire.database().ref('login').push({
                email : this.state.email,
                password : this.state.password,
                address:this.state.address,
                phone:this.state.phone
            });
            alert("Successfully Registered")
            this.props.history.push("/");
     
    }else{
        alert("Invalid Details")
    }
  }

    render(){
    return (
        <Container fluid className="bk">
            <Row>        
                
                <Col md={6}>   
                <Card border="primary" className="sty">
                <Card.Body>
                    <Card.Text>
                    <Card.Title>EXCITED TO COPE UP WITH U</Card.Title>
                        <Form>

                            <Form.Group>
                                <Form.Control size="sm" type="email"
                                placeholder="Enter email"
                                name="email" 
                                onChange={this.handleChange} 
                                value={this.state.email} required/>
                            </Form.Group>
                            
                            <Form.Group>
                                <Form.Control size="sm" type="password" 
                                name="password"
                                placeholder="Password"
                                onChange={this.handleChange} 
                                value={this.state.password} required/>
                            </Form.Group>
                            
                            <Form.Group>
                                <Form.Control size="sm" type="password" 
                                name="confirmpassword"
                                placeholder="Confirm Password" 
                                onChange={this.handleChange} 
                                value={this.state.confirmpassword}
                                required/>
                            </Form.Group>
                            

                            <Form.Group>
                                <Form.Control size="sm" type="text"
                                placeholder="Phone"
                                name="phone"
                                onChange={this.handleChange} 
                                value={this.state.phone}
                                required />
                            </Form.Group>
                            

                            <Form.Group>
                                <Form.Control size="sm" as="textarea" rows="3" 
                                placeholder="Address"
                                name="address"
                                onChange={this.handleChange} 
                                value={this.state.address}
                                required/>    
                            </Form.Group>

                            <Form.Group >
                                <Form.Check type="checkbox" label="I agree to Terms and Condition" required/>
                            </Form.Group>
                        </Form>
                    </Card.Text>
                <Button size="sm" onClick={this.signup} variant="primary">Join Us</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col md={3}></Col>
        <Col md={3}></Col>
        </Row>
</Container>
    
    )
}
}
export default withRouter(register)