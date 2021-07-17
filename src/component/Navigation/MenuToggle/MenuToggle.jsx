import React from 'react';

import './MenuToggle.scss';

const MenuToggle = (props) => {
  const cls = [
    'menu-toggle',
    'far',
    'fas'

  ]

  if (props.isOpen) {
    cls.push('fa-times')
    cls.push('open')
  } else {
    cls.push('fa-bars')
  }

  return (
    <div>
      <i 
        className={cls.join(' ')}
        onClick={props.onToggle}
      />
    </div>
  );
}

export default MenuToggle;
