import React from 'react';

function Button({ Text, Icon }) {
  return (
    <button
      type="button"
      className="inline-flex items-center w-36 rounded-3xl justify-center gap-x-1.5 bg-tertiary hover:bg-quaternary py-2 border-black border-2 focus:outline-none hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-secondary h-11"
    >
      {Icon && <Icon className="mr-1 text-xl" />}
      <span className="font-bold">{Text}</span>
    </button>
  );
}

export default Button;

