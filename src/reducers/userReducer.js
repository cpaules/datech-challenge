export default (state= {}, action) => {
  switch ( action.type ) {
    case 'REGISTER_REQUEST':
      return { registering: true };
    case 'REGISTER_SUCCESS':
      return {};
    case 'REGISTER_FAILURE':
      return {};
    case 'LOGIN_REQUEST':
      return {
        loggingIn: true,
        user: action.user
      };
    case 'LOGIN_SUCCESS':
      return {
        loggedIn: true,
        user: action.user
      };
    case 'LOGIN_FAILURE':
      return {};
    case 'subscribeSuccess':
      return {
        subsribed: true
      };
    default:
      return state;
  }
}