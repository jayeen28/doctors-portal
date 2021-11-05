import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
    const [user, setuser] = useState({});
    const [error, seterror] = useState('');
    const auth = getAuth();
    //USER REGISTRATION 
    const userRegistration = (email, Password) => {
        createUserWithEmailAndPassword(auth, email, Password)
            .then(res => console.log(res.user));
    }
    //USER LOG IN
    const userLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(res => setuser(res.user))
            .catch(error => seterror(error.message))
    }
    //USER SIGN OUT
    const userSignOut = () => {
        signOut(auth)
            .then(() => setuser({}))
            .catch(error => seterror(error.message))
    }
    //OBSERVER USER 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            user ? setuser(user) : setuser({});
        })
        return () => unSubscribe;
    }, [])

    console.log(user)
    return {
        userRegistration,
        userLogin,
        userSignOut,
        user,
        error
    }
}
export default useFirebase;