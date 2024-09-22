const express=require('express')
const routes=require("./routes/routes")



const app=express()
app.use('/routes',routes)



app.listen(3000,()=>{
    console.log('server running')
})