import React, {useState} from 'react';
import {BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './Components/Header';

import Home from './Home';
import PizzaList from './Components/PizzaList';
import BurgarList from './Components/BurgarList';
import CartList from './Components/CartList';


const App = () =>{


  return (
    <>
      <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path='/' component={Home}  />
          
          
            <Route path='/pizza' component={PizzaList}   />
          
          
            <Route path='/burgar' component={BurgarList} />

            
            <Route path='/cart' component={CartList} />
            
          </Switch>
      </BrowserRouter>
    </>
  );
};

export default App