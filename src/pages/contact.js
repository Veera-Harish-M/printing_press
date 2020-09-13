import React, { Component } from 'react'
import "./css/Contact.css"
import fire from '../config/fire'


class contact extends Component {
	constructor(){
		super()
		this.handleChange=this.handleChange.bind(this);
		this.sendmessage=this.sendmessage.bind(this);
		this.state={
			name:"",
			email:"",
			message:""
		}
	}

	  
handleChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  sendmessage(e){
	e.preventDefault();
	fire.database().ref('message').push({
		name:this.state.name,
		email : this.state.email,
		message:this.state.message
		
	});
	alert("Thank You For Your Message")

  }

	render(){
	return (
        <div className="here">
            <div class="container-contact100">
		<div class="contact100-map"></div>

		<div class="wrap-contact100">
			<form class="contact100-form validate-form">
				<span class="contact100-form-title">
					Contact Us
				</span>

				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input class="input100" type="text" 
							name="name" 
							placeholder="Full Name" 
							onChange={this.handleChange} 
        					value={this.state.name} required/>
					<span class="focus-input100-1"></span>
					<span class="focus-input100-2"></span>
				</div>

				<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<input class="input100" 
					type="text" 
					name="email" 
					placeholder="Email"
					onChange={this.handleChange} 
                    value={this.state.email} required
					/>
					<span class="focus-input100-1"></span>
					<span class="focus-input100-2"></span>
				</div>

				<div class="wrap-input100 validate-input" data-validate = "Message is required">
					<textarea class="input100" 
					name="message" 
					placeholder="Your Message"
					onChange={this.handleChange} 
                    value={this.state.message} required
					></textarea>
					<span class="focus-input100-1"></span>
					<span class="focus-input100-2"></span>
				</div>

				<div class="contact100-form-checkbox">
					<input class="input-checkbox100" id="ckb1" type="checkbox" name="copy-mail"/>
					<label class="label-checkbox100" for="ckb1">
					I agree to Terms and Condition
					</label>
				</div>

				<div class="container-contact100-form-btn">
					<button class="contact100-form-btn"
					onClick={this.sendmessage}>
						Send Message
					</button>
				</div>
			</form>
		</div>
	</div>

        </div>
    )
}
}
export default contact
