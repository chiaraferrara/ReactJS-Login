/** @format */

import './App.css';

import { useNavigate } from 'react-router-dom'; //npm i react-router-dom
import { useState } from 'react';

const users = JSON.parse(localStorage.getItem('users')) || [];

export function LoginForm() {
  const [email, setEmail] = useState(''); //state
  const navigate = useNavigate();


  const saveUser = () => {
    localStorage.setItem('users', JSON.stringify(users));
  }

  const saveUserOnLocalStorage = () => {
    const user = {
      email: email,
      lastLogged: new Date().toLocaleString(),
      previousAccess: null,
      counter: 1,
    };
    users.push(user);
    saveUser()
  };

  const saveEmail = () => {
    localStorage.setItem(`email`, email);
  };

  const routeChange = () => {
    navigate(`/welcome`);
  };

  return (
    <div className="App" style={{ width: 18 + 'rem', margin: 'auto' }}>
      <h2>Esegui il Login</h2>
      <form
        id="emailForm"
        name="emailform"
        action="#"
        onSubmit={e => {
          e.preventDefault();
          checkEmail(document.emailform.email);
          saveUserOnLocalStorage();
          saveEmail(); //saveEmail prima di route change per salvare nel local storage
          routeChange();
        }}
      >
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          name="email"
          size="30"
          required
          onInput={validateEmail}
          // stato della mail aggiorna il valore così
          onChange={event => setEmail(event.target.value)}
        ></input>
        <button className="btn btn-dark" type="submit" id="submitBtn" action="#" disabled>
          Login
        </button>
      </form>
    </div>
  );
}

const checkEmail = input => {
  var regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,10})$/;
  if (input.value.match(regex)) {
    return true;
  } else {
    return false;
  }
};

const validateEmail = () => {
  const submitBtn = document.getElementById('submitBtn');
  const inputEmail = document.getElementById('inputEmail');
  const isEmailValid = checkEmail(inputEmail);

  submitBtn.disabled = !isEmailValid;
};

//logout button useNavigate per tornare a '/' dopo aver cancellato la mail dal local storage.
export function LogoutButton() {
  const navigate = useNavigate();

  const clearEmail = () => {
    const mail = localStorage.getItem('email');
    localStorage.removeItem('email', mail);
    navigate('/');
  };

  return (
    <button type="button" className="btn btn-light" onClick={clearEmail}>
      Logout
    </button>
  );
}
//Header] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>
//Soluzione:  <BrowserRouter><Header/>
export function Header() {
  return <LogoutButton />;
}

export function Welcome() {
  const email = localStorage.getItem('email');
  return (
    <div className="container">
      <h1>Welcome!</h1>
      {email}
    </div>
  );
}
export function WelcomeBack() {
  const email = localStorage.getItem('email');
  return (
    <div className="container">
      <h2>Welcome Back!</h2>
      {email}
    </div>
  );
}
