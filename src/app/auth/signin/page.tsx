import React from 'react'
import { Auth } from '../../../components/authLayout/Auth'
import { SignInForm } from './signInForm'

 const SignIn = () => {
    const img = "/signin.jpeg"
  return (
   <Auth image={img}>
    <SignInForm/>
   
   </Auth>
  )
}

export default SignIn;