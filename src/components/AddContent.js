import React, {useEffect, useState} from 'react'
import {api} from '../services/api'



export default function AddContent(){

  const [contentUrl, SetContentUrl] = useState('https://www.youtube.com/watch?v=pQN-pnXPaVg')
  const [content, SetContent] = useState({})
  const [auth, setAuth] = useState(false)



  function authenticate() {
    return window.gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    window.gapi.client.setApiKey("AIzaSyAehStmBgoCrrukfEzlm4A1-Z-H2dYUN6E");
    return window.gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); setAuth(true) },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {

    const rx = /\=(.+)\?*/
    const ytID = rx.exec(contentUrl)[1]

    return window.gapi.client.youtube.videos.list({
      "part": [
        "snippet,contentDetails,statistics"
      ],
      "id": [
        `${ytID}`
      ]
    })
        .then(async function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
                SetContent(JSON.parse(response.body))
                console.log(JSON.parse(response.body).items[0].snippet.title)
                console.log(JSON.parse(response.body).items[0].snippet.thumbnails.default.url)
                console.log(JSON.parse(response.body).items[0].snippet.tags)

                const user_id = localStorage.getItem('user')
               const res = await api.post('/contents', {
                  user_id,
                  playlist: false,
                  ytID,
                  imageUrl: JSON.parse(response.body).items[0].snippet.thumbnails.default.url,
                  title: JSON.parse(response.body).items[0].snippet.title,
                  tagsString: JSON.parse(response.body).items[0].snippet.tags.join()
                })
                console.log(res)



              },
              function(err) { console.error("Execute error", err); });
  }
  window.gapi.load("client:auth2", function() {
    window.gapi.auth2.init({client_id: "9706550721-763us74m0j4i4akm3l27mdlheqmifu9u.apps.googleusercontent.com"});
  });



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
  

  if(!auth){

    return(
      <div style={{border: "solid 1px black"}}>
        
        <button onClick={()=> authenticate().then(loadClient)}>authorize and load</button>
      </div>
    )
  }else{
    return(
      <div style={{border: "solid 1px black"}}>
      
      
        <label htmlFor="contentId">Content ID</label>
        <input type="text" name="contentID" id="contentID" onChange={e => SetContentUrl(e.target.value)} value={contentUrl}/>

        < button onClick={execute}>Add Youtube Content Url</button>
        {/* <button onClick={handleSubmit}></button> */}
      

        
        
      </div>
    )
  }



}