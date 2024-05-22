import React from 'react'
import ResetPasswordForm from './resetPasswordForm'
import { Auth } from '@/components/authLayout/Auth';


 const Page = () => {
    const img = "/signin.jpeg"
  return (
    <Auth  image={img}>
        <ResetPasswordForm/>
    </Auth>
 
  )
}

export default Page;
