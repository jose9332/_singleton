import React from 'react';
import './App.css';
import Auth from './singleton/Auth';

function App() {
  const auth1 = Auth.getInstance();
  
  Auth.setAuth('usuario');

  const auth2 = Auth.getInstance();
  
  return (
    <div className="App">
      <header className="App-header">
      <h2>Singleton</h2>
      <br />
      <h3>instancia de auth 1 = {auth1}</h3>
      <br />
      <h3>nueva instancia de auth = {auth2}</h3>
      </header>
      
      
    </div>
  );
}

export default App;
