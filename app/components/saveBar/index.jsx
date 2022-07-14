import React from 'react';
import axios from 'axios';
import Button from '../button'

const SaveBar = (props) => {
  if (!props.showSaveBar) {
    return null;
  }
  return (
    <div className="w-full z-100 fixed bottom-0 z-[9999]">
      <div className="px-4 py-2 bg-black">
        <h2 className="text-white">You have made some changes! Save them!</h2>
        <div>
          <Button customClass="mr-2" label="Save" color="indigo" onClick={() => props.onSave()}/>
          <Button label="Discard" color="indigo" onClick={() => props.onDiscard()}/>
        </div>
      </div>
    </div>
  )
}

export default SaveBar;
