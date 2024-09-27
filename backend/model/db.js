// const mysql = require("mysql2/promise");

// // const con = mysql.createConnection({
// //   host: "localhost",
// //   user: "root",
// //   password: "@Root123",
// //   database: "loginregister",
// // });

// // con.connect((err) => {
// //   if (err) throw err;
// //   console.log("db is connected");
// // });


// const con = async () => {
//   try {
//     const connected = await mysql.createConnection({
//       host: "localhost",
//       user: "root",
//       password: "@Root123",
//       database: "loginregister",
//     });
//     console.log('db is connected')
//     return connected
//   } catch (err) {
//     console.log("error occurred", err);
//   }
// };


// module.exports = con;
const mysql=require('mysql2/promise')

const con=mysql.createPool({
  host:'localhost',
  user:'root',
  password:'@Root123',
  database:'loginregister',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})


module.exports=con