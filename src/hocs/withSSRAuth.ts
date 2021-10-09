import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { destroyCookie, parseCookies } from "nookies";

import { CookiesKeys } from "../constants";
import { AuthTokenError } from "../services/errors/AuthTokenError";

export function withSSRAuth<P>(
  fn: GetServerSideProps<P>
): GetServerSideProps<P> {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);
    const token = cookies[CookiesKeys.TOKEN];

    if (!token) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    try {
      return await fn(ctx);
    } catch (err) {
      if (err instanceof AuthTokenError) {
        destroyCookie(undefined, CookiesKeys.TOKEN);
        destroyCookie(undefined, CookiesKeys.REFRESH_TOKEN);

        return {
          redirect: {
            destination: "/",
            permanent: false,
          },
        };
      }
    }
  };
}
