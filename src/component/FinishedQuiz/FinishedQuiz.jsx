import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import './FinishedQuiz.scss';

const FinishedQuiz = (props) => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total ++
    }
    return total
  }, 0)
  return (
    <React.Fragment>
    <h1>That's all</h1>
    <div className="finished-quiz">
      <div className="finished-quiz-head">
        <h3>Your result</h3>
        <p className="result">
          Correct answers {successCount} of {props.quiz.length}
        </p>
      </div>
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
      <div className="finished-quiz-btn">
        <Button
          className="me-2"
          onClick={props.onRetry}
          color="primary"
          size="small"
          variant="contained"
        >
          Take again
        </Button>
        <Link to="/" className="btn-all-test">
          <Button
            onClick={props.onRetry}
            color="secondary"
            variant="contained"
            size="small"
          >
            All tests
          </Button>    
        </Link>
      </div>
    </div>
    </React.Fragment>
  );
}

export default FinishedQuiz;
