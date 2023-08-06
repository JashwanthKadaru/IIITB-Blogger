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

      <footer className='blog-footer'>
        <p> Copyright &copy; August 2023 </p>
        <p> Made with &hearts; by Jashwanth Kadaru </p>
      </footer>
    </div>
  );
}

export default App;
