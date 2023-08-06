import { useState } from 'react';
import './App.css';

function App() {
  
  const [username, setUserName] = useState("s");
  const [isLogged, setLogged] = useState(false);
  
  return (
    <div className="App">
      <header className='blog-header'>
        <h1> Your Blogger </h1>

        {(username!=="")?<p> Welcome, {username}</p>:null}
      </header>
    </div>
  );
}

export default App;
