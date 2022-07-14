import React from 'react';

function initProps(props) {
  const defaults =  {
    type: "text",
    fullWidth: false,
    inline: true,
    labelWidth: "w-48",
    disabled: false,
  };
  return {
    ...defaults,
    ...props,
  };
}

const InputField = (propsSet) => {
  const props = initProps(propsSet);
  return (
    <div className="mt-4">
      <div className={`${ props.inline ? 'lg:flex justify-between items-center' : ''} ${props.disabled ? "opacity-50 pointer-events-none" : ""}`}>
        { props.label ?
          <label className={`mb-2 block text-sm text-gray-700 font-semibold ${props.labelWidth}`}>
            {props.label}
          </label> : ""
        }
        <div className={`input-column flex items-stretch ${props.fullWidth ? "w-full pl-5" : "max-w-md"} ${props.prefix ? 'border border-2 border-gray-300 rounded-md': ''}`}>
          { props.prefix ?
            <div className="bg-neutral-200 px-4 flex items-center border-r-2 border-gray-300">
              <span className="text-sm  text-gray-500 whitespace-nowrap">
                {props.prefix}
              </span>
            </div>: ""
          }

          <input
            type={props.type}
            value={props.value}
            className={`outline-none border-2 border-gray-300 pl-3 text-sm py-2 w-full ${props.prefix ? 'border-0': ''}`}
            placeholder={props.placeholder}
            onClick={props.onClick ? () => props.onClick() : null}
            onChange={props.onChange ? (val) => props.onChange(val.target.value) : null}
           />

        </div>
      </div>


    </div>
  )
}

export default InputField;
