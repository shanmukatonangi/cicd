import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {
  const [msg,setMsg]=useState("")

  useEffect(()=>{
    axios.get("https://cicd-yli8.onrender.com/api/message").then((res)=>setMsg(res.data.message)).catch((err)=>console.log(err),[])
  })
  return (
    <div>
      <p>{msg}</p>
      
    </div>
  )
}

export default App
