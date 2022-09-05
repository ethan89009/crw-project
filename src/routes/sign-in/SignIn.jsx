import React from 'react'
import {auth, signInWithGooglePopup} from "../../utils/firebase/firebase.utils";
export const SignIn = () => {
    const logGoogleUser= async ()=>{
        const response=await signInWithGooglePopup();
        console.log(response);
    }
  return (
    <div>SignIn
    <button onClick={logGoogleUser}>Sign in with google</button>
    </div>
  )
}
