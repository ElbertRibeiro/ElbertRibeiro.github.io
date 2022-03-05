import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {Home} from '../view/home';
import {Resume} from '../view/resume';
import {English} from '../view/english';

export const Routers = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/english" component={English} />
    </Switch>
  </BrowserRouter>
);
