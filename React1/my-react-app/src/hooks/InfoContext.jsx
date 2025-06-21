import { createContext } from "react";

// Create context
export const InfoContext = createContext();

// Context provider
export const InfoProvider = ({ children }) => {
  const info = {
    name: 'Ragul',
    age: 20,
    dep: 'MSC'
  };

  return (
    <InfoContext.Provider value={info}>
      {children}
    </InfoContext.Provider>
  );
}; 