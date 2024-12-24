import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../../firebase/firebase.init';
import axios from 'axios';


const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password, name, photo) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // After the user is created, update their profile
                const user = userCredential.user;
                return updateProfile(user, {
                    displayName: name,
                    photoURL: photo,
                });
            });
    }


    const singInUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signOutUser = ()=>{
        setLoading(true)
        return signOut(auth);
    }
     // Sign in with Google
     const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser?.email) {
                const user = { email: currentUser.email };
                axios.post('https://b10a11-server-side-noorjahan220.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        localStorage.setItem('authToken', res.data.token); // Store token locally
                        setLoading(false);
                    })
                    .catch(err => {
                        console.error('JWT error:', err);
                        setLoading(false);
                    });
            } else {
                // Clear token on logout
                localStorage.removeItem('authToken');
                axios.post('https://b10a11-server-side-noorjahan220.vercel.app/logout', {}, { withCredentials: true })
                    .then(() => setLoading(false))
                    .catch(err => {
                        console.error('Logout error:', err);
                        setLoading(false);
                    });
            }
        });
    
        return () => {
            unSubscribe();
        };
    }, []);
    

    const authInfo = {
        user,
        loading,
        createUser,
        singInUser,
        signOutUser,
        signInWithGoogle,
    }
    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;