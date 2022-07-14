import React from 'react';

function initProps(props) {
  const defaults =  {
    title: "Default Title",
    borderBottom: false,
  };
  return {
    ...defaults,
    ...props,
  };
}

const headingSizes = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl"
}

const Heading = (propsSet) => {
  const props = initProps(propsSet);
  return (
    <div className={`${props.borderBottom ? "border-b" : ""}`}>
      <h1 className={`${headingSizes[props.headingSize]} mb-1 font-semibold`}>{props.title} {props.children}</h1>
      <p className="text-gray-500 text-sm">{props.text}</p>
    </div>
  )
}

export default Heading;
