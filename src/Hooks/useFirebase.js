import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, getIdToken, createUserWithEmailAndPassword } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    //USER REGISTRATION 
    const userRegistration = (email, Password) => {
        createUserWithEmailAndPassword(auth, email, Password)
            .then(res => console.log(res.user));
    }
    return {
        userRegistration,
    }
}
export default useFirebase;