import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import About from './components/About';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ab',
});

export default ({ onAbout }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/aboutus">
              <About onAbout={onAbout} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
