import {TCores} from '../interfaces/TCores';
import React from 'react';
const CheckBoxCor = ({
  cor,
  setListaCores,
}: {
  cor: string;
  setListaCores: React.Dispatch<React.SetStateAction<TCores[]>>;
}) => {
  const bg = `bg-${cor}`;
  const text = `text-${cor}`;
  const [checked, setChecked] = React.useState<boolean>(false);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const color = e.currentTarget.value as TCores;
    if (e.currentTarget.checked) {
      setListaCores((l) => [...l, color]);
    } else {
      setListaCores((l) => l.filter((i: TCores) => (i === color ? null : i)));
    }
    setChecked(e.currentTarget.checked);
  };
  if (bg === 'bg-white') {
    return (
      <div className="block">
        <div className="mt-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              value={bg}
              className={`w-9 h-9 ${bg} ${text}  rounded-full 
              border-none ring-1 text-gray-300 focus:ring-2 focus:ring-zinc-600 ring-zinc-600 `}
              checked={checked}
              onChange={handleChange}
            />
            <span className="sr-only">Circle checkbox</span>
          </label>
        </div>
      </div>
    );
  } else {
    return (
      <div className="block">
        <div className="mt-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              value={bg}
              className={`w-9 h-9 ${bg} ${text}  rounded-full 
              border-none  ring-0 focus:ring-0 `}
              checked={checked}
              onChange={handleChange}
            />
            <span className="sr-only">Circle checkbox</span>
          </label>
        </div>
      </div>
    );
  }
};

export default CheckBoxCor;
