import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../FirebaseSetup/Firebase.init';
export const authContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loader, setLoader] = useState(true)
    const provider = new GoogleAuthProvider();
    // ggogle user//

    const googleRegister = () => {
        setLoader(true)
        return signInWithPopup(auth, provider)

    }
    // create User//
    const registerUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

     // login User //

     const loginUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userLogout = () => {
        return signOut(auth)

    }

    useEffect(() => {
        const unsubscibe = onAuthStateChanged(auth, (currentUser) => {
            setuser(currentUser)
            setLoader(false)

        })
        return () => {
          return  unsubscibe()
        }
    }, [])



    const authObjct = {
        registerUser,
        googleRegister,
        loginUser,
        userLogout,
        user,
        setuser,
        loader
    }

    return (
        <div>
             <authContext.Provider value={authObjct}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;