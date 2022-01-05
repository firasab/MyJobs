import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';


class Home extends Component {
  constructor(props)
  {
    super(props)
   console.log(props)
  }
  render() {
    if (this.props.loggedIn) {
      return (
        <div className="container">
          <div className="card" >
            <div className="card-body" >
              <h5 className="card-title">Welcome {this.props.name}</h5> {/* get the admin name from database and put it in the props place*/ }
              <p className="card-text">Email :{this.props.email}</p>
              <p> Dear {this.props.name}, here you can mange myJobs workers, companies and Jobs </p>
              
            </div>
          </div>
        </div >
      )
    }
    else {
      return (
        <div style={{   margin: 'auto', width: '50%' } }> <h1  style={{ marginLeft: '260px'} }>Welcome To MyJobs </h1>
          <h2 style={{   margin: 'auto', width: '55%'}} >To open the login page click  <Link to="/login">Login</Link></h2>
          <h3 style={{   margin: 'auto', width: '60%'}} >You cant Login ? Please contact the maneger!</h3>
        </div >
      )
    }
  }
}

const mapStateToProps = state => {
  if (state.auth.loggedIn && state.auth.user) {
    let userData = JSON.parse(state.auth.user);
    return {
      name: userData.name,
      email: userData.email,
      loggedIn: state.auth.loggedIn
    };
  }
  else {
    return {};
  }
};
export default connect(
  mapStateToProps,
  null
)(Home);
