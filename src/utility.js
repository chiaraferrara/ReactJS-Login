
export const utilityGetLoggedEmail = () => {
    const loggedEmail = localStorage.getItem('email');
    console.log(`L'e-mail dell'utente loggato:` + loggedEmail);
    return loggedEmail;
  };

 
 export const utilityGetUserLogged = () => {
    const emailLogged = utilityGetLoggedEmail();
    console.log('GetUserLogged by Email:' + emailLogged);
    const prevUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = prevUsers.find(user => user.email === emailLogged);
    return user;
  };


  export const isUserInLocalStorage = () => {
    const email = utilityGetLoggedEmail();
    const prevUsers = JSON.parse(localStorage.getItem('users')) || [];
  
    console.log('Email loggata:', email);
  
    console.log('Utenti nel localStorage:', prevUsers);
    const user = prevUsers.find(user => user.email === email);
    console.log('Utente trovato:', user);
  
    return !!user;
  };
  
  export const isUserLogged = () => {
    const user = localStorage.getItem('email');
    if (user) {
      console.log("C'è qualcuno loggato: " + utilityGetLoggedEmail());
      return true;
    } else {
      return false;
    }
  };