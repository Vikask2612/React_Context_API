// import React from 'react'
// as
"use client"

import { useContext } from 'react'
import Header from './component/Header'
import { DataContext } from './context/UserContext'
import Footer from './component/Footer'

const App = () => {

  const data = useContext(DataContext)

  return (
    <div>
      <h1> Hey This is App {data.age}</h1>
      <Header/>
      <Footer/>

    </div>
  )
}

export default App