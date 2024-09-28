const db = require("../model/db");
const bcrypt = require("bcrypt");

const getUserValue = async (req, res) => {
  try {
    const sql = "SELECT * FROM loginregister.users";
    const [rows] = await db.query(sql);
    res.status(200).send(rows);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

// const userValue=async(req,res)=>{
//   const {name,email,gender,password}=req.body
  
//   try{
//     const hashpassword=await bcrypt.hash(password,10);
//     const sql='INSERT INTo users (name,email,gender,password) VALUES (?,?,?,?)';
//     const [result]=await db.query(sql,[name,email,gender,hashpassword])
//     res.status(200).send('user resgisted')
//     console.log(result) 
//   }
//   catch(err){
//     console.log(err)
//     res.status(500).send('server error')
//   }
// }

const userValue=async(req,res)=>{
  const {name,email,gender,password}=req.body
  
  try{
    const hashpassword=await bcrypt.hash(password,10);
    const sql='INSERT INTo users (name,email,gender,password) VALUES (?,?,?,?)';
    await db.query(sql,[name,email,gender,hashpassword])
      res.status(200).send('user registerd')
  }
  catch(err){
    console.log(err)
    res.status(500).send('server error')
  }
}


module.exports = {
  userValue,
  getUserValue,
};
