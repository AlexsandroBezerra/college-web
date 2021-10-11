import { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";

import { LoadingPage } from "../components";
import { CookiesKeys } from "../constants";

export function withGuest(Page: NextPage<any>): NextPage<any> {
  function WrappedPage() {
    const [isLoading, setIsLoading] = useState(true);
    const { push } = useRouter();

    useEffect(() => {
      const cookies = parseCookies();

      if (cookies[CookiesKeys.TOKEN]) {
        push("/dashboard");
      } else {
        setIsLoading(false);
      }
    }, [push]);

    if (isLoading) return <LoadingPage />;

    return <Page />;
  }

  WrappedPage.displayName = `withGuest(${Page.displayName})`;

  return WrappedPage;
}
