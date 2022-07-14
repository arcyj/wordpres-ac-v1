import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import InputField from '../inputField';

function initProps(props) {
  const defaults =  {
    disabled: false,
  };
  return {
    ...defaults,
    ...props,
  };
}

const ColorPicker = (propsSet) => {
  const props = initProps(propsSet);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [color, setColor] = useState(props.value);

  const handleClick = () => {
    setShowColorPicker(!showColorPicker)
  };

  const handleClose = () => {
    setShowColorPicker(false)
  };

  return (
    <div className={`mb-6 ${props.disabled ? "opacity-50 pointer-events-none" : ""}`}>
      <InputField
        type="text"
        label={props.label}
        value={props.value}
        onChange={()=>{}}
        onClick={() => handleClick()}
      />
      { showColorPicker ? <div style={{position: 'absolute', zIndex: '2'}}>
          <div style={{position: 'fixed', top: '0px', right: '0px', bottom: '0px', left: '0px'}} onClick={ () => handleClose() }/>
          <ChromePicker color={ props.value } onChange={(color) => props.onChange(color) }/>
      </div> : null }
    </div>
  )
}

export default ColorPicker;
