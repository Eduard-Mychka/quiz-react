import React from 'react';
import './ActiveQuiz.scss';

const ActiveQuize = () => {
  return (
    <div className="active-quiz">
      <p className="question">
        <span>
          <strong>2.</strong>&nbsp;
          How are you?
        </span>
        <small>4 of 12</small>
      </p>

      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  );
}

export default ActiveQuize;
