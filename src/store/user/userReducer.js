import { userAction } from "../constants/actionType";

const initialState = {
    isError: "",
    isApiLoading: false,
    isLoading:false,
    userList: [],
};

const userActionReducer = (state = initialState, { type, payload } = {}) => {
  
  switch (type) {
    case userAction.FETCH_USERS: {return { ...state,...payload}}
    default:return state;
  }
};

export default userActionReducer;
