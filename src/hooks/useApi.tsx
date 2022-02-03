import React from 'react';
import useAsync, { IAsync } from 'hooks/useAsync';

interface IApi<T> {
  apiFun: () => Promise<T>
}

function useApi<T, TT>({ apiFun }: IApi<T>): IAsync<T, TT> {
  const {
    execute, isIdle, isLoading, isSuccess, isError, data, error,
  } = useAsync<T, TT>();

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
