import { createContext, useContext } from "react";

type NavigationProviderProps = React.PropsWithChildren & {};

const NavigationContext = createContext({});

export const useNavigationContext = () => useContext(NavigationContext);

export function NavigationProvider({ children }: NavigationProviderProps) {
  return <div>{children}</div>;
}
