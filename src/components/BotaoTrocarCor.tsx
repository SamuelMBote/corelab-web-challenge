import React from 'react';

const BotaoTrocarCor = ({
  cor,
  ...props
}: React.ComponentProps<'button'> & {cor: string}) => {
  const bg = `bg-${cor}`;
  if (bg === 'bg-white') {
    return (
      <button
        {...props}
        value={bg}
        className={`w-9 h-9 ${bg} border border-2 border-zinc-600 rounded-full`}
      ></button>
    );
  } else {
    return (
      <button
        {...props}
        value={bg}
        className={`w-9 h-9 ${bg} rounded-full`}
      ></button>
    );
  }
};

export default BotaoTrocarCor;
