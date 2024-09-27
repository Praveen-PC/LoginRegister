const mysql=require('mysql2')


const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Praveen@2832",
    database:"loginregister"
})

con.connect((err)=>{
    if (err) throw err
    console.log("db is connected")
})

module.exports=con