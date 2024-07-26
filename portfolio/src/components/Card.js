import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md"

const Card = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="rounded-3xl w-80 p-4 bg-tertiary border border-black border-2 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-staatliches">{title}</h2>
        <button
          onClick={handleToggle}
        >
          {isExpanded ? <MdKeyboardArrowUp size={24}/> : <MdKeyboardArrowDown size={24}/>}
        </button>
      </div>
      {isExpanded && (
        <div className="mt-4">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
