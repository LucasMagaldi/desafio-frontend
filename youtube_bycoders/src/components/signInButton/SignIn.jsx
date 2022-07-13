import React from 'react'

const SignIn = ({hidden, loadToken, Auth}) => {
  return (
    <>
        {
         !hidden ?
            <button onClick={Auth}>Sign in with your Google Acoount</button>
            :
            <button onClick={loadToken}>Click here to start your Session!</button>
        }
    </>   
  )
}

export default SignIn