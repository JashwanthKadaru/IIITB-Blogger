import { useState } from 'react';
import './App.css';
import HomePage from './screens/HomePage';
import ProfilePage from './screens/ProfilePage';
import SignUpPage from './screens/SignUpPage';

function App() {
  
  const [username, setUserName] = useState("s");
  const [isLogged, setLogged] = useState(false);
  
  return (
    <div className="App">
      <header className='blog-header'>
        <h1> Your Blogger </h1>

        {(username!=="")?<p> Welcome, {username}</p>:null}
      </header>

      <div className='blog-body'>
        {/* <p> Hello </p> */}
        {/* <HomePage/> */}
        {/* <ProfilePage/> */}
        <SignUpPage/>
      </div>

      <footer className='blog-footer'>
        <p> Copyright &copy; August 2023 </p>
        <p> Made with &hearts; by Jashwanth Kadaru </p>
      </footer>
    </div>
  );
}

export default App;
