import React, { Component } from 'react'
import './css/payment.css'
import Paypal from './paypal'
import Bank from './bank'
import Crecard from './crecard'

export default class payment extends Component {
    constructor(){
        super()
        this.toggle=this.toggle.bind(this);
        this.state={
          active1:"nav-link active rounded-pill",
          active2:"nav-link rounded-pill",
          active3:"nav-link rounded-pill",
          tog:<Crecard/>
        }
    } 

    toggle=(e,param)=>{
      e.preventDefault();
      console.log(param)
      if(param==="credit"){
        console.log("in")
        this.setState({tog:<Crecard/>})
        this.setState({active1:"nav-link active rounded-pill",active2:"nav-link rounded-pill",active3:"nav-link rounded-pill"})
      }
      else if(param==="paypal"){
        console.log("inpay")
        this.setState({tog:<Paypal/>})
        this.setState({active2:"nav-link active rounded-pill",active1:"nav-link rounded-pill",active3:"nav-link rounded-pill"})
      }
      else if(param==="bank"){
        console.log("nibank")
        this.setState({tog:<Bank/>})
        this.setState({active3:"nav-link active rounded-pill",active2:"nav-link rounded-pill",active1:"nav-link rounded-pill"})
      }
    }

    render() {
        
        return (
            <div className="container py-5">
            <div className="row">
              <div className="col-lg-7 mx-auto">
                <div className="bg-white rounded-lg shadow-sm p-5">
                  <ul role="tablist" className="nav bg-light nav-pills rounded-pill nav-fill mb-3">
                    <li onClick={(e)=>this.toggle(e,"credit")} className="nav-item">
                      <p data-toggle="pill"  className={this.state.active1}>
                        <i className="fa fa-credit-card" />
                        Credit Card
                      </p>
                    </li>
                    <li onClick={(e)=>this.toggle(e,"paypal")} className="nav-item">
                      <p data-toggle="pill"  className={this.state.active2}>
                        <i className="fa fa-paypal" />
                        Paypal
                      </p>
                    </li>
                    <li onClick={(e)=>this.toggle(e,"bank")} className="nav-item">
                      <p   className={this.state.active3}>
                        <i className="fa fa-university" />
                        Bank Transfer
                      </p>
                    </li>
                  </ul>

            {this.state.tog}

                </div>
              </div>
            </div>
          </div>
          
           
            )
    }
}
