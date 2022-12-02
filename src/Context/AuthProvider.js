import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../Firebase/firebase.config'
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider()

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const signInWithGoogle = () => {

    return signInWithPopup(auth, googleProvider)
  }
  const signIn = (email, password) => {
setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
 

  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {

      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [])



  const authInfo = {
    createUser,
    signInWithGoogle,
    signIn,
    user,
    logOut,
    loading
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;