import axios, { AxiosError } from "axios";
import { parseCookies, setCookie } from "nookies";
import { CookiesKeys } from "../constants";

import { signOut, tokenCookieConfigs } from "../contexts";
import { AuthTokenError } from "./errors/AuthTokenError";

let isRefreshing = false;
let failedRequestQueue = [];

type ResponseError = {
  code: string;
};

type RefreshResponseBody = {
  token: string;
  refreshToken: string;
};

export function setupApiClient(ctx = undefined) {
  const cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization: `Bearer ${cookies[CookiesKeys.TOKEN]}`,
    },
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<ResponseError>) => {
      if (error.response.status === 401) {
        if (error.response.data?.code === "token.expired") {
          const { [CookiesKeys.REFRESH_TOKEN]: refreshToken } =
            parseCookies(ctx);
          const originalConfig = error.config;

          if (!isRefreshing) {
            isRefreshing = true;

            api
              .post("sessions/refresh", { refreshToken })
              .then((response) => {
                const { token, refreshToken } =
                  response.data as RefreshResponseBody;

                setCookie(ctx, CookiesKeys.TOKEN, token, tokenCookieConfigs);
                setCookie(
                  ctx,
                  CookiesKeys.REFRESH_TOKEN,
                  refreshToken,
                  tokenCookieConfigs
                );

                api.defaults.headers["Authorization"] = `Bearer ${token}`;

                failedRequestQueue.forEach((request) =>
                  request.onSuccess(token)
                );

                failedRequestQueue = [];
              })
              .catch((err) => {
                failedRequestQueue.forEach((request) => request.onFailure(err));
                failedRequestQueue = [];

                if (process.browser) {
                  signOut();
                }
              })
              .finally(() => {
                isRefreshing = false;
              });
          }

          return new Promise((resolve, reject) => {
            failedRequestQueue.push({
              onSuccess: (token: string) => {
                originalConfig.headers["Authorization"] = `Bearer ${token}`;

                resolve(api(originalConfig));
              },

              onFailure: (err: AxiosError) => {
                reject(err);
              },
            });
          });
        } else {
          if (process.browser) {
            signOut();
          } else {
            return Promise.reject(new AuthTokenError());
          }
        }

        return Promise.reject(error);
      }
    }
  );

  return api;
}
