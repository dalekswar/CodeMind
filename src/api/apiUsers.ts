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
    const error = new Error(data.message || errorMessage);
    throw error;
  }

  return data;
}
export async function loginUser(authData: LoginRequest) {
  return authUser(API_ROUTES.LOGIN, authData);
}

export async function signUpUser(authData: SignUpRequest) {
  return authUser(API_ROUTES.SIGN_UP, authData);
}
