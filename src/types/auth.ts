export interface ApiError {
  statusCode: number;
  message: string;
  error?: string;
}

export type HealthResponse = string;

export interface SignUpDto {
  email: string;
  login: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export interface SignUpSuccessResponse {
  statusText: string;
  message: string;
}

export interface LoginDto {
  login: string;
  password: string;
}

export interface LoginSuccessResponse {
  statusText: string;
  message: string;
}

export interface UserProfileResponse {
  id: string;
  email: string;
  login: string;
  firstName?: string;
  lastName?: string;
}

export interface UpdateUserDto {
  email?: string;
  login?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
}
