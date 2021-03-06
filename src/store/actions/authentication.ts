import { UPDATE_USER_STATE } from '@src/store/constants/authentication';

export const updateUserState = (isUserLoggedIn: boolean) => ({
  type: UPDATE_USER_STATE,
  payload: isUserLoggedIn
});