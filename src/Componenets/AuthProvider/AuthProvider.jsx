import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../../FirebaseSetup/Firebase.init';
export const authContext = createContext()
const AuthProvider = ({ children }) => {
    
    const provider = new GoogleAuthProvider();
    // ggogle user//

    const googleRegister = () => {
        return signInWithPopup(auth, provider)

    }
    // create User//
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authObjct = {
        registerUser,
        googleRegister,
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