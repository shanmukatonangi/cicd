const express = require("express")
const cors = require("cors")
const app = express()



app.use(cors())

app.get("/api/message",(req,res)=>{
    res.json({
        message:"Hello,World"
    })
})


app.listen(8970,()=>{
    console.log("server is running on port 8970")
})