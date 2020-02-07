import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import MyGifts from "./components/Pages/MyGifts";
import Home from "./components/Pages/Home";
import store from "./store";
import { Provider } from "react-redux";

const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/gifts" component={MyGifts} />
        <Redirect from="/" to="/home" />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(Root, document.getElementById("root"));
