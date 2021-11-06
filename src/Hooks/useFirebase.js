import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
    const [user, setuser] = useState(null);
    const [error, seterror] = useState('');
    const [isLoading, setisLoading] = useState(true);
    const auth = getAuth();

    //USER REGISTRATION 
    const userRegistration = (email, Password) => {
        setisLoading(true)
        createUserWithEmailAndPassword(auth, email, Password)
            .then(res => console.log(res.user))
            .catch(error => seterror(error.message))
            .finally(() => setisLoading(false))
    }

    //USER LOG IN
    const userLogin = (email, password) => {
        setisLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    //USER SIGN OUT
    const userLogOut = () => {
        signOut(auth)
            .then(() => setuser({}))
            .catch(error => seterror(error.message))
    }

    //OBSERVER USER 
    useEffect(() => {
        setisLoading(true);
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            user ? setuser(user) : setuser();
            setisLoading(false)
        })
        return () => unSubscribe;
    }, [])

    return {
        userRegistration,
        userLogin,
        userLogOut,
        isLoading,
        user,
        setuser,
        seterror,
        setisLoading,
        error
    }
}
export default useFirebase;