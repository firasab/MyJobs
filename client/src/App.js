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
import Add_worker from "./components/Auth/Add_worker";
import Delete_worker from "./components/Auth/Delete_worker";
import Update_worker from "./components/Auth/Update_worker";
import Add_company from "./components/Auth/Add_company";
import Delete_company from "./components/Auth/Delete_company";
import Update_company from "./components/Auth/Update_company";





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
          <AuthRoute path="/add_worker" component={Add_worker} />
          <AuthRoute path="/delete_worker" component={Delete_worker} />
          <AuthRoute path="/update_worker" component={Update_worker} />
          <AuthRoute path="/add_company" component={Add_company} />
          <AuthRoute path="/delete_company" component={Delete_company} />
          <AuthRoute path="/update_company" component={Update_company} />
        
  
          
        </div>
        <Route path="/" exact component={Home} />
      </Layout>
    </Router>
  );
}

export default App;
