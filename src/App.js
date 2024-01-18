import "./App.css";

import { useNavigate } from "react-router-dom"; //npm i react-router-dom




export function App() {
  
  const navigate = useNavigate();
  
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
        routeChange()
      }}>
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          name="email"
          size="30"
          required
          onInput={validateEmail} >
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
  return (
    <nav id="header" className="navbar navbar-expand-lg bg-body-tertiary">
      Navbar
    </nav>
  );

}
 export function Welcome(){
  return (
    <h1>Welcome!</h1>
  )
    
  }