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
import Worker from "./components/workers/Workers";
import Jobs from "./components/jobs/Jobs";
import Companies from "./components/companies/Companies";
import MakeSqed from "./components/makeSqed/MakeSqed";
import ManegeJobs from "./components/jobs/ManegeJobs";



function App() {
  return (
    <Router>
      <Layout>
        <div>
          <GuestRoute path="/login" component={Login} />
          <GuestRoute path="/register" component={Register} />
          <AuthRoute path="/home" component={Home} />
          <GuestRoute path="/about" component={About} />
          <AuthRoute path="/workers" component={Worker} />
          <GuestRoute path="/jobs" component={Jobs} />
          <AuthRoute path="/companies" component={Companies} />
          <AuthRoute path="/makeSqed" component={MakeSqed} />
          <AuthRoute path="/manegeJobs" component={ManegeJobs} />
        
  
          
        </div>
        <Route path="/" exact component={Home} />
      </Layout>
    </Router>
  );
}

export default App;
