import React from 'react';
import Star from './svg/Star';
import INota from '../interfaces/INota';

import cudNota from '../funcs/cudNota';
import useNota from '../funcs/useNota';

const CriarNota = () => {
  const [nota, setNota] = React.useState<INota>({
    favorito: false,
    texto: '',
    titulo: '',
    cor: 'bg-white',
  });
  const {notas, setNotas} = useNota();

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setNota({...nota, [e.target.id]: e.target.value});
  };

  const handleSave: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    if (nota.texto) {
      const res = await cudNota(nota, 'POST');
      if (res && res.data) {
        setNotas([...notas, res.data]);
        setNota({
          favorito: false,
          texto: '',
          titulo: '',
          cor: 'bg-white',
        });
      } else {
        setNotas([...notas]);
      }
    }
  };
  return (
    <section className="">
      <div className="container mx-auto p-6 flex justify-center">
        <div
          className={`w-96 h-max ${nota.cor} rounded-2xl  lg:rounded-sm shadow border border-zinc-300  `}
        >
          <form>
            <div className="relative">
              <label htmlFor="titulo" className="sr-only">
                Titulo
              </label>
              <input
                type="text"
                className="p-4 resize-none w-full h-10 text-neutral-800 placeholder:text-neutral-400 font-['Inter'] border-zinc-300 outline-none font-bold bg-transparent  focus:ring-0 ring-0 border-none focus:border-none"
                name="titulo"
                id="titulo"
                placeholder="Insira um Título"
                value={nota.titulo}
                onChange={handleChange}
                autoComplete="off"
              />

              <Star
                onClick={() => {
                  setNota({...nota, favorito: !nota.favorito});
                }}
                fill={nota.favorito ? '#FFA000' : 'transparent'}
                width={24}
                height={24}
                className="absolute right-2.5 bottom-2 p-0 m-0"
              />
            </div>
          </form>
          <div>
            <hr className="border border-t-2" />
          </div>
          <form>
            <div className="w-full bg-trasnsparent ">
              <div className="">
                <label htmlFor="texto" className="sr-only">
                  Adicione o texto
                </label>
                <textarea
                  className=" p-4 resize-none w-full  rounded-b-2xl  text-neutral-800 placeholder:text-neutral-400 bg-transparent font-['Inter'] border-zinc-300 outline-none overflow-hidden  focus:ring-0 ring-0 border-none focus:border-none"
                  name="texto"
                  id="texto"
                  placeholder="Criar nota..."
                  value={nota.texto}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="flex items-center justify-end h-10">
                <div className="flex">
                  {nota.texto.length > 0 && (
                    <button
                      onClick={handleSave}
                      type="button"
                      className=" justify-center text-sm items-center p-2 text-neutral-600  hover:bg-gray-100 "
                    >
                      Salvar
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CriarNota;
