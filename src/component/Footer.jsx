// import React from 'react'

import { useContext } from "react"
import { DataContext } from "../context/UserContext"

const Footer = () => {

  const data1 = useContext(DataContext)

  return (

    <div>This is Footer {data1.city} </div>
  )
}

export default Footer