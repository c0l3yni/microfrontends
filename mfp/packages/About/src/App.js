import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import AboutApp from './components/AboutApp';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ab',
});

const history = createBrowserHistory();

export default () => {
  const [isAboutUs, setIsAboutUs] = useState(false);

  useEffect(() => {
    if (isAboutUs) {
      history.push('/dashboard');
    }
  }, [isAboutUs]);

  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/aboutus">
              <AboutApp onAbout={onAbout} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
