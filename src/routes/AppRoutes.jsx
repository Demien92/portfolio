import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {rootMainPath} from './paths';
import MainContainer from '../containers/MainContainer';

const AppRoutes = () => {
  return (
    <Switch>
      <Route path={rootMainPath} component={MainContainer} />
    </Switch>
  );
};

export default AppRoutes;
