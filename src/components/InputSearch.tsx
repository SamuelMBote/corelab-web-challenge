import React from 'react';
import Search from './svg/Search';

const InputSearch = ({name, ...props}: React.ComponentProps<'input'>) => {
  return (
    <div className="w-64 sm:w-96">
      <label htmlFor="search" className=" sr-only ">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 right-4 flex items-center pl-3 pointer-events-none">
          <Search width={24} height={24} />
        </div>
        <input
          type="search"
          id={name}
          name={name}
          {...props}
          className="block pl-4  text-neutral-800 placeholder:text-neutral-400   text-sm font-normal font-['Inter'] w-full h-7 bg-white rounded-sm shadow border border-zinc-300 outline-none ring-0  focus:ring-0 focus:border-zinc-600 "
          placeholder="Pesquisar notas"
        />
      </div>
    </div>
  );
};

export default InputSearch;
