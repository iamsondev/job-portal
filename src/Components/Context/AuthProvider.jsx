import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../Pages/firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const AuthProvider = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();

  const SignInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const SignInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signOutUser = ()=> {
    setLoading(true);
    return signOut(auth)
  }

  useEffect(()=> {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
      console.log('user in the auth state change', currentUser)
    })
    return()=> {
      unSubscribe();
    }
  },[])

  const authInfo = {
    loading,
    user,
   createUser,
   SignInUser,
   signOutUser,
   SignInWithGoogle
  }
  return (
    <AuthContext value={authInfo}>
         {children}
    </AuthContext>
  );
};

export default AuthProvider;