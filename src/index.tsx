import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import MyGifts from './components/Pages/MyGifts';
import Home from './components/Pages/Home';
import store from './store';
import { Provider } from 'react-redux';
import LoginRedirect from './components/LoginRedirect/LoginRedirect';
import 'bootstrap/dist/css/bootstrap.css';

const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/gifts' component={MyGifts} />
        <Route path='/login' component={LoginRedirect} />
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
