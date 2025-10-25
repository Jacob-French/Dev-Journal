import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import useAxios from './hooks/useAxios';

function App() {
  const { request, loading, error, cancel } = useAxios();

  const getPages = async function(){
    const url = "http://localhost:1337/api/pages"
    const result = await request(url, {method: 'GET'})
    if(result){
      return result.data
    }
    else{
      return null
    }
  }

  useEffect(() => {
    getPages().then((pages) => {
      pages && console.log("pages: ", pages)
    })
  }, [])

  return (
    <>
      <h1>start here</h1>
    </>
  )
}

export default App
