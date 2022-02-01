import React from 'react';
import useAsync, { IAsync } from './useAsync';

interface IApi<T> {
  apiFun: () => Promise<T>
}

function useApi<T>({ apiFun }: IApi<T>): IAsync<T> {
  const {
    execute, isIdle, isLoading, isSuccess, isError, data, error,
  } = useAsync<T>();

  React.useEffect(() => {
    execute(apiFun());
  }, [apiFun, execute]);

  return {
    execute,
    isIdle,
    isLoading,
    isSuccess,
    isError,
    data,
    error,
  };
}

export default useApi;
