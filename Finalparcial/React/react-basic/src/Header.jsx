import React from "react";
import Picture from "./components/Picture.jsx";
import pi, {squarePi, square} from "./modules/math.js";
import { Link } from "react-router-dom";


function Header(){
  var name = "Sebastián";
  var lname = "Avilez";
  var today = new Date();
  
  let greeting;

  const customStyle ={
    color: "navy",
    fontSize: "20px",
    border: "1px solid black"
  }

  var currentTime = today.getHours();
  if(currentTime<12){
    greeting = "Good Morning"
    customStyle.background = "yellow";
  } else if (currentTime < 18){
    greeting = "Good Afternoon"
    customStyle.background = "aqua";
  } else {
    greeting = "Good Night"
    customStyle.background = "blue";
    customStyle.color = "white";
  }
  var num = 7
  return (
    <div>
        <p>The value of pi es {pi} and the square is {squarePi()} and the square of 7 is {square(num)}</p>
      <h1 style={customStyle}> {greeting + " " + name + " " + lname}</h1>
      <Picture />
      <nav className="navbar navbar-expand-lg bg-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to='/' className="nav-link">Home</Link>
            </li>
          <li className="nav-item">
            <Link to="/directory" className="nav-link">Directory</Link>
            </li >
          <li className="nav-item">
            <Link to="/agenda" className="nav-link">Agenda</Link>
          </li>
          <li className="nav-item">
            <Link to="/phone" className="nav-link">PhoneBook</Link>
            </li>
        </ul>
      </nav>
    </div>
    
  )
}

export default Header;