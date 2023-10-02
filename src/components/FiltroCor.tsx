import React from 'react';
import {TCores} from '../interfaces/TCores';
import CheckBoxCor from './CheckBoxCor';
import {cores} from '../assets/cores';

const FiltroCor = ({
  filtro,
  setFiltro,
}: {
  filtro: {
    edit: boolean;
    cores: TCores[];
  };
  setFiltro: React.Dispatch<
    React.SetStateAction<{
      edit: boolean;
      cores: TCores[];
    }>
  >;
}) => {
  const [listaCores, setListaCores] = React.useState<TCores[]>([]);
  React.useEffect(() => {
    setFiltro({...filtro, cores: [...listaCores]});
  }, [listaCores]);
  return (
    <div className={`${filtro.edit ? '' : 'hidden'} absolute flex z-50`}>
      <div className=" absolute flex flex-wrap justify-start p-2 items-center top-12 w-96 md:w-max gap-2 bg-white rounded-lg shadow border border-zinc-300">
        {cores.map((c) => (
          <CheckBoxCor key={c} setListaCores={setListaCores} cor={c} />
        ))}
      </div>
    </div>
  );
};

export default FiltroCor;
