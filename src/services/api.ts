import axios, { AxiosError } from "axios";

export type DefaultErrorResponse = {
  message: string;
  status: number;
};

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/api",
});

export const apiException = (error: any) => {
  if (!axios.isAxiosError(error)) {
    return {
      message: (error?.message ?? "Erro indefinido do cliente") as string,
      status: null,
    };
  }

  const axiosError = error as AxiosError<DefaultErrorResponse>;

  return {
    message: axiosError.response?.data?.message || "Ocorreu um erro inesperado",
    status: axiosError?.response?.status || null,
  };
};
