import React from 'react';
import INota from '../interfaces/INota';
import Star from './svg/Star';
import useNota from '../funcs/useNota';

import CloseSvg from './svg/CloseSvg';
import EditSvg from './svg/EditSvg';
import ColorSvg from './svg/ColorSvg';
import DoneSvg from './svg/DoneSvg';
import cudNota from '../funcs/cudNota';
import SeletorCores from './SeletorCores';
import {TCores} from '../interfaces/TCores';

const Nota = (data: INota) => {
  const {notas, setNotas} = useNota();
  const [nota, setNota] = React.useState<INota>(data);

  const [disableEdit, setdisableEdit] = React.useState<boolean>(true);
  const [editColor, setEditColor] = React.useState<{
    edit: boolean;
    cor: TCores;
  }>({edit: false, cor: nota.cor});
  const texto = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    setNotas(
      notas.map((n) => {
        if (nota.id === n.id) {
          return nota;
        } else return n;
      }),
    );
  }, [nota]);

  React.useEffect(() => {
    if (disableEdit === false) {
      texto.current?.focus();
    }
  }, [disableEdit]);

  React.useEffect(() => {
    changeColor();
  }, [editColor.cor]);

  const changeColor = async () => {
    const res = await cudNota({...nota, cor: editColor.cor}, 'PUT');
    if (res && res.data) {
      setNota({...res.data});
      setNotas(
        notas.map((n) => {
          if (res.data && res.data.id && n.id === res.data.id) {
            return res.data;
          } else return n;
        }),
      );
    }
  };
  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setNota({...nota, [e.target.id]: e.target.value});
  };

  const handleFavorite: React.MouseEventHandler<HTMLButtonElement> = async (
    e,
  ) => {
    e.preventDefault();

    const res = await cudNota({...nota, favorito: !nota.favorito}, 'PUT');
    if (res && res.data) {
      setNotas(
        notas.map((n) => {
          if (res.data && res.data.id && n.id === res.data.id) {
            return res.data;
          } else return n;
        }),
      );
    }
  };
  const handleDelete: React.MouseEventHandler<HTMLButtonElement> = async (
    e,
  ) => {
    e.preventDefault();
    const res = await cudNota(nota, 'DELETE');
    if (res && res.data)
      setNotas(
        notas.filter((n) =>
          res && res.data && n.id === res.data.id ? null : n,
        ),
      );
  };
  const handleSaveChange: React.MouseEventHandler<HTMLButtonElement> = async (
    e,
  ) => {
    e.preventDefault();

    const res = await cudNota(nota, 'PUT');
    if (res && res.data) {
      setNotas(
        notas.map((n) => {
          if (res.data && res.data.id && n.id === res.data.id) {
            return res.data;
          } else return n;
        }),
      );
    }
    setdisableEdit((e) => !e);
  };

  return (
    <div
      className={`w-96 h-fit rounded-2xl ${nota.cor} shadow border border-zinc-300 `}
    >
      <SeletorCores editor={editColor} setEditor={setEditColor} />
      <form>
        <div className="relative">
          <input
            type="text"
            className="  p-4 resize-none w-full h-10 text-neutral-800 placeholder:text-neutral-400  focus:ring-0 ring-0 border-none focus:border-none
            font-['Inter']  border-zinc-300 outline-none font-bold bg-transparent "
            name="titulo"
            id="titulo"
            placeholder="Insira um Título"
            value={nota.titulo}
            onChange={handleChange}
            autoComplete="off"
            disabled={disableEdit}
          />
          <button
            onClick={handleFavorite}
            className="absolute right-2.5 bottom-2 p-0 m-0"
          >
            <Star
              fill={nota.favorito ? '#FFA000' : 'transparent'}
              width={24}
              height={24}
            />
          </button>
        </div>
      </form>
      <div>
        <hr className="border border-t-2" />
      </div>
      <form>
        <div className="w-full h-fit rounded-b-2xl ">
          <div className="">
            <label htmlFor="comment" className="sr-only">
              Adicione o texto
            </label>
            <textarea
              ref={texto}
              cols={100}
              className=" p-4 resize-none w-full h-60  rounded-b-2xl  text-neutral-800 placeholder:text-neutral-400 bg-transparent font-['Inter'] border-zinc-300 outline-none overflow-hidden    focus:ring-0 ring-0 border-none focus:border-none"
              name="texto"
              id="texto"
              placeholder="Insira um texto..."
              value={nota.texto}
              onChange={handleChange}
              disabled={disableEdit}
            ></textarea>
          </div>
          <div className="flex justify-between rounded-b-2xl ">
            <div className="flex">
              {disableEdit ? (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setdisableEdit((e) => !e);
                  }}
                  className="p-2 text-neutral-600 rounded-2xl cursor-pointer hover:bg-white/50 "
                >
                  <EditSvg width={24} height={24} />
                </button>
              ) : (
                <button
                  onClick={handleSaveChange}
                  type="button"
                  className="p-2 text-neutral-600 rounded-2xl hover:bg-white/50 "
                >
                  <DoneSvg width={24} height={24} />
                </button>
              )}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setEditColor({...editColor, edit: !editColor.edit});
                }}
                className="p-2 text-neutral-600 rounded-2xl hover:bg-white/50"
              >
                <ColorSvg width={24} height={24} />
              </button>
            </div>
            <div className="">
              <button
                onClick={handleDelete}
                className="p-2 text-neutral-600 rounded-2xl hover:bg-white/50"
              >
                <CloseSvg width={24} height={24} />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Nota;
