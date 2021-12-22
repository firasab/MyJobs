import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Navbar from'./components/Navbar'
import Home from './pages/Jobs';
import About from './pages/About';
import Jobs from './pages/Jobs';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Switch>
    <Route path="/login" exact component={Login} />
    <Route path="/register" exact component={Register} />
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path='/' exact component={Home} />
    <Route path='/about'  component={About} />
    <Route path='/jobs'  component={Jobs} />
    </Switch>
    </BrowserRouter>
  
  )
}

export default App