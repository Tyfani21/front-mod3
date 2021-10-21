import React from 'react';
import Header from './components/shared/header/header';
import Footer from './components/shared/footer/footer';
import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cadastro from './pages/cadastro/cadastro';
import Card from './components/structure/Card/card';
import Edicao from './pages/edicao/edicao';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header/>
      <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/cadastro" component={Cadastro}/>
          <Route path="/view/:id" component={Card}/>
          <Route path="/edit/:id" component={Edicao}/>
      </Switch>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
