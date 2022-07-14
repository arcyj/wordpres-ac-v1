import React from 'react';
import TooltipQuestion from '../assets/images/icons/svg/tooltipQuestion';

const Tooltip = (props) => {
  return (
    <div className="relative">
      <span className="tooltip left" data-text={props.text} >
        <TooltipQuestion />
      </span>
    </div>
  )
}

export default Tooltip;
