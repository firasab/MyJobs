import React from "react";
import { BrowserRouter as Router,Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Home from "./components/Home/home";
import About from "./components/Home/About";
import Register from "./components/Auth/Register";
import GuestRoute from "./components/GuestRoute";
import AuthRoute from "./components/AuthRoute";
import Layout from "./components/Layout";
import 'react-notifications/lib/notifications.css';
import worker from "./components/worker";
import job from "./components/job";
import view from "./components/view";
import company from "./components/company";
import workSchedule from "./components/workSchedule";



function App() {
  return (
    <Router>
      <Layout>
        <div>
          <GuestRoute path="/login" component={Login} />
          <GuestRoute path="/register" component={Register} />
          <AuthRoute path="/home" component={Home} />
          <GuestRoute path="/about" component={About} />
          <AuthRoute path="/worker" component={worker} />
          <AuthRoute path="/job" component={job} />
          <GuestRoute path="/view" component={view} />
          <AuthRoute path="/company" component={company} />
          <AuthRoute path="/workSchedule" component={workSchedule} />
        </div>
        <Route path="/" exact component={Home} />
      </Layout>
    </Router>
  );
}

export default App;
