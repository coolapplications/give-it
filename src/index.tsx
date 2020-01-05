import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import List from './components/MyList/MyList';
import Search from './components/Search/Search';
import Product from './components/Product/Product';

const Root = (
  <BrowserRouter>
    <Search />
    <Switch>
      <Route path='/home' component={Product} />
      <Route path='/mylist' component={List} />
      <Redirect from='/' to='/home' />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(Root, document.getElementById('root'));
