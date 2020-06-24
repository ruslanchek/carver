import * as firebase from 'firebase/app';
import 'firebase/auth';

export const useAuth = () => {
  return {
    signUp: (email: string, password: string) => {
      return new Promise((resolve, reject) => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(resolve)
          .catch(error => {
            return reject(error);
          });
      });
    },

    signIn: (email: string, password: string) => {
      return new Promise((resolve, reject) => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(resolve)
          .catch(error => {
            return reject(error);
          });
      });
    },
  };
};
