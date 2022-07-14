import React from 'react';
import Tooltip from './Tooltips'
import Badge from '../../app/components/badge';

function initProps(props){
  const defaults =  {
    title: "Default Title",
    borderTop: false,
    borderBottom: false,
    disabled: false,
    premiumBadge: false,
    onChange: () => { alert("There is no function set") },
  };
  return {
    ...defaults,
    ...props,
  };
}

const ToggleSwitch = (propsSet) => {
  const props = initProps(propsSet);
  return (
    <div className={`${props.borderTop ? 'border-t ' : ''} ${props.borderBottom ? 'border-b' : ''} flex items-center py-5 bg-transparent justify-between`}>
      <div className="flex">
        {props.icon ?
          <div className={`pr-3 ${props.disabled ? "opacity-50 pointer-events-none" : ""}`}>
            {props.icon}
          </div> : ""
        }
        <div className={props.text ? "flex justify-center flex-col" : ""}>
          <p className={`text-sm text-gray-700 flex items-center font-semibold `}>
            <span className={`${props.disabled ? "opacity-50 pointer-events-none" : ""}`}>{props.title}</span>
            {props.tooltip ?
              <span className="pl-2">
                <Tooltip
                  text={props.tooltip}
                />
              </span> : ""
            }
             {props.disabled && props.premiumBadge ?
              <Badge/> : ""
            }
          </p>

          {props.text ?
            <p className={`text-sm text-gray-500 ${props.disabled ? "opacity-50 pointer-events-none" : ""}`}>
               {props.text}
            </p> : ""
          }

        </div>

      </div>

      <div htmlFor="checked" className={`inline-flex items-center cursor-pointer ${!props.icon ? 'input-column' : ''} ${props.disabled ? "opacity-50 pointer-events-none" : ""}`}>
        <span className={` mr-2 ${!props.enabled ? "font-semibold": ""}`}>Off</span>
        <label className="toggle-switch">
          <input type="checkbox" checked={props.enabled} onChange={() => props.onChange()} />
          <span className="switch" />
        </label>
        <span className={` ml-2 ${props.enabled ? "font-semibold": ""}`}>On</span>
      </div>
    </div>
  )
}

export default ToggleSwitch;
