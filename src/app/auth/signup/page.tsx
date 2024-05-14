import React from 'react'
import { Auth } from '../../../components/authLayout/Auth'
import { SignUpForm } from './signUpForm'

 const SignUp = () => {
    const img = "/signup.jpeg"
  return (
    <Auth image={img}>
        <SignUpForm/>
    </Auth>
  )
}

export default SignUp ;