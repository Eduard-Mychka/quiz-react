import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

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
      <Tooltip title="Menu" placement="right">
        <i 
          className={cls.join(' ')}
          onClick={props.onToggle}
        />
      </Tooltip>
    </div>
  );
}

export default MenuToggle;
