export type ApiError = {
  statusCode: number;
  message: string;
  error?: string;
};
export type HealthResponse = string;

export type SignUpDto = {
  email: string;
  login: string;
  password: string;
  firstName?: string;
  lastName?: string;
};

export type SignUpSuccessResponse = {
  statusText: string;
  message: string;
};

export type RegistrationSuccessResponse = {
  id: number;
  email: string;
  login: string;
  firstName: string | null;
  lastName: string | null;
  createdAt: string;
  updatedAt: string;
};
export type UserStateType = {
  email: string;
  login: string;
};

export type LoginDto = {
  login: string;
  password: string;
};

export type LoginSuccessResponse = {
  statusText: string;
  message: string;
};

export type UserProfileResponse = {
  id: string;
  email: string;
  login: string;
  firstName?: string;
  lastName?: string;
};

export type UpdateUserDto = {
  email?: string;
  login?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
};
