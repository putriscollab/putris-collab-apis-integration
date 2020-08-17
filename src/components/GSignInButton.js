import React from 'react'
import GoogleLogin from 'react-google-login';

import {api} from '../services/api'



export default function GSignInButton(){

  async function responseGoogle(googleRes){

    console.log(googleRes)

    const { googleId, imageUrl, email } =  googleRes.profileObj

    const name	      = googleRes.profileObj.givenName + " " + googleRes.profileObj.familyName
    const screenName  = googleRes.profileObj.givenName

    if(googleId !== ''){
      const response = await api.post('/users', {googleId, imageUrl, email, name, screenName })

      console.log(response)

      const { _id } = response.data

      localStorage.setItem('user', _id)

    }
  }

  if(localStorage.getItem('user')){
    return(
      <p>Logged</p>
    )
    
  }else{
    
    return (
      <GoogleLogin
      clientId="9706550721-763us74m0j4i4akm3l27mdlheqmifu9u.apps.googleusercontent.com"
      buttonText="Sign In"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
    )

  }

}