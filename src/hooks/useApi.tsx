import React from 'react';
import useAsync, { IAsync } from './useAsync';

interface IApi {
  apiFun: () => Promise<unknown>
}

function useApi({ apiFun }: IApi): IAsync {
  const {
    execute, isIdle, isLoading, isSuccess, isError, data, error,
  } = useAsync();

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
