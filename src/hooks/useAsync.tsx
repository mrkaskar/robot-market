import React from 'react';

enum Status {
  IDLE,
  PENDING,
  REJECTED,
  RESOLVED,
}

interface AsyncState<T> {
  status: Status,
  data: T | null
  error: unknown
}

export interface IAsync<T> {
  isIdle: boolean
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
  data: T | null,
  error: unknown,
  execute: (promise: Promise<T>) => void,
}

export default function useAsync<T>(): IAsync<T> {
  const state: AsyncState<T> = { status: Status.IDLE, data: null, error: null };
  const [{ status, data, error }, setState] = React.useState(state);

  function setData(d: T): void {
    setState({ data: d, status: Status.RESOLVED, error: null });
  }

  function setError<TT>(e: TT): void {
    setState({ data: null, status: Status.REJECTED, error: e });
  }

  function execute(promise: Promise<T>): void {
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
    execute: React.useCallback(execute, []),
  };
}
