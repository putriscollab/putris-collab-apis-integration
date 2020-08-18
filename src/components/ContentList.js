import React, {useEffect, useState} from 'react'
import {api} from '../services/api'



export default function ContentList(){

  const [contentList, SetContentList] = useState([])

  useEffect(()=>{

    async function getUser(){

      const user = localStorage.getItem('user')

      if(user !== ''){
        const response = await api.get(`/contents`)
  
        console.log(response.data)
    
        SetContentList(response.data)
  
      }

    }

    getUser()

  },[])


    
  

  if(ContentList){
    return(

      <div>
       
       
       <ul>
         {contentList.map( content => (
          <li key={content._id} style={{border: "solid 1px black"}}>

          <img src={content.imageUrl} />
          <p><b>content._id</b></p> 
          <p>{content._id}</p>
          
          <p><b>content.playslist</b></p> 
          <p>{content.playslist}</p>
          
          <p><b>content.ytID</b></p> 
          <p>{content.ytID}</p>
          
          <p><b>content.user</b></p> 
          <p>{content.user}</p>
          
          <p><b>content.title</b></p> 
          <p>{content.title}</p>

          <p><b>content.tags</b></p> 
          <p>{content.title}</p>
          
          <p><b>content.totalRate</b></p> 
          <p>{content.title}</p>

          <p><b>content.qntRate</b></p> 
          <p>{content.title}</p>
          
          <p><b>content.dateCreated</b></p> 
          <p>{content.dateCreated}</p>

          <a target="_blank" href={`https://www.youtube.com/watch?v=${content.ytID}`}>Link</a>

            </li>
         ))}
       </ul>

      </div>
    )
    
  }else{
    
    return (
      <p>No content to show</p>
    )

  }

}