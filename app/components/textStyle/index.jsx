import React from 'react';

function initProps(props) {
  const defaults =  {
    fontSize: "sm",
    fontWeight: "normal"
  };
  return {
    ...defaults,
    ...props,
  };
}

const FontSizes = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
  xl: "text-xl"
}

const FontWeight = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold"
}

const TextStyle = (propsSet) => {
  const props = initProps(propsSet);
  return (
    <p className={`${FontSizes[props.fontSize]} ${FontWeight[props.fontWeight]}`}>{propsSet.children}</p>
  )
}

export default TextStyle;
