import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {rootMainPath} from './paths';
import MainContainer from '../containers/MainContainer';

const AppRoutes = () => {
  return (
    <Switch>
      <Route
        path='/'
        exact
        render={() => (localStorage.token ? <Redirect to={rootMainPath} /> : <Redirect to={rootAuthPath} />)}
      />
      <Route path={rootMainPath} component={MainContainer} />
    </Switch>
  );
};

export default AppRoutes;
