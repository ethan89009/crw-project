import React from 'react'
import {auth, creatUserDocumentFromAuth, signInWithGooglePopup} from "../../utils/firebase/firebase.utils";

export const SignIn = () => {

    const logGoogleUser= async ()=>{
        const {user}=await signInWithGooglePopup();
        const userDocRef=await creatUserDocumentFromAuth(user);
    }
  return (
    <div>SignIn
    <button onClick={logGoogleUser}>Sign in with google</button>
    </div>
  )
}
