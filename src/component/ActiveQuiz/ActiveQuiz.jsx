import React from 'react';
import AnswersList from './AnswersList'
import './ActiveQuiz.scss';

const ActiveQuize = (props) => {
  return (
    <>
      <h1>Answer all questions</h1>
      <div className="active-quiz">
        <div className="question">
          <span> 
            <strong>{props.answerNumber}.</strong>&nbsp;
            {props.question}
          </span>
          <small>{props.answerNumber} of {props.quizLength}</small>
        </div>
        <AnswersList 
          state={props.state}
          answers={props.answers}
          onAnswerClick={props.onAnswerClick}
        />
      </div>
    </>
  );
}

export default ActiveQuize;
