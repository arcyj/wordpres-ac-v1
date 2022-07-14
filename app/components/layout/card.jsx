import React from 'react';

function initProps(props) {
  const defaults =  {
    bgColor: "bg-transparent",
    premium: false,
  };
  return {
    ...defaults,
    ...props,
  };
}

const Card = (propSet) => {
  const props = initProps(propSet);
  return (
    <div className={`${props.bgColor} rounded m-5 p-4 ${props.classes} ${props.premium ? "border pt-0" : ""}`} >
      {props.premium ? <span style={{ top: "-10px"}}className="font-semibold text-indigo-600 bg-white px-4 relative">Premium Plan Features</span> : ""}
      {props.children}
    </div>
  )
}

export default Card;
