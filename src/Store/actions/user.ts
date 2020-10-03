import { LOGIN, LOGOUT } from '../types/user'

export function login(userData: UserState) {
  return { type: LOGIN, payload: userData }
}

export function logout() {
  return { type: LOGOUT }
}