'use client';

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

interface ContextProps {
  fontSize: number;
  setFontSize: Dispatch<SetStateAction<number>>;
}

interface ButtonActionsProviderProps {
  children: any;
}

const GlobalContext = createContext<ContextProps>({
  fontSize: 16,
  setFontSize: () => {},
});

export const GlobalContextProvider: React.FC<ButtonActionsProviderProps> = ({
  children,
}) => {
  const [fontSize, setFontSize] = useState<number>(16);

  return (
    <GlobalContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);