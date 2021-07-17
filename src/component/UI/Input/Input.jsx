import React from 'react';
import './Input.scss';

function isInvalid({valid, touched, shouldValidate}) {
  return !valid && shouldValidate && touched
}

const Input = (props) => {
  const inputType = props.type || 'text';
  const option = props.name === 'option' ? 'col-6' : '';
  const cls = ['input', option]
  const htmlFor = `${inputType}-${Math.random()}`

  if (isInvalid(props)) {
    cls.push('invalid')
  }

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>
        {props.label}
      </label>
      <input 
        type={inputType} 
        id={htmlFor} 
        value={props.value} 
        onChange={props.onChange}
      />

      { <span>
          { isInvalid(props) ? (props.errorMessage || 'Ведите верное значение') : null }
        </span> 
      }
    </div>
  );
}

export default Input;
