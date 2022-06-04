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
import companyProfile from "./components/showCompany/companyProfile";
import workerProfile from "./components/showWorker/workerProfile";
import workerCreation from "./components/createWorker/workerCreation";
import companyCreation from "./components/createCompany/companyCreation";
import jobCreation from "./components/createJob/jobCreation";
import workerEdition from "./components/editWorker/workerEdition";
import jobFormCreation from "./components/createJob/jobFormCreation";
import jobForm from "./components/jobForm";
import companyEdition from "./components/editCompany/companyEdittion";
import jobEdition from "./components/editJob/jobEdition";
import jobProfile from "./components/showJob/jobProfile";
import schedule from "./components/schedule";
import scheduleEdition from "./components/schedule/scheduleEdition";
import ContactForm from "./components/sendForm/ContactForm";
import ContactFormation from "./components/sendForm/ContactFormation";
import ContactFormRef from "./components/sendForm2/ContactForm";
import ContactFormationRef from "./components/sendForm2/ContactFormation";
import user from "./components/user";


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
          <AuthRoute path="/companyProfile" component={companyProfile} />
          <AuthRoute path="/workerProfile" component={workerProfile} />
          <AuthRoute path="/workerCreation" component={workerCreation} />
          <AuthRoute path="/companyCreation" component={companyCreation} />
          <AuthRoute path="/jobCreation" component={jobCreation} />
          <AuthRoute path="/workerEdition" component={workerEdition} />
          <GuestRoute path="/jobFormCreation" component={jobFormCreation} />
          <AuthRoute path="/jobForm" component={jobForm} />
          <AuthRoute path="/companyEdition" component={companyEdition} />
          <AuthRoute path="/jobEdition" component={jobEdition} />
          <AuthRoute path="/jobProfile" component={jobProfile} />
          <AuthRoute path="/schedule" component={schedule} />
          <AuthRoute path="/scheduleEdition" component={scheduleEdition} />
          <AuthRoute path="/ContactForm" component={ContactForm} />
          <AuthRoute path="/ContactFormation" component={ContactFormation} />
          <AuthRoute path="/ContactFormRef" component={ContactFormRef} />
          <AuthRoute path="/ContactFormationRef" component={ContactFormationRef} />
          <AuthRoute path="/user" component={user} />
        </div>
        <Route path="/" exact component={Home} />
      </Layout>
    </Router>
  );
}

export default App;
