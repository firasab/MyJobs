import React, { Component } from "react";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import axios from 'axios';
class Add_worker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      id: "",
      location: "",
      phoneNumber: "",
      errors: {}
    };
  }
  handleForm = e => {
    e.preventDefault();
    if(this.state.password==='' || this.state.email==='' || this.state.name==='' || this.state.id==='' || this.state.location==='' || this.state.phoneNumber=== '')
    {
        NotificationManager.warning("Please Enter Name,Email, id, location, phone number and Password");
        return false;
    }
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      id: this.state.id,
      location: this.state.location,
      phoneNumber: this.state.phoneNumber
    };
    
    axios
    .post("http://localhost:9000/api/workers/add_worker", data)
    .then(result => {
      NotificationManager.success(result.data.msg);
   
    })
    .catch(err => {
      if (err.response && err.response.status === 400)
        NotificationManager.error(err.response.data.msg);
      else
        NotificationManager.error("Something Went Wrong");
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
                                <div className="card-header text-center">Add Worker</div>
                                <div className="card-body">
                                <div className="form-group">
                                        <label >Name</label>
                                        <input type="text" required name="name" onChange={this.handleInput} className="form-control" placeholder="Enter Name" />
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
                                        <label >ID</label>
                                        <input type="id" required name="id" onChange={this.handleInput} className="form-control" placeholder="Enter ID" />
                                    </div>
                                    <div className="form-group">
                                        <label >Location</label>
                                        <input type="location" required name="location" onChange={this.handleInput} className="form-control" placeholder="Enter Location" />
                                    </div>
                                    <div className="form-group">
                                        <label >Phone Number</label>
                                        <input type="phoneNumber" required name="phoneNumber" onChange={this.handleInput} className="form-control" placeholder="Enter Phone Number" />
                                    </div>
                                   
                                </div>
                                <div className="card-footer text-center"> <button type="submit" className="btn btn-primary text-center">Add Worker</button></div>
                            </div>
                        </div>
                        <div className="col-sm-2"></div>
                    </div>

                </form>
            </div>
    );
  }
}


export default Add_worker;

