import { createContext, useState } from 'react';



interface Icontext {
    user: string,
    isLoggedIn:boolean
    setIsLoggedIn: (isLoggedIn:boolean) => void
  } 

export const AppContext = createContext({} as Icontext)
export const AppContextProvider = ({ children }: any)=> {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const user = 'lucas';

  return(
    <AppContext.Provider value={{user, isLoggedIn, setIsLoggedIn}}>
      { children }
    </AppContext.Provider>
  )
}
