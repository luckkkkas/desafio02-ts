import { useContext } from "react"
import { api } from "./api"
import { AppContext } from "../components/AppContext"

export const Loginf = async (email: string): Promise<void> => {
  const {setIsLoggedIn} = useContext(AppContext)
  const data:any = await api

  if(email !== data.email){
        return alert("email inválido")
  }

    
  setIsLoggedIn(true);

  alert(`Bem vinda ${email}!`)
}
