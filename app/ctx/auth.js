import React from 'react';
import { useStorageState } from './useStorageState';

const AuthContext = React.createContext({
    signIn: (userid, petid) => null,
    signOut: () => null,
    userid: null, // null | string
    petid: null, // null | string
    UisLoading: false,
    PisLoading: false
});

// This hook can be used to access the user info.
export function useAuth() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function AuthProvider(props) {
  const [[UisLoading, userid], setUserid] = useStorageState('userid');
  const [[PisLoading, petid], setPetid] = useStorageState('petid');

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
        UisLoading, PisLoading
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}
