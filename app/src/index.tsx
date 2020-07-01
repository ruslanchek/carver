import React from 'react';
import { render } from 'react-dom';
import { MainScreen } from './components/screens/MainScreen';
import { initFirebaseApp } from './common/firebase';
import { AuthProvider } from './components/providers/AuthProvider';
import { Router, LocationProvider, createHistory } from '@reach/router';
import './index.css';
import { PATHS } from './common/paths';
import { NotFoundScreen } from './components/screens/NotFoundScreen';
import { AuthScreen } from './components/screens/AuthScreen';
import { EducatorsScreen } from './components/screens/EducatorsScreen';

initFirebaseApp();

if (module.hot) {
  module.hot.accept();
}

const app = document.getElementById('app');
const history = createHistory(window as any);

render(
  <LocationProvider history={history}>
    <AuthProvider>
      <Router>
        <NotFoundScreen default />
        <AuthScreen mode='signIn' path={PATHS.SIGN_IN} />
        <AuthScreen mode='signUp' path={PATHS.SIGN_UP} />
        <MainScreen path={PATHS.HOME} />
        <EducatorsScreen path={PATHS.EDUCATORS} />
      </Router>
    </AuthProvider>
  </LocationProvider>,
  app,
);
