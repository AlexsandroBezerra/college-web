import { createContext, ReactNode, useCallback, useState } from "react";

type RegistrationContextData = {
  registration?: number;
  setRegistration: (registration: number) => void;
  clear: () => void;
};

type RegistrationProviderProps = {
  children: ReactNode;
};

export const RegistrationContext = createContext({} as RegistrationContextData);

export function RegistrationProvider({ children }: RegistrationProviderProps) {
  const [registration, setRegistration] = useState<number | undefined>();

  const clear = useCallback(() => {
    setRegistration(undefined);
  }, []);

  return (
    <RegistrationContext.Provider
      value={{ registration, setRegistration, clear }}
    >
      {children}
    </RegistrationContext.Provider>
  );
}
