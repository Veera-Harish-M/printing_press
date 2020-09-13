import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class crecard extends Component {
  constructor() {
    super();
    this.proceed = this.proceed.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      username: "",
      cardNumber: "",
      cvv: "",
      expmonth: "",
      expyear: "",
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  proceed() {
    if (
      this.state.cardNumber !== "" &&
      this.state.cvv !== "" &&
      this.state.username !== "" &&
      this.state.expmonth !== "" &&
      this.state.expyear !== ""
    ) {
      this.props.history.push("/thanks");
    } else {
      alert("please fill out all details...");
    }
  }

  render() {
    return (
      <div>
        <div className="tab-content">
          <div id="nav-tab-card" className="tab-pane fade show active">
            <form>
              <div className="form-group">
                <label htmlFor="username">Full name (on the card)</label>
                <input
                  type="text"
                  name="username"
                  placeholder="name"
                  onChange={this.handleChange}
                  value={this.state.email}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="cardNumber">Card number</label>
                <div className="input-group">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Your card number"
                    className="form-control"
                    onChange={this.handleChange}
                    value={this.state.email}
                    required
                  />
                  <div className="input-group-append">
                    <span className="input-group-text text-muted">
                      <i className="fa fa-cc-visa mx-1" />
                      <i className="fa fa-cc-amex mx-1" />
                      <i className="fa fa-cc-mastercard mx-1" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-8">
                  <div className="form-group">
                    <label>
                      <span className="hidden-xs">Expiration</span>
                    </label>
                    <div className="input-group">
                      <input
                        type="number"
                        placeholder="MM"
                        name="expmonth"
                        onChange={this.handleChange}
                        value={this.state.email}
                        className="form-control"
                        required
                      />
                      <input
                        type="number"
                        placeholder="YY"
                        name="expyear"
                        onChange={this.handleChange}
                        value={this.state.email}
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group mb-4">
                    <label
                      data-toggle="tooltip"
                      title="Three-digits code on the back of your card"
                    >
                      CVV
                      <i className="fa fa-question-circle" />
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      required
                      onChange={this.handleChange}
                      value={this.state.email}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={this.proceed}
                className="subscribe btn btn-primary btn-block rounded-pill shadow-sm"
              >
                Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(crecard);
