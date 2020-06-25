import React, { FC, useState, createContext, useEffect } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { GlobalLoading } from '../common/GlobalLoading';
import { navigate, useLocation } from '@reach/router';
import { PATHS, PUBLIC_PATHS } from '../../common/paths';
import { useAsyncEffect } from '../../hooks/useAsyncEffect';

export type TUser = Pick<
  firebase.User,
  'email' | 'displayName' | 'emailVerified' | 'photoURL' | 'phoneNumber' | 'isAnonymous' | 'uid' | 'providerData'
>;

interface AuthProviderContext {
  user?: TUser;
  appLoading: boolean;
  signUp: (email: string, password: string) => void;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
}

export const AuthProviderContext = createContext<AuthProviderContext>({
  user: undefined,
  appLoading: true,
  signUp: () => {},
  signIn: () => {},
  signOut: () => {},
});

export const AuthProvider: FC = ({ children }) => {
  const { pathname } = useLocation();
  const [user, setUser] = useState<TUser | undefined>();
  const [appLoading, setAppLoading] = useState<boolean>(true);

  const redirectSuccessAuth = async () => {
    if (pathname !== PATHS.MAIN) {
      await navigate(PATHS.MAIN);
    }
  };

  const redirectUnauthorized = async () => {
    if (pathname !== PATHS.SIGN_IN) {
      await navigate(PATHS.SIGN_IN);
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (e) {}
    await redirectUnauthorized();
  };

  const signUp = (email: string, password: string) => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async () => {
          await redirectSuccessAuth();
          resolve();
        })
        .catch(error => {
          return reject(error);
        });
    });
  };

  const signIn = (email: string, password: string) => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(async () => {
          await redirectSuccessAuth();
          resolve();
        })
        .catch(error => {
          return reject(error);
        });
    });
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async data => {
      let user = undefined;
      if (data) {
        const { displayName, email, emailVerified, phoneNumber, photoURL, isAnonymous, uid, providerData } = data;
        user = {
          displayName,
          email,
          emailVerified,
          phoneNumber,
          photoURL,
          isAnonymous,
          uid,
          providerData,
        };
      }

      setAppLoading(false);
      setUser(user);
    });
  }, []);

  useAsyncEffect(async () => {
    if (user) {
      console.log('c1');

      if (PUBLIC_PATHS.includes(pathname)) {
        console.log('c1a');
        await redirectSuccessAuth();
      } else {
        console.log('c2b');
      }
    } else {
      console.log('c2');

      if (!PUBLIC_PATHS.includes(pathname)) {
        console.log('c2a');
        await redirectUnauthorized();
      } else {
        console.log('c2b');
      }
    }
  }, [pathname, appLoading, user]);

  return (
    <AuthProviderContext.Provider
      value={{
        appLoading,
        user,
        signUp,
        signIn,
        signOut,
      }}>
      {appLoading ? <GlobalLoading /> : children}
    </AuthProviderContext.Provider>
  );
};
