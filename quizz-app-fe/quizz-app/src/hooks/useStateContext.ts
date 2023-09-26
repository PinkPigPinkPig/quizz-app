import React, { createContext, ReactNode, useState } from "react";

interface ContextProviderProps {
  children: ReactNode;
}

const StateContext = createContext<ContextProviderProps | null>(null);

const getFreshContext = () => {
    return {
        participantId: 0,
        timeTaken: 0,
        selectedOptions: []
    }
}

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [context, setContext] = useState(getFreshContext());
  return <StateContext.Provider>
    {children}
  </StateContext.Provider>
};

export default ContextProvider;
