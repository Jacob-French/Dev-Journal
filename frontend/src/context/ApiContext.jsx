import { createContext, useContext } from "react";
import useAxios from "../hooks/useAxios";

const apiContext = createContext()

//routes
const PAGES = 'http://localhost:1337/api/pages'

export function ApiProvider({children}){

  const { request, loading, error, cancel } = useAxios()
  
  const api = {
    getPages: async function(){
      const response = await request(PAGES, {method: 'GET'})
      if(response){
        return response.data
      }
      else{
        return null
      }
    }
  }

  return(
    <apiContext.Provider value={api}>
      {children}
    </apiContext.Provider>
  )
}

export function useApi(){
  const context = useContext(apiContext)

  if(!context){
    throw new Error("useApi must be used with in the ApiProvider")
  }

  return context
}