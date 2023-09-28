/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, createContext, useContext, useEffect, useState } from "react"

interface ContextProviderProps {
  children: ReactNode
}

const getFreshContext = () => {
  const contextString = localStorage.getItem('context')
  if(contextString == null) {
    localStorage.setItem('context', JSON.stringify({
      participantId: 0,
      timeTaken: 0,
      selectedOptions: [],
    }))
  }
  return contextString ? JSON.parse(contextString) : null
}

const StateContext = createContext<any>({})

export default function useStateContext() {
  const { context, setContext } = useContext(StateContext)
  
  return {
    context,
    setContext: (obj: any) => {
      setContext({ ...context, ...obj })
    },
    resetContext: () => {
      localStorage.removeItem('context')
      setContext(getFreshContext())
    }
  }
}

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [context, setContext] = useState(getFreshContext())
  useEffect(() => {
    localStorage.setItem('context', JSON.stringify(context))
  }, [context])
  return (
    <StateContext.Provider value={{ context, setContext }}>
      {children}
    </StateContext.Provider>
  )
}
