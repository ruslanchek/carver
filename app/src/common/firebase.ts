import * as firebase from 'firebase/app';
import 'firebase/app';

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyA-FJcysPY4_pzJ-UClO8uhxhydoiWpZNU',
  authDomain: 'carver-cy.firebaseapp.com',
  databaseURL: 'https://carver-cy.firebaseio.com',
  projectId: 'carver-cy',
  storageBucket: 'carver-cy.appspot.com',
  messagingSenderId: '861011911024',
  appId: '1:861011911024:web:678328f08a0860350befb5',
  measurementId: 'G-F0F1HWL7GW',
};

let app: firebase.app.App;

export const initFirebaseApp = () => {
  if (!app) {
    app = firebase.initializeApp(FIREBASE_CONFIG);
  }
  return app;
};
