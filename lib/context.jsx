
import React, { createContext, useReducer, useEffect, useState } from 'react';
import { appRecudcer, settingsReducer } from './reducers';


const intialState = {
  userData: [],
  app: {showSaveBar: false, token: null, prevState: [], toasts: []},
}

const AppContext = createContext({
  state: intialState,
  dispatch: () => null
});

const mainReducer = ({ settings, app }, action) => ({
  settings: settingsReducer(settings, action),
  app: appRecudcer(app, action),
});

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, intialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider };
