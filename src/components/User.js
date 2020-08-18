import React, {useEffect, useState} from 'react'
import {api} from '../services/api'



export default function User(){

  const [userData, setUSerData] = useState({})

  useEffect(()=>{

    async function getUser(){

      const user = localStorage.getItem('user')

      if(user !== ''){
        const response = await api.get(`/users/${user}`)
  
        console.log(response.data)
    
        setUSerData(response.data)
  
        // window.location.reload(false)
      }

    }

    getUser()

  },[])

  function logOutOnClick(e){
    localStorage.clear()
  }

    
  

  if(userData){
    return(

      <div>
        <h2>USER INFO</h2>
        <img src={userData.imageUrl} />
    
        <p><b>userData._id</b></p> 
        <p>{userData._id}</p>

        <p><b>userData.imageUrl</b></p> 
        <p>{userData.imageUrl}</p>
        
        <p><b>userData.googleId</b></p> 
        <p>{userData.googleId}</p>
        
        <p><b>userData.email</b></p> 
        <p>{userData.email}</p>
        
        <p><b>userData.name</b></p> 
        <p>{userData.name}</p>
        
        <p><b>userData.favorites</b></p> 
        <p>{userData.favorites}</p>
        
        <p><b>userData.dateCreated</b></p> 
        <p>{userData.dateCreated}</p>

        <button onClick={logOutOnClick}>Log out</button>

      </div>
    )
    
  }else{
    
    return (
      <p>Not Logged</p>
    )

  }

}