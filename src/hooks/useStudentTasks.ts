import useSWR, { SWRConfiguration } from "swr";

import { api } from "../services/apiClient";

type Task = {
  id: number;
  title: string;
  reward: number;
  isEnabled: true;
  createdAt: string;
};

type StudentTasks = {
  id: number;
  name: string;
  score: number;
  tasksDone: Task[];
  tasksPending: Task[];
};

type UseStudentTasks = {
  studentTasks?: StudentTasks;
  isValidating: boolean;
  isLoading: boolean;
  isError: boolean;
};

export function useStudentTasks(
  registration: number,
  shouldNotFetch?: boolean,
  swrConfigs?: SWRConfiguration
): UseStudentTasks {
  const { data, isValidating, error } = useSWR<StudentTasks>(
    shouldNotFetch ? null : `studentTasks-${registration}`,
    () =>
      api
        .get<StudentTasks>(`students/${registration}/tasks`)
        .then((res) => res.data),
    swrConfigs
  );

  return {
    studentTasks: data,
    isValidating,
    isLoading: !error && !data,
    isError: error,
  };
}
