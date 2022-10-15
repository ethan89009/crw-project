import React from 'react'
import { SignUpForm } from '../../components/sign-up-form/SignUpForm';
import { SignInForm } from '../../components/sign-in-form/SignInForm';
import "./authentication.styles.scss"

export const Authentication = () => {


  return (
    <div className='authentication-container'>
    <SignInForm/>
    <SignUpForm/>
    </div>
  )
}
