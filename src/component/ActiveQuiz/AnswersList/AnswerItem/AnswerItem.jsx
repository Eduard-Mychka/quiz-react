import React from 'react';

import './AnswerItem.scss'

const AnswerItem = (props) => {
  return (
    <li 
      className="answer-item" 
      onClick={() => (
        props.onAnswerClick(props.answer.id)
      )}
    >
      {props.answer.text}
    </li>
  );
}

export default AnswerItem;
