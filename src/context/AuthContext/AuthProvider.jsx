import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider()



    // login via google--------------

    const googleUser = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }



    // create user---------------

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user---------------

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update user profile--------------------

    const updateUser = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }

    // sign out user-----------------

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    // set observer----------------

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)

            
              
            


            // console.log('user in the auth state change', currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])





    const authInfo = {
        loading,
        user,
        createUser,
        loginUser,
        updateUser,
        googleUser,
        signOutUser,
    }


    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;