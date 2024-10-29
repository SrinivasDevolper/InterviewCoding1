import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [status, setStatus] = useState(false);
  return (
    <AppContext.Provider value={{ status, setStatus }}>
      {children}
    </AppContext.Provider>
  );
};

export const useCustom = () => {
  return useContext(AppContext);
};
