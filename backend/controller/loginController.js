const db=require('../model/db')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
require ('dotenv').config()



const userlogin=async(req,res)=>{
  const {email,password}=req.body
  try{
    const sql = 'SELECT * FROM users WHERE email = ?';
    const [result]=await db.query(sql,[email]);
    if (result.length===0){
      return res.status(400).send('user not found')
    }
    const user=result[0]
    const ismatch=await bcrypt.compare(password,user.password)
    if (!ismatch){
      return res.status(400).send('invalid password')
    }

    const token=jwt.sign({email:user.email},process.env.JWT_SECRET,{expiresIn:'1d'})
    // res.json(token)
    res.status(200).send({auth:true,token})
    console.log(token)
  }
  catch(err){
    console.log(err)
    res.status(500).send('server errorr')
  }
}



module.exports={
    // getall,
    userlogin
}


