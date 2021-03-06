import { UPDATE_USER_STATE } from '@src/store/constants/authentication';

const authState = {
  isLoggedIn: false
};

const AuthReducer = (state: any = authState, action: any) => {
  switch(action.type) {
    case UPDATE_USER_STATE : {
      return { ...state, isUserLoggedIn: action.payload };
    }

    default: {
      return { ...state };
    }  
  }
}

export default AuthReducer;