const mysql=require('mysql2/promise')


const con=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"@Root123",
    database:"loginregister"
})

// con.connect((err)=>{
//     if (err) throw err
//     console.log("db is connected")
// })

module.exports=con