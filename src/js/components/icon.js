import React from 'react'
import './icon.scss';

const Icon = (props) => {
  return (
    <span className="icon material-icons" onMouseUp={props.action}>{props.icon}</span>
  )
}

export default Icon;
