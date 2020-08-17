import React, {useEffect, useState} from 'react'
import {api} from '../services/api'
import youtube from '../services/youtube'



export default function AddContent(){

  const [contentId, SetContentId] = useState('')
  // const [contentList, SetContentList] = useState([])

  // useEffect(()=>{

  //   async function getUser(){

  //     const user = localStorage.getItem('user')

  //     if(user !== ''){
  //       const response = await api.get(`/contents`)
  
  //       console.log(response.data)
    
  //       SetContentList(response.data)
  
  //     }

  //   }

  //   getUser()

  // },[])


  async function handleSubmit(e){
    e.preventDefault()
    e.stopPropagation()
    const response = await youtube.get(`playlists/${contentId}`)

    alert(response)
};

  // async function handleSubmit(e){
  //   e.preventDefault()
  //   const data = new FormData()
  //   const user_id = localStorage.getItem('user')

  //   data.append('thumbnail', thumbnail)
  //   data.append('company', company)
  //   data.append('techs', techs)
  //   data.append('price', price)

  //   await api.post('/spots', data,{
  //     headers: { user_id }
  //   })

  //   history.push('/dashboard')
  // }  
  

    return(

    <div style={{border: "solid 1px black"}}>
      
      <form action="">
        <label htmlFor="contentId">Content ID</label>
        <input type="text" name="contentID" id="contentID" onChange={e => SetContentId(e.target.value)} value={contentId}/>

        <button onClick={handleSubmit}>Add Content</button>
      </form>

    </div>
    
    )


}