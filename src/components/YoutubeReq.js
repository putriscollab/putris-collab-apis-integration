import React, {useEffect, useState, Component} from 'react'
import {api} from '../services/api'
import youtube from '../services/youtube'
// import "https://apis.google.com/js/api.js"



export default function YoutubeReq(){

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
    return window.gapi.client.youtube.channels.list({
      "part": [
        "snippet,contentDetails,statistics"
      ],
      "id": [
        "UC_x5XG1OV2P6uZZ5FSM9Ttw"
      ]
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  window.gapi.load("client:auth2", function() {
    window.gapi.auth2.init({client_id: "9706550721-763us74m0j4i4akm3l27mdlheqmifu9u.apps.googleusercontent.com"});
  });


  
    if(!auth){

      return(
        <div style={{border: "solid 1px black"}}>
          
          <button onClick={()=> authenticate().then(loadClient)}>authorize and load</button>
        </div>
      )
    }else{
      return(
        <div style={{border: "solid 1px black"}}>
          
          < button onClick={execute}>execute</button>
          
        </div>
      )
    }

    


}