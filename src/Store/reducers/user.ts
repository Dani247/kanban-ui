import { LOGIN, LOGOUT } from "../types/user";

const initialState: UserState = {
  displayName: null,
  email: null,
  phoneNumber: null,
  photoURL: null,
  refreshToken: null,
  uid: null
};

export function userReducer(state = initialState, { type, payload }: any) {
  switch (type) {
    case LOGIN: {
      const userData: UserState = payload;
      return {
        ...state,
        ...userData
      }
    }
    case LOGOUT: {
      return {
        ...initialState
      }
    }
    default:
      return state;
  }
};

export default userReducer