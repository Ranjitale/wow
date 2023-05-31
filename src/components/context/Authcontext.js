import { useState,useEffect,useContext, createContext } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
// signInWithRedirect,onAuthStateChanged,signOut
import {auth} from '../firebase'
const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
    const [user,setUser]=useState({})
    useEffect(() => {
        const random = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log(user)
            

            
        },[user])
        return () => { random() }
    })
    
    const googleSignin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider)
    }
    const signout = () => {
        signOut(auth)
    }
    return (
        <AuthContext.Provider value={{googleSignin,user,setUser,signout}}>
            {children}
        </AuthContext.Provider>
    )
}
export const UserAuth = () => {
    return useContext(AuthContext)
}