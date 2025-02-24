import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"

type AuthContextType = {AuthData:boolean}

function useAuth(){
    const context = useContext(AuthContext)
    if(!context){
        throw new Error("No auth context found")
    }
    return context
}
export default useAuth