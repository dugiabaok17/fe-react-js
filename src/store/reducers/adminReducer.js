import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoadingGender: false,
  genders: [],
  roles: [],
  positions: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
      state.isLoadingGender = true;
      console.log("hoi dan it fire gender start: ", action);
      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_SUCCESS:
      state.genders = action.data;
      state.isLoadingGender = false;
      console.log("hoi dan it fire gender success action-data: ", action.data);
      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_FAILED:
      console.log("hoi dan it fire gender failed: ", action);
      state.isLoadingGender = false;
      state.genders = [];
      return {
        ...state,
      };

    case actionTypes.FETCH_POSITION_SUCCESS:
      state.positions = action.data;
      console.log(
        "hoi dan it fire position success action-data: ",
        action.data
      );
      return {
        ...state,
      };
    case actionTypes.FETCH_POSITION_FAILED:
      console.log("hoi dan it fire position failed: ", action);
      state.positions = [];
      return {
        ...state,
      };

      case actionTypes.FETCH_ROLE_SUCCESS:
      state.roles = action.data;
      console.log(
        "hoi dan it fire position success action-data: ",
        action.roles
      );
      return {
        ...state,
      };
    case actionTypes.FETCH_ROLE_FAILED:
      console.log("hoi dan it fire position failed: ", action);
      state.roles = [];
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default adminReducer;
