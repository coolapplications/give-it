import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import List from './components/MyList/MyList';
import Home from './components/Home/Home';
import store from './redux/store';
import { Provider } from 'react-redux';

const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/mylist' component={List} />
        <Redirect from='/' to='/home' />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
