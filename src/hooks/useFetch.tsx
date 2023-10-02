import React from 'react';
import IFetchState from '../interfaces/IFetchState';

export default function useFetch<T>(
  url: URL | RequestInfo,
  options?: RequestInit,
): IFetchState<T> {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const optionsRef = React.useRef<RequestInit>(options ? options : null);
  React.useEffect(() => {
    const controller = new AbortController();
    const {signal} = controller;
    async function fetchData() {
      try {
        setData(null);
        setLoading(true);
        const res = await fetch(url, {signal, ...optionsRef.current});
        if (!res.ok) throw new Error(`Erro ao fazer fetch: ${res.status}`);
        const json = (await res.json()) as T;
        if (!signal.aborted) setData(json);
      } catch (error) {
        if (!signal.aborted && error instanceof Error) setError(error.message);
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, [url]);

  return {data, loading, error};
}
