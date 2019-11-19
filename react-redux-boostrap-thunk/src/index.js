import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureStore from './stores/index';
import createBrowserHistory from 'history/createBrowserHistory';
import {Router, Switch, Route } from 'react-router-dom';
import MainContainer from './scomponents/MainContainer';
import Aboutus from './containers/Abotus';
import Customer from './containers/Customer';
import Employee from './containers/Employees';
import Users from './containers/Users';

import client from './containers/GraphQL/GraphClient'
import GraphUsers from './containers/GraphQL/GraphUsers';
import { ApolloProvider } from "react-apollo";
import DatatablePage from './containers/TestMat';
const store = configureStore();
const Index = () => { 
  return <div>Hello React!</div>;
};
window.store = store;
render(

  <Provider store={store}>
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' render={()=> <MainContainer><Aboutus /></MainContainer>} />
            <Route path='/customers' render={()=><MainContainer><Customer /></MainContainer>} />
            <Route path='/employees' render={()=><MainContainer><Employee /></MainContainer>} />
            <Route path='/aboutus' render={()=><MainContainer><Aboutus /></MainContainer>} />
            <Route path='/users' render={()=><MainContainer><Users /></MainContainer>} />
            <Route path='/graph' render={()=><MainContainer><GraphUsers /></MainContainer>} />
        </Switch>
    </Router>
  </Provider>

, document.getElementById("index"));
