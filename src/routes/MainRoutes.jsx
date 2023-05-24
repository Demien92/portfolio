import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {rootMainPath, mainPath} from './paths';
import Examples from '../features/Examples';
import Dashboard from '../features/Dashboard';
import NotFound from '../shared/NotFound';
import Portfolio from "../features/Portfolio";

const MainRoutes = () => {

  return (
    <Switch>
      <Redirect from={rootMainPath} exact to={mainPath.portfolio.path} />
      <Route path={mainPath.dashboard.path} component={Dashboard} />
      <Route path={mainPath.examples.path} component={Examples} />
      <Route path={mainPath.portfolio.path} component={Portfolio} />
      <Route path='*' component={NotFound} />
    </Switch>
  );
};

export default MainRoutes;
