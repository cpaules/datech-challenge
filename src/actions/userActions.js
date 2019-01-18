import history from '../history'; 

// Action creators
const loginRequest = user => {
  return {
    type: 'LOGIN_REQUEST',
    user
  }
} 

const loginSuccess = user => {
  return {
    type: 'LOGIN_SUCCESS',
    user
  }
} 

const loginFailure = user => {
  return {
    type: 'LOGIN_FAILURE',
    user
  }
} 

const registerRequest = (user) => {
  return {
    type: 'REGISTER_REQUEST',
    user
  }
} 

const registerSuccess = (user) => {
  return {
    type: 'REGISTER_SUCCESS',
    user
  }
} 

const registerFailure = user => {
  return {
    type: 'REGISTER_FAILURE',
    user
  }
} 

const subscribeSuccess = (email) => {
  return {
    type: 'SUBSCRIBE_SUCCESS',
    email
  }
} 

// Async Actions

export const login = (email, password) => {
  return dispatch => {
    dispatch(loginRequest({ email }));
    return fetch('http://dev.datechnologies.co/Tests/scripts/user-login.php', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then(user => { 
      dispatch(loginSuccess(user));
      history.push('/');
    })
    .catch(error => {
      dispatch(loginFailure(error))
      console.log(error);
    });
  };
}

export const register = (user) => {
  return dispatch => {
    dispatch(registerRequest({ user }));
    return fetch('http://dev.datechnologies.co/Tests/scripts/user-signup.php', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' // currently unable to get a response, blocked by CORS
      },
      body: JSON.stringify({ user: user })
    })
    .then(response => response.json())
    .then(user => {
      dispatch(registerSuccess(user)) 
      history.push('/')
    })
    .catch(error => {
      dispatch(registerFailure(error))
      console.log(error)
    })
  }
}

export const subscribe = (email) => {
  return dispatch => {
    return fetch('http://dev.datechnologies.co/Tests/scripts/add-email.php', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    })
    .then(response => response.json())
    .then(email => {
      dispatch(subscribeSuccess(email)) 
      history.push('/')
    })
    .catch(error => console.log(error))  
  }
}