import React from 'react';
import {NotaContext} from '../context/NotaContext';
const useNota = () => {
  const context = React.useContext(NotaContext);
  if (!context)
    throw new Error(
      'useNota precisa estar dentro do NotaContextProvider para ser utilizado',
    );
  return context;
};
export default useNota;
