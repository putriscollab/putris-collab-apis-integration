import React from 'react';
import GSignInButton from './components/GSignInButton';
import User from './components/User';
import ContentList from './components/ContentList';
import AddContent from './components/AddContent';

function App() {
  return (
    <div className="App">
      <hr/>
      <h2>Google Login</h2>
      <GSignInButton />
      
      <hr/>
      <User />

      <hr />
      <AddContent />

      <hr/>
      <ContentList />
    </div>
  );
}

export default App;
