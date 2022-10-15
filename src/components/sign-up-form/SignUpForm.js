import React ,{useState, useContext} from 'react'
import { creatAuthUserWithEmailAndPassword ,creatUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';
import { FormInput } from '../form-input/FormInput';
import { Button } from '../button/Button';
import "./signupform.styles.scss"



export const SignUpForm = () => {

  const [formField,setFormField]=useState({
    displayName:"",
    email:"",
    password:"",
    confirmPassword:"" 
  });

  const resetFormField=()=>{
    setFormField({
      displayName:"",
      email:"",
      password:"",
      confirmPassword:"" 
    })
  } 

  const {displayName,email,password,confirmPassword}=formField;
  
  const handleSubmit=async (e)=>{
    if(password!==confirmPassword){
      alert("password doesnt match with confirm password!");
      return;
    }
    
    e.preventDefault();
    try {
      const {user}=await creatAuthUserWithEmailAndPassword(email,password);
      creatUserDocumentFromAuth(user,{displayName:displayName});
      resetFormField();
    } 
    catch (error) {
      if(error.code=="auth/email-already-in-use"){
        alert("User already exists try a different email");
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
    <h2>Dont have an account?</h2>
      <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput label={"Display Name"} changeHandler={handleChange} name={"displayName"} type={"text"} value={displayName}/>
            <FormInput label={"Email"} changeHandler={handleChange} name="email" type={"email"} value={email}/>
            <FormInput label={"Password"} changeHandler={handleChange} name="password" type={"password"} value={password}/>
            <FormInput label={"Confirm Password"} changeHandler={handleChange} name="confirmPassword" type={"password"} value={confirmPassword}/>
            <Button  type='submit'>Sign Up</Button>
        </form>
    </div>
  )
}
