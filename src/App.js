import logo from './LogoMakr-1Hi0ZH.png';
import React from 'react';
// import { withAuthenticator, AmplifySignOut, AmplifySignIn } from '@aws-amplify/ui-react';
import './App.css';
import Test from './components/test'

function App() {
  return (
    <div className="App">
      {/* <AmplifySignIn /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Test/>
      </header>
    </div>
  );
}

export default App;
