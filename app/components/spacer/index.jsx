import React from 'react';
import axios from 'axios';

const options = {
  small: 'my-2 py-2',
  medium: 'my-4 py-4',
  large: 'my-8 py-4',
};

function initProps(props) {
  const defaults =  {
    space: "medium",
  };
  return {
    ...defaults,
    ...props,
  };
}

const Spacer = (propsSet) => {
  const props = initProps(propsSet);
  return (
    <div className={`${options[props.space]} w-full block`}>
    </div>
  )
}

export default Spacer;
