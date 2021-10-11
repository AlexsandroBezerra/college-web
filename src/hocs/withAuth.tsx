import { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";

import { LoadingPage } from "../components";
import { CookiesKeys } from "../constants";

export function withAuth(Page: NextPage<any>): NextPage<any> {
  function WrappedPage() {
    const [isLoading, setIsLoading] = useState(true);
    const { push } = useRouter();

    useEffect(() => {
      const cookies = parseCookies();

      if (!cookies[CookiesKeys.TOKEN]) {
        push("/");
      } else {
        setIsLoading(false);
      }
    }, [push]);

    if (isLoading) return <LoadingPage />;

    return <Page />;
  }

  WrappedPage.displayName = `withAuth(${Page.displayName})`;

  return WrappedPage;
}
