import './App.css';
import { useState } from 'react';
import Header from "./Header.jsx";
import Login from "./components/Login.jsx";
import Directory from './Directory.jsx';
import PhoneBook from "./components/PhoneBook";
import Agenda from "./components/Agenda.jsx"
import {Routes, Route} from "react-router-dom";

function App() {
  var today = new Date();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  function changeLoggedState(){
    setIsLoggedIn(!isLoggedIn);
  }

  function CheckLogStatus(props) {
    return isLoggedIn? (
      <Directory listener={changeLoggedState}/>
    ) : (
      <Login listener={changeLoggedState}/>
    );
  }

  return (
    <div className="App container">
      <Header />
      <Routes>
        <Route path="/" element={isLoggedIn? (
      <props.component listener={changeLoggedState}/>
    ) : (
      <Login listener={changeLoggedState}/>
    )}/>
        <Route path="/directory" element={<CheckLogStatus component={Directory}/>}/>
        <Route path="/phone" element={<CheckLogStatus component={PhoneBook}/>}/>
        <Route path="/agenda" element={<CheckLogStatus component={Agenda}/>}/>
      </Routes>
      {
        //{isLoggedIn? ({}
         // <Directory listener={changeLoggedState}/>
          //):(
         // <Login listener={changeLoggedState}
          ///>
          //)}
      }
      <div></div>
      <p>Copyright {today.getFullYear()}</p>
    </div>
  );
}

export default App;
