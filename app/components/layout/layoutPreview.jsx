import React from 'react';
import Navigation from '../navigation';
import Preview from '../preview';
const LayoutPreview = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-9/12 pt-5">

        {children}
      </div>
      <div >

      </div>
    </div>
  )
}

export default LayoutPreview;
