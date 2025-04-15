import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {
  const [msg,setMsg]=useState("")

  useEffect(()=>{
    axios.get("http://localhost:8970/api/message").then((res)=>setMsg(res.data.message)).catch((err)=>console.log(err),[])
  })
  return (
    <div>
      <p>{msg}</p>
      
    </div>
  )
}

export default App
