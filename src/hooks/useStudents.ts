import useSWR, { SWRConfiguration } from "swr";

import { api } from "../services/apiClient";

type Student = {
  id: number;
  name: string;
};

type UseStudents = {
  students?: Student[];
  isValidating: boolean;
  isLoading: boolean;
  isError: boolean;
};

export function useStudents(swrConfigs?: SWRConfiguration): UseStudents {
  const { data, isValidating, error } = useSWR<Student[]>(
    "students",
    () => api.get<Student[]>("students").then((res) => res.data),
    swrConfigs
  );

  return {
    students: data,
    isValidating,
    isLoading: !error && !data,
    isError: error,
  };
}
