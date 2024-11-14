import {SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <main className='flex h-screen w-fill items-center justify-center'>
      <SignUp/>
    </main>
  )
}

export default SignUpPage