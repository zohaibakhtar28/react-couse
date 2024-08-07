import React, { useState } from "react"
import ComponentA from "./components/ComponentA"

function App() {

  const [user, setUser]  = useState("Zohaib")
 

  return (
    <>
     <ComponentA/>
    </>
  )
}

export default App
