import { API_URL } from "../../react-app-env";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useRegister = ( data: FormData ) => {
  return useMutation( () => axios.post( `${API_URL}/users`, data ) );
}

export const useLogin = ( data: FormData ) => {
  return useMutation( () => axios.post( `${API_URL}/users/sign_in`, data ) );
}

export const useLogout = () => {
  return useMutation( () => axios.delete( `${API_URL}/users/sign_out` ) );
}
