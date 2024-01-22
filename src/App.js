/** @format */

import './App.css';

import { useNavigate } from 'react-router-dom'; //npm i react-router-dom
import { useState } from 'react';

const users = JSON.parse(localStorage.getItem('users')) || [];


const getLoggedEmail = () => {
  const loggedEmail = localStorage.getItem('email');
  console.log(`L'e-mail dell'utente loggato:` + loggedEmail);
  return loggedEmail;
};

const getUserLogged = () => {
  const emailLogged = getLoggedEmail();
  const prevUsers = JSON.parse(localStorage.getItem('users')) || [];
  const user = prevUsers.find(user => user.email === emailLogged);
  return user;
};


export function App() {
  const [email, setEmail] = useState(''); //state
  const navigate = useNavigate();


  const saveUserOnLocalStorage = () => {
    const user = {
      email: email,
      lastLogged: new Date().toLocaleString(),
      previousAccess: null,
      counter: 1,
    };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  };


  const saveEmail = () => {
    localStorage.setItem(`email`, email);
  };


  const updateUser = () => {


    const prevUsers = JSON.parse(localStorage.getItem("users"));
    const emailLogged = getLoggedEmail();
    const newUsers = prevUsers.map((user) => {
      if (user.email === emailLogged) {
        return {
          ...user,
          previousAccess : user.lastLogged,
          lastLogged: new Date().toLocaleString(),
          counter: user.counter + 1,
        };
      } else {
        return {
          ...user,
        };
      }
    });
    users.splice(0, users.length, ...newUsers);
    localStorage.setItem("users", JSON.stringify(newUsers));
  };



  const login = () => {
    const email = getLoggedEmail();
    const existingUser = getUserLogged();

    if (existingUser != null) {
      updateUser();
      
    } else {
      saveUserOnLocalStorage();
    }


  }
  const routeChange = () => {
    navigate(`/welcome`);
  };

  const isUserLogged = () => {
    const user = localStorage.getItem('email');
    if (user) {
      console.log("C'è qualcuno loggato");
      return true;
    } else {
      return false;
    }
  };

  if (isUserLogged == true) {
    return <Welcome />;
  } else {
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
            login();
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

  const currentUser = getUserLogged();
  if (currentUser && currentUser.counter > 1) {
    return (
      <div className="container">
        <h2>Bentornat*</h2>
        <div>Sei stato qui {currentUser.counter} volte</div>
      </div>
    );
  } else if (currentUser) {
    return (
      <div className="container">
        <h1>Benvenut*</h1>
        {currentUser.lastLogged} <br/>
        {email}
      </div>
    );
  } else{
    return (
      <div className="container">
        <h1>Benvenut*</h1>
        {email}
      </div>
    );
  }
}
