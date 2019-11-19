import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import createBrowserHistory from 'history/createBrowserHistory';
import {Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CatList from './components/CatList';
import ItemList from './components/ItemList';
import HeaderLink from './HeaderLink';
import CatlistAndForm from './components/CatlistAndForm';
const store = configureStore();
window.store = store;
//
render(
    <Provider store={store}>
        <Router history={createBrowserHistory()}>
            <Switch>
                <Route exact path='/' render={()=> <HeaderLink><HomePage /></HeaderLink>} />
                <Route path='/cats' render={()=><HeaderLink><CatList /></HeaderLink>} />
                <Route path='/somelist' render={()=><HeaderLink><ItemList /></HeaderLink>} />
                <Route path='/catlistandform' render={()=><HeaderLink><CatlistAndForm /></HeaderLink>} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('app')
);
