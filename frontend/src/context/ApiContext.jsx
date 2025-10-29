import { createContext, useContext } from "react";
import useAxios from "../hooks/useAxios";

const apiContext = createContext()

//routes
const PAGES = 'http://localhost:1337/api/pages'
const TOPICS = 'http://localhost:1337/api/topics?sort[0]=title:asc&populate[0]=icon'

export function ApiProvider({children}){

  const { request: requestPages, loading: loadingPages, error: pagesError, cancel: cancelPages } = useAxios()
  const { request: requestTopics, loading: loadingTopics, error: topicsError, cancel: cancelTopics } = useAxios()
  const { request: requestHeadings, loading: loadingHeadings, error: headingsError, cancel: cancelHeadings } = useAxios()
  
  const api = {
    getPages: async function(){
      const response = await requestPages(PAGES, {method: 'GET'})
      if(response){
        return response.data
      }
      else{
        return null
      }
    },
    getTopics: async function(){
      const response = await requestTopics(TOPICS, {method: 'GET'})
      if(response){
        return response.data
      }
      else{
        return null
      }
    },
    //PARAMETERS: ("topic name") RETURNS: list of headings
    getHeadingsByTopic: async function(topic){
      const headings = `http://localhost:1337/api/headings?sort[0]=family_order:asc, order:asc, title:asc&filters[route][$startsWith]=/${topic}/`
      const response = await requestHeadings(headings, {method: 'GET'})
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