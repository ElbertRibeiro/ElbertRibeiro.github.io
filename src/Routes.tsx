import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from './pages/home';
import Resume from './pages/resume';
import English from './pages/english';

const Routes = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/english" component={English} />
    </Switch>
  </BrowserRouter>
);

export default Routes;