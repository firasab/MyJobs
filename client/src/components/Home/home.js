import React, { Component } from "react";
import { connect } from "react-redux";



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
        <>
           
        <h1 style={{ backgroundImage: `url("https://64.media.tumblr.com/d3831c7f0d93431f8aabad0f115f31e1/tumblr_mqk8ymJnbW1s6xnw7o1_500.gifv")`,  display: 'flex', justifyContent:'center', alignItems:'center',  height: '40vh', color:'white' }} >All The Power </h1>
        <h2 style={{   display: 'flex', justifyContent:'center', alignItems:'center'}} > All the power is a An employment agency its located in Jerusalem - Salah El Din Street</h2>
        <h2 style={{   display: 'flex', justifyContent:'center', alignItems:'center' }} > MyJobs aim is to present  jobs that All The Power has</h2>
        <h2  style={{   display: 'flex', justifyContent:'center', alignItems:'center' }}>By This website the agency can manage all the jobs, workers and the companies</h2>
        <h3  style={{   display: 'flex', justifyContent:'center', alignItems:'center' }}>We hope you find this website usefull!</h3>
        </>
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
