const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const loginRouter = require('./routes/loginRouter')
const registerRouter=require('./routes/registerRouter')
const productRouter=require('./routes/productRouter')
const cartRouter=require('./routes/cartRouter')


const app=express()
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.json())
app.use(cors({
    origin :"http://localhost:5173",
    method:['GET','POST','PUT','DELETE']
}))



app.use('/api',loginRouter)
app.use('/api',registerRouter)
app.use('/api',productRouter)
app.use('/api',cartRouter)



app.get('/',(req,res)=>{
    res.send("hello from backend")
})


const PORT=process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})

