import axios, { AxiosError, AxiosResponse } from "axios";

export const authAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  },
});

export interface ErrorQueryResponse {
  error: {
    code: string;
    message: string;
  };
  success: boolean;
}
export interface ErrorResponse {
  message: string;
  code: string;
  success: boolean;
}

export interface SignInInput {
  phone: string;
  password: string;
}

export interface SignInResponse {
  token: string;
  user: {
    id: string;
    name: string;
    phone: string;
    role: string;
    createdAt: string;
  };
}

export const signInApi = async (
  payload: SignInInput,
  clientID: string,
  redirectURL: string
): Promise<SignInResponse> => {
  const { data } = await authAPI.post(
    `/auth/sign-in?client_id=${clientID}&redirect_uri=${redirectURL}`,
    payload
  );
  return data;
};

export const showError = (error: AxiosError) => {
  const res = error.response as AxiosResponse<ErrorResponse>;
  const message = res?.data?.message;

  console.error(message === undefined ? "Something went wrong!" : message);
};
