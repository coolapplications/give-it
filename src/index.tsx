import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Mylist from './components/Pages/MyList';
import Home from './components/Pages/Home';
import store from './redux/store';
import { Provider } from 'react-redux';

const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/MyList' component={Mylist} />
        <Redirect from='/' to='/home' />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
