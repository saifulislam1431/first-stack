import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';



export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user , setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const newUser = (email , password) =>{
        return createUserWithEmailAndPassword(auth , email ,password);
    }
    const signUser = (email , password) =>{
        return signInWithEmailAndPassword(auth , email, password);
    }
    const forgetPassword = (email) =>{
        return sendPasswordResetEmail(auth , email);
    }
    const logOut =()=>{
        return signOut(auth);
    }
    const googleSignIn =()=>{
        return signInWithPopup(auth , googleProvider);
    }
    const githubSignIn =()=>{
        return signInWithPopup(auth , githubProvider);
    }
    

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currenUser =>{
            setUser(currenUser)
        })
        return()=>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        newUser,
        signUser,
        forgetPassword,
        logOut,
        googleSignIn,
        githubSignIn
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;