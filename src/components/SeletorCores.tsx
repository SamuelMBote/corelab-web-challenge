import React from 'react';
import {TCores} from '../interfaces/TCores';
import BotaoTrocarCor from './BotaoTrocarCor';
import {cores} from '../assets/cores';

export default function SeletorCores({
  editor,
  setEditor,
}: {
  editor: {
    edit: boolean;
    cor: TCores;
  };
  setEditor: React.Dispatch<
    React.SetStateAction<{
      edit: boolean;
      cor: TCores;
    }>
  >;
}) {
  const handleChangeColor: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const cor = e.currentTarget.value as TCores;
    setEditor({...editor, edit: false, cor});
  };
  return (
    <div className={`${editor.edit ? '' : 'hidden'} relative flex`}>
      <div className="absolute grid grid-cols-6 md:grid-cols-12 justify-start p-2 items-center -top-14 sm:-top-24 left-6 w-max gap-2 bg-white rounded-lg shadow border border-zinc-300">
        {cores.map((c) => {
          if (c !== 'white')
            if (`bg-${c}` === editor.cor) {
              return (
                <BotaoTrocarCor
                  onClick={handleChangeColor}
                  key={c}
                  cor={'white'}
                />
              );
            } else {
              return (
                <BotaoTrocarCor onClick={handleChangeColor} key={c} cor={c} />
              );
            }
        })}
      </div>
    </div>
  );
}
