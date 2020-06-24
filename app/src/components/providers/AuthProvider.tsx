import React, { FC, useState, createContext, useEffect } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';

export type TUser = Pick<
  firebase.User,
  'email' | 'displayName' | 'emailVerified' | 'photoURL' | 'phoneNumber' | 'isAnonymous' | 'uid' | 'providerData'
>;

interface AuthProviderContext {
  user?: TUser;
  appLoading: boolean;
}

export const AuthProviderContext = createContext<AuthProviderContext>({
  user: undefined,
  appLoading: true,
});

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<TUser | undefined>();
  const [appLoading, setAppLoading] = useState<boolean>(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const { displayName, email, emailVerified, phoneNumber, photoURL, isAnonymous, uid, providerData } = user;
        setUser({ displayName, email, emailVerified, phoneNumber, photoURL, isAnonymous, uid, providerData });
      } else {
        setUser(undefined);
      }
      setAppLoading(false);
    });
  }, []);

  return (
    <AuthProviderContext.Provider
      value={{
        appLoading,
        user,
      }}>
      {children}
    </AuthProviderContext.Provider>
  );
};
