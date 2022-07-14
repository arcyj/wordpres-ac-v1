import React from 'react';
import axios from 'axios';
import Button from '../button'

const Notification = (props) => {
  return (
    <div className="w-full border-l-4 border-indigo-600 bg-white px-4 py-5 shadow">
      <p className="mb-2">Please Select a Subscription Plan. Subscription Plans May Be Changed or Cancelled at Your Convenience.</p>
      <Button customClass="mr-2" label="Start Accessibly Premium" color="indigo" onClick={() => props.onClick()}/>
    </div>
  )
}

export default Notification;
