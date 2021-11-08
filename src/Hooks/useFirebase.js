import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
    const [user, setuser] = useState(null);
    const [error, seterror] = useState('');
    const [isLoading, setisLoading] = useState(true);
    const [isAdmin, setisAdmin] = useState(false);
    const [token, settoken] = useState(undefined);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //SEND UPSERT REQUEST TO MONGODB
    const mongoUpsert = (displayName, email, uid) => {
        const userData = { displayName, email, uid };
        fetch('https://desolate-waters-93213.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
    }
    //USER REGISTRATION 
    const userRegistration = (email, Password, userName, history) => {
        setisLoading(true)
        createUserWithEmailAndPassword(auth, email, Password)
            .then(res => {
                updateUserName(userName);
                setuser(res.user);
                const { email, uid } = res.user;
                mongoUpsert(userName, email, uid)
            })
            .catch(error => seterror(error.message))
            .finally(() => {
                setisLoading(false);
                history.push('/');
            })
    }

    //UPDATE USER NAME
    const updateUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: `${name}`
        })
            .then(res => { })
            .catch(error => seterror(error.message))
    }

    //GOOGLE LOGIN
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //USER LOG IN
    const userLogin = (email, password) => {
        setisLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //CHECK LOGED IN USER ADMIN OR NOT
    useEffect(() => {
        setisLoading(true)
        fetch(`https://desolate-waters-93213.herokuapp.com/users/${user?.uid}`)
            .then(res => res.json())
            .then(data => {
                setisAdmin(data?.isAdmin)
                setisLoading(false);
            })
    }, [user?.uid])

    //USER SIGN OUT
    const userLogOut = () => {
        signOut(auth)
            .then(() => setuser(null))
            .catch(error => seterror(error.message))
    }

    //OBSERVER USER 
    useEffect(() => {
        setisLoading(true);
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setuser(user);
                getIdToken(user)
                    .then(token => settoken(token))
            }
            else {
                setuser(null)
            }
            setisLoading(false)
        })
        return () => unSubscribe;
    }, [auth])
    return {
        userRegistration,
        userLogin,
        userLogOut,
        googleLogin,
        setuser,
        seterror,
        setisLoading,
        mongoUpsert,
        isLoading,
        token,
        isAdmin,
        user,
        error
    }
}
export default useFirebase;