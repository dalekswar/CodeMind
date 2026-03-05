import { API_ROUTES } from '../constants';
import type { LoginRequest, SignUpRequest } from '../types';

export async function authUser(path: string, authData: LoginRequest | SignUpRequest) {
  const res = await fetch(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  const data = await res.json();
  if (!res.ok) {
    const errorMessage = 'email' in authData ? 'Failed to sign up' : 'Failed to login';
    throw new Error(data.message || errorMessage);
  }

  return data;
}

export async function loginUser(authData: LoginRequest) {
  return authUser(API_ROUTES.LOGIN, authData);
}

export async function signUpUser(authData: SignUpRequest) {
  return authUser(API_ROUTES.SIGN_UP, authData);
}

export async function getUserByLogin(props: { accessToken: string; login: string }) {
  const { login, accessToken } = props;
  const res = await fetch(`${API_ROUTES.USERS}/${login}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await res.json();
  if (!res.ok) {
    const errorMessage = 'Failed to fetch user';
    throw new Error(data.message || errorMessage);
  }

  return data;
}
