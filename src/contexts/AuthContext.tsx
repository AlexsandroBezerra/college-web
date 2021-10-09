import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import Router from "next/router";

import { api } from "../services/apiClient";
import { CookiesKeys } from "../constants";
import { AxiosResponse } from "axios";
import { useToast } from "@chakra-ui/react";

type User = {
  id: string;
  name: string;
  email: string;
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  isAuthenticated: boolean;
  user?: User;
};

type AuthProviderProps = {
  children: ReactNode;
};

type SignInResponse = {
  user: User;
  token: string;
  refreshToken: string;
};

export const AuthContext = createContext({} as AuthContextData);

let authChannel: BroadcastChannel;

export function signOut() {
  destroyCookie(undefined, CookiesKeys.TOKEN);
  destroyCookie(undefined, CookiesKeys.REFRESH_TOKEN);

  authChannel.postMessage("signOut");

  Router.push("/professor");
}

const THIRTY_DAYS = 60 * 60 * 24 * 30;

export const tokenCookieConfigs = {
  maxAge: THIRTY_DAYS,
  path: "/",
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = Boolean(user);
  const toast = useToast();

  useEffect(() => {
    authChannel = new BroadcastChannel("auth");

    authChannel.onmessage = (message) => {
      switch (message.data) {
        case "signOut":
          signOut();
          break;

        case "signIn":
          Router.push("/dashboard");
          break;

        default:
          break;
      }
    };
  }, []);

  useEffect(() => {
    const { [CookiesKeys.TOKEN]: token } = parseCookies();

    if (token) {
      api
        .get("sessions/me")
        .then((response) => {
          const { id, name, email } = response.data;

          setUser({ id, name, email });
        })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post<{}, AxiosResponse<SignInResponse>>(
        "sessions",
        { email, password }
      );

      const { user, token, refreshToken } = response.data;

      setCookie(undefined, CookiesKeys.TOKEN, token, tokenCookieConfigs);
      setCookie(
        undefined,
        CookiesKeys.REFRESH_TOKEN,
        refreshToken,
        tokenCookieConfigs
      );

      setUser(user);
      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      Router.push("/dashboard");
      authChannel.postMessage("signIn");
    } catch (err) {
      console.log(err);

      const THREE_SECONDS = 3000;

      toast({
        title: "Credenciais inválidas",
        description: "A combinação email/senha está errada, tente novamente.",
        status: "error",
        duration: THREE_SECONDS,
        isClosable: true,
        position: "top-right",
      });
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
