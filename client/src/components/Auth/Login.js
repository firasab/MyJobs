import React, { Component } from "react";
import { connect } from "react-redux";
import axios from 'axios';
import { NotificationContainer } from 'react-notifications';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", errors: {} };
  }
  handleForm = e => {
    e.preventDefault();
    if (this.state.email === '' || this.state.password === '') {
      alert("please fill the required fields");
      return false;
    }
    const data = { email: this.state.email, password: this.state.password };
    axios
      .post("https://myjobss.herokuapp.com/api/users/login", data)
      .then(result => {
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("user", JSON.stringify(result.data.user));
        this.props.setLogin(JSON.stringify(result.data.user));
        alert(result.data.msg);
        this.props.history.push("/home");
      })
      .catch(err => {
        if (err.response && err.response.status === 404)
         alert(err.response.data.msg);
        else
        alert("Something went wrong!");
        this.setState({ errors: err.response })
      });
  };
  handleInput = e => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="content">
        <NotificationContainer />
        <form onSubmit={this.handleForm}>
          <div className="row" style={{ marginTop: 150 }}>
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <div className="card">
              <img src="https://i.imgur.com/kI8pQ2D.png"  alt="LOGIN-LOGO" width="300" height="300" style= {{  display: 'block', marginLeft: 'auto' , marginRight: 'auto' }} />
                <div className="card-body">
                  <div className="form-group">
                    <label >Email address</label>
                    <input type="email" name="email" onChange={this.handleInput} className="form-control" placeholder="Enter email" />
                  </div>
                  <div className="form-group">
                    <label >Password</label>
                    <input type="password" name="password" onChange={this.handleInput} className="form-control" placeholder="Enter Password" />
                  </div>
                </div>
                <div className="card-footer text-center"> <button type="submit" className="btn btn-primary text-center">Login</button></div>
              </div>
            </div>
            <div className="col-sm-2"></div>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLogin: user => dispatch({ type: "SET_LOGIN", payload: user })
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Login);
