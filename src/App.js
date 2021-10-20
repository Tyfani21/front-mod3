import React from 'react';
import Header from './components/shared/header/header';
import Footer from './components/shared/footer/footer';
import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cadastro from './pages/cadastro/cadastro';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header/>
      <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/cadastro" component={Cadastro}/>
      </Switch>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
