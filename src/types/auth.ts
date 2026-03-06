export interface ApiError {
  statusCode: number;
  message: string;
  error?: string;
}
export type HealthResponse = string;
export interface accessToken {
  accessToken: string | null;
}

export interface SignUpRequest {
  email: string;
  login: string;
  password: string;
}

export interface SignUpSuccessResponse {
  statusText: string;
  message: string;
}

export interface RegistrationSuccessResponse {
  id: number;
  email: string;
  login: string;
  firstName: string | null;
  lastName: string | null;
  createdAt: string;
  updatedAt: string;
}
export interface UserStateType {
  email: string;
  login: string;
}

export interface LoginRequest {
  login: string;
  password: string;
}

export interface LoginSuccessResponse {
  statusText: string;
  message: string;
  access: string;
}

export interface UserProfileResponse {
  id: string;
  email: string;
  login: string;
}

export interface UpdateUser {
  email?: string;
  login?: string;
  password?: string;
}
