import { createContext, useEffect, useState } from 'react';
import { getAllLocalStorage } from '../services/storage';



interface Icontext {
    user: string,
    isLoggedIn:boolean
    setIsLoggedIn: (isLoggedIn:boolean) => void
} 

export const AppContext = createContext({} as Icontext)
// exporta a o contexto de um objeto vazio, só no app que o objeto recebe os valores

export const AppContextProvider = ({ children }: any)=> {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const user = 'lucas';

  const storage = getAllLocalStorage();

  useEffect(()=> {
    if(storage){
      const {login} = JSON.parse(storage)
      setIsLoggedIn(login)
    }
  },[])

  if(storage){
    const {login} = JSON.parse(storage)
    setIsLoggedIn(login)
  }

  return(
    <AppContext.Provider value={{user, isLoggedIn, setIsLoggedIn}}>
      { children }
     {/* { //quando o appContextProvider é chamado em app, passa os valores do objeto} */}
    </AppContext.Provider>
  )
}
