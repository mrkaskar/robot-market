import React from 'react';

enum Status {
  IDLE,
  PENDING,
  REJECTED,
  RESOLVED,
}

interface AsyncState {
  status: Status,
  data: unknown,
  error: unknown
}

interface IAsync {
  isIdle: boolean
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
  data: unknown,
  error: unknown,
  execute: (promise: Promise<unknown>) => void,
}

export default function useAsync(): IAsync {
  const state: AsyncState = { status: Status.IDLE, data: null, error: null };
  const [{ status, data, error }, setState] = React.useState(state);

  function setData<T>(d: T): void {
    setState({ data: d, status: Status.RESOLVED, error: null });
  }

  function setError<T>(e: T): void {
    setState({ data: null, status: Status.REJECTED, error: e });
  }

  function execute<T>(promise: Promise<T>): void {
    setState({ data: null, status: Status.PENDING, error: null });
    promise.then((d) => setData(d), (e) => setError(e));
  }

  return {
    isIdle: status === Status.IDLE,
    isLoading: status === Status.PENDING,
    isError: status === Status.REJECTED,
    isSuccess: status === Status.RESOLVED,
    data,
    error,
    execute,
  };
}
