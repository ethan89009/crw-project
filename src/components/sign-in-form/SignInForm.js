import React ,{useState} from 'react'
import { creatUserDocumentFromAuth,signInWithGooglePopup,signInAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils';
import { FormInput } from '../form-input/FormInput';
import { Button } from '../button/Button';
import "./signinform.styles.scss"

export const SignInForm = () => {

  const [formField,setFormField]=useState({
    email:"",
    password:""
  });
  const {email,password}=formField;

  const resetFormField=()=>{
    setFormField({
      email:"",
      password:""
    })
  } 

  const signInWithGoogle= async ()=>{
    await signInWithGooglePopup();
}

 
  
  const handleSubmit=async (e)=>{
 
    e.preventDefault();
    try {
      const {user}=await signInAuthUserWithEmailAndPassword(email,password);
      resetFormField();
    } 
    catch (error) {

      switch(error.code)
      {
        case "auth/wrong-password":alert("incorrect password for email.");break;
        case "auth/user-not-found":alert("user not found");break;
        default:console.log(error.code);
      }

     
    }

  }

  const handleChange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setFormField({...formField,[name]:value});
    
  }
  return (
    <div className='sign-up-container'>
    <h2>Have an account?</h2>
      <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput label={"Email"} changeHandler={handleChange} name="email" type={"email"} value={email}/>
            <FormInput label={"Password"} changeHandler={handleChange} name="password" type={"password"} value={password}/>
            <div className='buttons-container'>
            <Button  type='submit'>Sign In</Button>
            <Button  type='button' buttonType={"google"} onClick={signInWithGoogle}>Google Sign In</Button>
            </div>
        </form>
    </div>
  )
}
