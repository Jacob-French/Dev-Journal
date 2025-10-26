import { useEffect, useState } from 'react'
import axios from 'axios';

import './App.css'
import useAxios from './hooks/useAxios';
import { useApi } from './context/ApiContext';
import Headbar from './components/layout/Headbar';
import TailwindPlanner from './components/TailwindPlanner';
import { Routes } from 'react-router';

function App() {

  const api = useApi()

  const [pages, setPages] = useState([])

  useEffect(() => {
    api.getPages().then((response) => {
      setPages(response)
    })
  }, [])

  return (
    <div className="bg-space-100 h-screen">
      {false && <Headbar pages={pages} />}
      {false && <TailwindPlanner></TailwindPlanner>}

      <Headbar pages={pages} />

      <Routes>

      </Routes>
    </div>
  )
}

export default App
