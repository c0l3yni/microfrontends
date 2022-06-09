import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import AboutUs from './components/AboutUs';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ab',
});

export default ({ history }) => {
  return (
    <div>
  <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/aboutus" component={AboutUs} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
