
import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {HomePage} from './Components/HomePage';
import {AddNewContact} from './Components/AddNewContact';
import {ContactDetails} from './Components/ContactDetails';
 import {DeleteContact} from './Components/DeleteContact';

import {BrowserRouter, Route,Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className='container'>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/addNewContact' component={AddNewContact}/>
        <Route exact path='/contactDetails' component={ContactDetails}/>
        <Route path='/deleteContact' component={DeleteContact}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
