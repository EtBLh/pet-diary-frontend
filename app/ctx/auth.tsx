import React, { useState } from 'react';
import { useEffect } from 'react';
import { useStorageState } from './useStorageState';

export interface TAuth{
  signIn: (userid:string, petid:string) => void,
  signOut: () => void,
  userid: null | String,
  petid: null | String,
  UisLoading: Boolean,
  PisLoading: Boolean,
  validated: Boolean
}

const AuthContext = React.createContext<TAuth>({
    signIn: (userid, petid) => null,
    signOut: () => null,
    userid: null, // null | string
    petid: null, // null | string
    UisLoading: false,
    PisLoading: false,
    validated: false
});

// This hook can be used to access the user info.
export function useAuth() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useAuth must be wrapped in a <AuthProvider />');
    }
  }

  return value;
}

const validateLogIn = (userid:(string|null), petid:(string|null)) => {
  //TODO
  return userid !== null && petid !== null;
}

export function AuthProvider(props: React.PropsWithChildren) {
  const [[UisLoading, userid], setUserid] = useStorageState('userid');
  const [[PisLoading, petid], setPetid] = useStorageState('petid');

  const [validated, setValidated] = useState(false);

  useEffect(() => {
    setValidated(validateLogIn(userid, petid))
  }, [userid, petid])

  return (
    <AuthContext.Provider
      value={{
        signIn: (userid, petid) => {
            setUserid(userid)
            setPetid(petid)
        },
        signOut: () => {
            setUserid(null)
            setPetid(null)
        },
        userid, petid,
        UisLoading, PisLoading, 
        validated: validated
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}
