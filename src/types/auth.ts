type BaseUserData = {
  login: string;
  email: string;
  password: string;
};

export type User = {
  id: number | string;
  login: string;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

export type ApiError = {
  statusCode: number;
  message: string;
  error?: string;
};

export type UserPersonalData = Omit<BaseUserData, 'password'> & {
  accessToken: string | null;
  firstName: string;
  lastName: string;
};

export type AuthData = Pick<BaseUserData, 'login' | 'password'>;

export type RegistrationData = BaseUserData & Pick<User, 'firstName' | 'lastName'>;

export type LoginRequest = AuthData;

export type AuthMessageResponse = {
  statusText: string;
  message: string;
};

export type LoginSuccessResponse = AuthMessageResponse & {
  accessToken: string;
};

export type UserStateType = Pick<User, 'email' | 'login'>;

export type UserProfileResponse = Pick<User, 'id' | 'email' | 'login'>;

export type UpdateUser = Partial<RegistrationData>;
