import React, {useEffect} from 'react';
import GSignInButton from './components/GSignInButton';
import User from './components/User';
import ContentList from './components/ContentList';
import AddContent from './components/AddContent';
import YoutubeReq from './components/YoutubeReq';

function App() {


  return (
    <div className="App">
      <hr/>
      <h2>Google Login</h2>
      <GSignInButton />
      <br />
      
      <hr/>
      <User />
      <br />

      <hr />
      <h2>Here is where you add a YouTube video Url</h2>
      <AddContent />
      <br />
      <br />

      <hr/>
      <ContentList />
      <br />

      <hr/>
      {/* <YoutubeReq /> */}
    </div>
  );
}

export default App;
