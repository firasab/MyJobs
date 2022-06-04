import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

//navbar
function Layout(props) {
  const handleLogout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    props.logout();
  };
  const [pathname, setPathname] = useState('/');
  const checkActive = (match, location) => {
    if (!location) return false;
    setPathname(location.pathname);
    return pathname === "/" ? false : pathname === "/";
  }
  return (
    
    <div >
      <div className="navbar  navbar-expand-lg  navbar-dark" style={{ backgroundColor: 'black'}}>
        <NavLink to="/" className="navbar-brand"> <img src="https://i.imgur.com/Hj7DX5d.png"  style={{ height: '50px', width: '50px' }} alt="codeclouds logo" />MyJobs</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >

          {props.loggedIn ? (
            <Fragment >
              <ul className="navbar-nav mr-auto">
              <li className={"nav-item " + (pathname === '/worker' ? 'active' : '')}>
                  <NavLink isActive={checkActive} to="/worker" className="nav-link">Workers</NavLink>
                </li>
                <li className={"nav-item " + (pathname === '/job' ? 'active' : '')} >
                  <NavLink isActive={checkActive} to="/job" className="nav-link">Jobs</NavLink>
                </li>
                <li className={"nav-item " + (pathname === '/company' ? 'active' : '')}>
                  <NavLink isActive={checkActive} to="/company" className="nav-link">Companies</NavLink>
                </li>
                <li className={"nav-item " + (pathname === '/schedule' ? 'active' : '')}>
                  <NavLink isActive={checkActive} to="/schedule" className="nav-link">Create Weekly Schedule</NavLink>
                </li>
                <li className={"nav-item " + (pathname === '/jobForm' ? 'active' : '')}>
                  <NavLink isActive={checkActive} to="/jobForm" className="nav-link">Check Jobs Forms</NavLink>
                </li>
                <li className={"nav-item " + (pathname === '/register' ? 'active' : '')}>
                  <NavLink isActive={checkActive} to="/user" className="nav-link">Admins</NavLink>
                </li>
                { }
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className={"nav-item " + (pathname === '/logout' ? 'active' : '')}>
                  <NavLink isActive={checkActive}
                    className="nav-link"
                    to="/logout"
                    onClick={handleLogout}
                  >
                    Logout
                  </NavLink>
                </li>
             
              </ul>
            </Fragment>
          ) : (
              <Fragment>
                <ul className="navbar-nav ml-auto">
                  <li className={"nav-item " + (pathname === '/view' ? 'active' : '')}>
                    <NavLink isActive={checkActive} to="/view" className="nav-link">Jobs</NavLink>
                  </li>
                  <li className={"nav-item " + (pathname === '/about' ? 'active' : '')}>
                    <NavLink isActive={checkActive} to="/about" className="nav-link">About Us</NavLink>
                  </li>
                  <li className={"nav-item " + (pathname === '/login' ? 'active' : '')}>
                    <NavLink isActive={checkActive} to="/login" className="nav-link">Login</NavLink>
                  </li>
                </ul>
              </Fragment>
            )}


        </div>
      </div>
      {props.children}
    </div >
  );
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch({ type: "SET_LOGOUT" })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);






