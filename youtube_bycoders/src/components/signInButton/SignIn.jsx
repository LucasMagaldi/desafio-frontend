import React from 'react'
import './signIn.css'

const SignIn = ({hidden, loadToken, Auth}) => {
  return (
    <>
        {
         !hidden ?
            <button onClick={Auth}>Sign-in with your Google Acoount</button>
            :
            <button className='start_session' onClick={loadToken}>Click here to start your Session!</button>
        }
    </>   
  )
}

export default SignIn