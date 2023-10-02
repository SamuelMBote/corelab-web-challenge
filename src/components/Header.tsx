import InputSearch from './InputSearch';
import NotePNG from '../assets/note.png';
import CloseSvg from './svg/CloseSvg';
import React from 'react';
import useNota from '../funcs/useNota';
import pesquisarNotas from '../funcs/pesquisarNotas';
import todasNotas from '../funcs/todasNotas';
import IResponseAPI from '../interfaces/IResponseApi';
import INota from '../interfaces/INota';
import FiltroCor from './FiltroCor';
import {TCores} from '../interfaces/TCores';

const Header = () => {
  const {setNotas} = useNota();
  const [pesquisa, setPesquisa] = React.useState<string>('');
  const [filtroCor, setFiltroCor] = React.useState<{
    edit: boolean;
    cores: TCores[];
  }>({edit: false, cores: []});
  async function execPequisa() {
    let res: IResponseAPI<INota[] | null>;

    if (
      (pesquisa && pesquisa.length > 0) ||
      (filtroCor.cores && filtroCor.cores.length > 0)
    ) {
      res = await pesquisarNotas(pesquisa, filtroCor.cores);
    } else {
      res = await todasNotas();
    }
    if (res && res.data) {
      setNotas(res.data);
    } else {
      setNotas([]);
    }
  }
  const handleFiltro: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const check = e.currentTarget.checked;
    setFiltroCor({...filtroCor, edit: check});
  };

  React.useEffect(() => {
    execPequisa();
  }, [pesquisa, filtroCor.cores]);

  return (
    <nav className="bg-white shadow h-14 p-2">
      <div className="container mx-auto">
        <FiltroCor filtro={filtroCor} setFiltro={setFiltroCor} />
        <div className="flex justify-between">
          <div className="flex justify-start items-center gap-4">
            <img src={NotePNG} alt="Bloco de Notas" />
            <p className="text-slate-600  font-normal font-['Inter']">
              CoreNotes
            </p>
            <InputSearch
              value={pesquisa}
              onChange={(e) => setPesquisa(e.currentTarget.value)}
            />
            <div className="flex items-center ">
              <input
                id="cores"
                type="checkbox"
                value={filtroCor.edit ? 'on' : 'off'}
                checked={filtroCor.edit}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                onChange={handleFiltro}
              />
              <label
                htmlFor="cores"
                className="ml-2 text-sm font-medium text-neutral-800"
              >
                Filtrar cores
              </label>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <CloseSvg width={19} height={19} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
