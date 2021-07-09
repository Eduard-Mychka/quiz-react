import React from 'react';
import Button from '@material-ui/core/Button';

import './FinishedQuiz.scss';

const FinishedQuiz = (props) => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total ++
    }
    return total
  }, 0)
  return (
    <>
    <h1>That's all</h1>
    <div className="finished-quiz">
      <h3>Your result</h3>
      <ul>
        {props.quiz.map((quizItem, index) => {
          const cls = [
            'far',
            props.results[quizItem.id] === 'error' ? 'fa-times-circle red' : 'fa-check-circle green',
            [props.results[quizItem.id]]
          ]
          return (
            <li key={index}>
              <strong>{index + 1}</strong>.&nbsp;
              {quizItem.question}
              <i className={cls.join(' ')}/>
            </li>
          )
        })}
      </ul>
      <p className="result">Правильно {successCount} из {props.quiz.length}</p>
      <div>
        <Button
          className="me-2"
          onClick={props.onRetry}
          color="primary"
          size="small"
          variant="contained"
        >
          Повторить
        </Button>
        <Button
          // onClick={props.onRetry}
          color="secondary"
          variant="contained"
          size="small"
        >
          Перейти в список текстов
        </Button>            
      </div>
    </div>
    </>
  );
}

export default FinishedQuiz;
