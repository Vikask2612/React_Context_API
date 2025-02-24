// as
// import React from 'react'

import { createContext } from "react"

export const DataContext = createContext()   //UserContext mein jitna bhi data hai
//                                         woh sabko provide krne ke liye ye line use hoti hai
    
      const UserContext = ({children}) => {
        const userData = {          
                            name:"vikas",
                            age:28, 
                            city:"nashik"
                         }

        return (
          <DataContext.Provider  value={userData}>
              {children}
          </DataContext.Provider>
    
  )
}

export default UserContext