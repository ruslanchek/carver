import React from 'react';
import { render } from 'react-dom';
import { MainScreen } from './components/modules/main/MainScreen';
import { initFirebaseApp } from './common/firebase';
import { AuthProvider } from './components/modules/auth/AuthProvider';
import { Router, LocationProvider, createHistory } from '@reach/router';
import './index.css';
import { PATHS } from './common/paths';
import { NotFoundScreen } from './components/modules/not-found/NotFoundScreen';
import { AuthScreen } from './components/modules/auth/AuthScreen';
import { EducatorsScreen } from './components/modules/educators/EducatorsScreen';
import { CoursesScreen } from './components/modules/courses/CoursesScreen';
import { ProgressScreen } from './components/modules/progress/ProgressScreen';
import { ScheduleScreen } from './components/modules/schedule/ScheduleScreen';
import { SettingsScreen } from './components/modules/settings/SettingsScreen';
import { ExercisesScreen } from './components/modules/exercises/ExercisesScreen';
import { StudentsScreen } from './components/modules/students/StudentsScreen';

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
        <ScheduleScreen path={PATHS.SCHEDULE} />
        <StudentsScreen path={PATHS.STUDENTS} />
        <ProgressScreen path={PATHS.PROGRESS} />
        <EducatorsScreen path={PATHS.EDUCATORS} />
        <CoursesScreen path={PATHS.COURSES} />
        <ExercisesScreen path={PATHS.EXERCISES} />
        <SettingsScreen path={PATHS.SETTINGS} />
      </Router>
    </AuthProvider>
  </LocationProvider>,
  app,
);
