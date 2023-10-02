import React from 'react';
import Nota from './Nota';
import INota from '../interfaces/INota';
import useNota from '../funcs/useNota';

const Painelnotas = () => {
  const {notas} = useNota();
  const [favoritas, setFavoritas] = React.useState<(INota | null)[]>([]);
  const [outras, setOutras] = React.useState<(INota | null)[]>([]);

  React.useEffect(() => {
    if (notas && Array.isArray(notas)) {
      const fav = notas.map((i) => (i.favorito ? i : null)).filter(Boolean);
      const out = notas.map((i) => (i.favorito ? null : i)).filter(Boolean);
      setFavoritas(fav);
      setOutras(out);
    }
  }, [notas]);
  return (
    <section className=" pb-8 min-h-screen">
      <div className="container mx-auto">
        {favoritas && favoritas.length > 0 && (
          <div className="flex flex-col p-2">
            <p className="w-72 h-4 text-zinc-700 text-xs font-normal font-['Inter'] ml-6 my-2">
              Favoritas
            </p>
            <div className="flex flex-col justify-center lg:justify-start  items-center md:flex-row gap-10 flex-wrap">
              {favoritas.map(
                (nota) => nota && <Nota key={nota.id} {...nota} />,
              )}
            </div>
          </div>
        )}
        {outras && outras.length > 0 && (
          <div className="flex flex-col  p-2">
            <p className="w-72 h-4 text-zinc-700 text-xs font-normal font-['Inter'] ml-6 my-2">
              {favoritas.length > 0 ? 'Outras' : 'Todas'}
            </p>
            <div className="flex flex-col justify-start items-center md:flex-row gap-10 flex-wrap">
              {outras.map((nota) => nota && <Nota key={nota.id} {...nota} />)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Painelnotas;
