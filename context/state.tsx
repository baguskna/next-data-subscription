import { createContext, useContext, useState } from "react";
import { Shoe, shoes } from "../lib/utils";

interface AppWrapperProps {
  children: React.ReactNode;
}

export interface AppContextValueSchema {
  counter: number;
  setCounter: (counter: number) => void;
  cart: Shoe[];
  setCart: (cart: Shoe[]) => void;
}

export const AppContext = createContext<AppContextValueSchema | undefined>(
  undefined
);

export function AppWrapper({ children }: AppWrapperProps) {
  const [counter, setCounter] = useState<number>(0);
  const [cart, setCart] = useState<Shoe[]>(shoes);

  return (
    <AppContext.Provider value={{ counter, setCounter, cart, setCart }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
