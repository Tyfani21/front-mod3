import React from 'react';
import Header from './components/shared/header/header';
import Footer from './components/shared/footer/footer';
import './App.css';
import Home from './pages/home/Home';
import { Switch, Route } from 'react-router-dom';
import { Router } from 'react-router';

function App() {
  return (
    <div className='App'>
      <Router>
      <Header/>
      <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/add" component=""/>
      </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
