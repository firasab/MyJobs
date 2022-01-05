import { Route, Redirect } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

//to prevent the users who didnt login from seeing the rest of the pages
const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        rest.loggedIn ? (
          <Component  />
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  };
};
export default connect(mapStateToProps)(AuthRoute);
