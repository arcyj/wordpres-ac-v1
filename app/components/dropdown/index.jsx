import React from 'react';

function initProps(props) {
  const defaults =  {
    inline: false,
    disabled: false,
  };
  return {
    ...defaults,
    ...props,
  };
}

const Dropdown = (propsSet) => {
  const props = initProps(propsSet);
  const optionList = [];
  props.options.forEach(option => {
    optionList.push(<option key={option.value} value={option.value}>{option.label}</option>)
  })
  return(
    <div className={`mt-4 ${props.customClass ? props.customClass : ""} ${props.disabled ? "opacity-50 pointer-events-none" : ""}`}>
      <div className={props.inline ? "lg:flex justify-between items-center" : ""}>
       { props.label ?
        <label className="mb-2 block text-sm text-gray-700 font-semibold">
          {props.label}
        </label> : ""
        }
        <select value={props.value} onChange={props.onChange ? (val) => props.onChange(val.target.value) : () => alert("Set onChange event")} className="input-column w-full border-2 border-gray-300 rounded outline-none pl-3 pr-3 text-sm py-2">
          {optionList}
        </select>
      </div>
    </div>
  )

}

export default Dropdown;
