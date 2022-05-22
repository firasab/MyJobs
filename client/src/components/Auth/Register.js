import React, { Component } from "react";
import { NotificationContainer } from 'react-notifications';
import axios from 'axios';
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      errors: {}
    };
  }
  handleForm = e => {
    //check if password, confirme password and email are not empty
    e.preventDefault();
    if(this.state.password==='' || this.state.password_confirmation==='' || this.state.email==='' || this.state.name==='')
    {
      alert('Please Enter Name,Email Password And Confirm Password');
      window.location.reload(false);
    }
        //check if password and the confimation password are the same 
    else if(this.state.password!==this.state.password_confirmation)
    {
      alert('Your Password Not Matched ! Please Check your pasword and confirm password');
      window.location.reload(false);
    }

    


    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    };
    //post method to send the admin infromation to database
    axios
    .post("https://myjobss.herokuapp.com/api/users/register", data)
    .then(result => {
       //if the register is success move me to login page
      alert('new admin has been created!')
      window.location.replace('/home')
    })
    .catch(err => {
      if (err.response && err.response.status === 400){
        //if the register is failed  return there is error and return us to the register page
        alert(err.response.data.msg);
        window.location.reload(false);
      }
      else
      {
         //if the register is failed  return there is error and return us to the register page
         alert(err.response.data.msg);
        window.location.reload(false);
      }
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
                    <div className="row" style={{ marginTop: 20 }}>
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">
                            <div className="card">
                                <div className="card-header text-center">Add new Admin</div>
                                <div className="card-body">
                                <div className="form-group">
                                        <label >Name</label>
                                        <input type="text" required name="name" onChange={this.handleInput} className="form-control" placeholder="Enter email" />
                                    </div>

                                    <div className="form-group">
                                        <label >Email address</label>
                                        <input type="email" required name="email" onChange={this.handleInput} className="form-control" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label >Password</label>
                                        <input type="password" required name="password" onChange={this.handleInput} className="form-control" placeholder="Enter Password" />
                                    </div>
                                    <div className="form-group">
                                        <label >Confirm Password</label>
                                        <input type="password" required name="password_confirmation" onChange={this.handleInput} className="form-control" placeholder="Enter Password" />
                                    </div>
                                </div>
                                <div className="card-footer text-center"> <button type="submit" className="btn btn-primary text-center">Register</button></div>
                            </div>
                        </div>
                        <div className="col-sm-2"></div>
                    </div>

                </form>
            </div>
    );
  }
}


export default Register;

