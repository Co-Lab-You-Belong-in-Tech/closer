export interface IUser {
  name: string;
  email: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface GenericResponse {
  status: string;
  message: string;
}

export interface ILoginResponse {
  status: string;
  access_token: string;
}

export interface IUserResponse {
  status: string;
  data: {
    user: IUser;
  };
}
