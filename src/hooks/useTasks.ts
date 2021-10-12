import useSWR, { SWRConfiguration } from "swr";

import { api } from "../services/apiClient";

type Task = {
  id: number;
  title: string;
  reward: number;
};

type UseTasks = {
  tasks?: Task[];
  isValidating: boolean;
  isLoading: boolean;
  isError: boolean;
};

export function useTasks(swrConfigs?: SWRConfiguration): UseTasks {
  const { data, isValidating, error, mutate } = useSWR<Task[]>(
    "tasks",
    () => api.get<Task[]>("tasks").then((res) => res.data),
    swrConfigs
  );

  return {
    tasks: data,
    isValidating,
    isLoading: !error && !data,
    isError: error,
  };
}
