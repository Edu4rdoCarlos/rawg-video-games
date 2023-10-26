'use client';

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from 'react';

interface ContextProps {
  fontSize: number;
  setFontSize: Dispatch<SetStateAction<number>>;
}

interface ActionsProviderProps {
  children: ReactNode;
}

const GlobalContext = createContext<ContextProps>({
  fontSize: 16,
  setFontSize: () => {},
});

export const GlobalContextProvider: React.FC<ActionsProviderProps> = ({
  children,
}: ActionsProviderProps) => {
  const [fontSize, setFontSize] = useState<number>(16);

  return (
    <GlobalContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
