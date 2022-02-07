import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false); //by default false
  return (
    <article className='question'>
      <header  onClick={() => setShowInfo(!showInfo)}>
        <h4>{title}</h4>
        <button className='btn' >
          
          
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;