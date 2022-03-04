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
import profileCompany from "./components/showCompany/profileCompany";
import workSchedule from "./components/workSchedule";
import profileWorker from "./components/showWorker/profileWorker";
import workerCreation from "./components/createWorker/workerCreation";
import companyCreation from "./components/createCompany/companyCreation";
import jobCreation from "./components/createJob/jobCreation";
import workerEdition from "./components/editWorker/workerEdition";
import jobFormCreation from "./components/createJob/jobFormCreation";
import jobForm from "./components/jobForm";
import companyEdition from "./components/editCompany/companyEdittion";
import jobEdition from "./components/editJob/jobEdition";


function App() {
  return (
    <Router>
      <Layout>
        <div>
          <GuestRoute path="/login" component={Login} />
          <AuthRoute path="/register" component={Register} />
          <AuthRoute path="/home" component={Home} />
          <GuestRoute path="/about" component={About} />
          <AuthRoute path="/worker" component={worker} />
          <AuthRoute path="/job" component={job} />
          <GuestRoute path="/view" component={view} />
          <AuthRoute path="/company" component={company} />
          <AuthRoute path="/profileCompany" component={profileCompany} />
          <AuthRoute path="/workSchedule" component={workSchedule} />
          <AuthRoute path="/profileWorker" component={profileWorker} />
          <AuthRoute path="/workerCreation" component={workerCreation} />
          <AuthRoute path="/companyCreation" component={companyCreation} />
          <AuthRoute path="/jobCreation" component={jobCreation} />
          <AuthRoute path="/workerEdition" component={workerEdition} />
          <GuestRoute path="/jobFormCreation" component={jobFormCreation} />
          <AuthRoute path="/jobForm" component={jobForm} />
          <AuthRoute path="/companyEdition" component={companyEdition} />
          <AuthRoute path="/jobEdition" component={jobEdition} />
        </div>
        <Route path="/" exact component={Home} />
      </Layout>
    </Router>
  );
}

export default App;
