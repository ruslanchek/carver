import React from 'react';
import { render } from 'react-dom';
import { MainScreen } from './components/screens/MainScreen';
import { initFirebaseApp } from './common/firebase';
import { AuthProvider } from './components/providers/AuthProvider';
import { GlobalLoading } from './components/common/GlobalLoading';
import { Router } from '@reach/router';
import './index.css';
import { PATHS } from './common/paths';
import { NotFoundScreen } from './components/screens/NotFoundScreen';
import { AuthScreen } from './components/screens/AuthScreen';

initFirebaseApp();

if (module.hot) {
  module.hot.accept();
}

const app = document.getElementById('app');
render(
  <AuthProvider>
    <Router>
      <NotFoundScreen default />
      <AuthScreen mode='signIn' path={PATHS.SIGN_IN} />
      <AuthScreen mode='signUp' path={PATHS.SIGN_UP} />
      <MainScreen path={PATHS.MAIN} />
    </Router>

    <GlobalLoading />
  </AuthProvider>,
  app,
);
