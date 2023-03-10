const actionTypes = Object.freeze({
  //app
  APP_START_UP_COMPLETE: "APP_START_UP_COMPLETE",
  SET_CONTENT_OF_CONFIRM_MODAL: "SET_CONTENT_OF_CONFIRM_MODAL",
  CHANGE_LANGUAGE: "CHANGE_LANGUAGE",

  //user
  ADD_USER_SUCCESS: "ADD_USER_SUCCESS",
  USER_LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",
  PROCESS_LOGOUT: "PROCESS_LOGOUT",
  USER_LOGIN_FAIL: "USER_LOGIN_FAIL",

  //admin action type gender
  FETCH_GENDER_START: 'FETCH_GENDER_START',
  FETCH_GENDER_SUCCESS:'FETCH_GENDER_SUCCESS',
  FETCH_GENDER_FAILED: 'FETCH_GENDER_FAILED',

  // admin action type position
  FETCH_POSITION_SUCCESS:'FETCH_POSITION_SUCCESS',
  FETCH_POSITION_FAILED: 'FETCH_POSITION_FAILED',

  // admin action type role
  FETCH_ROLE_SUCCESS:'FETCH_ROLE_SUCCESS',
  FETCH_ROLE_FAILED: 'FETCH_ROLE_FAILED'
});

export default actionTypes;