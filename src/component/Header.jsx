// import React from 'react'

import { useContext } from "react"
import { DataContext } from "../context/UserContext"

const Header = () => {

    const username = useContext(DataContext)
    
  return (
    
    <div>Header {username.name}</div>
  )
}

export default Header