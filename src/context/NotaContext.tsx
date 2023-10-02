import React from 'react';
import INota from '../interfaces/INota';
import useFetch from '../hooks/useFetch';
import IResponseAPI from '../interfaces/IResponseApi';
interface INotaContext {
  notas: INota[];
  loading: boolean;
  error: string | null;
  setNotas: React.Dispatch<React.SetStateAction<INota[]>>;
}

export const NotaContext = React.createContext<INotaContext>(
  {} as INotaContext,
);

const NotaContextProvider = ({children}: React.PropsWithChildren) => {
  const {data, loading, error} = useFetch<IResponseAPI<INota[] | null>>(
    `${process.env.API_URL}/notas`,
  );
  const [notas, setNotas] = React.useState<INota[]>([]);

  React.useEffect(() => {
    if (data && data.data && Array.isArray(data.data)) {
      setNotas(data.data);
    }
  }, [data]);

  return (
    <NotaContext.Provider value={{notas, setNotas, loading, error}}>
      {children}
    </NotaContext.Provider>
  );
};

export default NotaContextProvider;
