import "./App.css";

import { useNavigate } from "react-router-dom"; //npm i react-router-dom
import { useState } from "react";



export function App() {
  
  
  const [email, setEmail] = useState(""); //state
  const navigate = useNavigate();


  const saveEmail = () => {
   localStorage.setItem(`email`, email);
}


  
  const routeChange = () =>{
  navigate(`/welcome`)
}

  return (
    <div className="App" style={{width: 18 + 'rem', margin: 'auto'}}>
      <h2>Esegui il Login</h2>
      <form id="emailForm" name="emailform" action="#"
      onSubmit={(e) =>{
        e.preventDefault();
        checkEmail(document.emailform.email); 
        saveEmail() //saveEmail prima di route change per salvare nel local storage
        routeChange()
      }}>
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          name="email"
          size="30"
          required
          onInput={validateEmail} 
          // stato della mail aggiorna il valore così
          onChange={event => setEmail(event.target.value)}>
        </input>
        <button
          className="btn btn-dark"
          type="submit"
          id="submitBtn"
          action="#"
          disabled>        
          Login
        </button>
      </form>
    </div>
  );
}


const checkEmail = (input) => {
  var regex =
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,10})$/;
  if (input.value.match(regex)) {
    return true;
  } else {
    return false;
  }
};

const validateEmail = () => {
  const submitBtn = document.getElementById("submitBtn");
  const inputEmail = document.getElementById("inputEmail");
  const isEmailValid = checkEmail(inputEmail);

  submitBtn.disabled = !isEmailValid;
};




export function Header() {
  // const navigate = useNavigate();

  // const routeChange = () =>{
  //   navigate(`/`)
  // }
  const getCurrentEmail = () => {
    const email = localStorage.getItem('email')
    return email;
  }
  const clearEmail = () => {
    const mail = getCurrentEmail();
    
    localStorage.removeItem('email', mail)
  }
  
  return (
    <nav id="header" className="navbar navbar-expand-lg bg-body-tertiary">
      <button type="button" class="btn btn-light" onClick={() =>{clearEmail()
      // routeChange()
      }}>Logout</button>
    </nav>
  );

}


 export function Welcome(){
  const email = localStorage.getItem("email");
  return (
    <div className="container">
    <h1>Welcome!</h1>
    {email}</div>
  )
    
  }
  export function WelcomeBack(){
    const email = localStorage.getItem("email");
    return(
      <div className="container">
      <h2>Welcome Back!</h2>
      {email}</div>
    )
  
}