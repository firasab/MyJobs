import React, { Component } from "react";
import { connect } from "react-redux";
import axios from 'axios';
import { NotificationContainer} from 'react-notifications';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", errors: {} };
  }
  //check if email or passworf are empty
  handleForm = e => {
    e.preventDefault();
    if (this.state.email === '' || this.state.password === '') {
      alert('Email And Password Required!');
      window.location.reload(false);
    }
    //post method to get the admin information from the database
    const data = { email: this.state.email, password: this.state.password };
    axios
      .post("https://myjobs-finalproject.herokuapp.com//api/users/login", data)
      .then(result => {
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("user", JSON.stringify(result.data.user));
        this.props.setLogin(JSON.stringify(result.data.user));
        // send a notification when the login success and move us to the home page
        alert('You login successfully!');
        this.props.history.push("/home");
      })
      .catch(err => {
        if (err.response && err.response.status === 404){
            // send a notification when the login didnt success and move us to the login page
          alert('check your email end passwork!');
         window.location.reload(false);
        }else{
          // send a notification when the login didnt success and move us to the login page
          alert('Something Went Wrong!');
        window.location.reload(false);
        }
      });
  };
  handleInput = e => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };
  //the design of login page
  render() {
    return (
      <div className="content">
        <NotificationContainer />
        <form onSubmit={this.handleForm}>
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <div className="card">
              <img src="https://i.imgur.com/kI8pQ2D.png"  alt="LOGIN-LOGO" width="300" height="300" style= {{ marginLeft: '450px'}} />
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
