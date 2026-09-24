import { useContext, createContext, useState } from 'react';

const DisabledContext = createContext();

function DisabledProvider({ children }) {
  const [disabled, setDisabled] = useState(true);

  return (
    <DisabledContext.Provider value={{ disabled, setDisabled }}>
      {children}
    </DisabledContext.Provider>
  );
}

function useDisabled() {
  const context = useContext(DisabledContext);
  if (context === undefined)
    throw new Error('Using Disabled outside of context');

  return context;
}

export { DisabledProvider, useDisabled };
