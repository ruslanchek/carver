import { useEffect, useState } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';

export type TUser = Pick<
  firebase.User,
  'email' | 'displayName' | 'emailVerified' | 'photoURL' | 'phoneNumber' | 'isAnonymous' | 'uid' | 'providerData'
>;

export const useUser = () => {
  const [user, setUser] = useState<TUser | undefined>();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const { displayName, email, emailVerified, phoneNumber, photoURL, isAnonymous, uid, providerData } = user;
        setUser({ displayName, email, emailVerified, phoneNumber, photoURL, isAnonymous, uid, providerData });
      } else {
        setUser(undefined);
      }
    });
  }, []);

  return user;
};
