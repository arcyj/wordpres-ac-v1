import React, {useContext} from 'react';
import { AppContext } from '../../../lib/context';

const Toast = (props) => {
  const { state, dispatch } = useContext(AppContext);

  if(state.app.toasts.length > 0){
    setTimeout(() => {
      dispatch({type: 'remove_toast'})
    }, 3000);
  }
  return (
    <div className="w-38 z-100 fixed right-20 top-20 z-[9999]">
      {state.app.toasts.map(function(item, i){
          return (
            <div className="px-4 py-3 bg-green-300 w-48 mb-4 text-center rounded transition ease-in-out ">
              <h2 className="text-black text-base weight-medium">{item.message}</h2>
            </div>
          );
      })}

    </div>
  )
}

export default Toast;
