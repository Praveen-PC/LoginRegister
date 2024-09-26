const db=require('../model/db')
const bcrypt=require('bcrypt')


const getUserValue=(req,res)=>{
    const sql='SELECT * FROM loginregister.users'
    db.query(sql,(err,result)=>{
        if (err){
            return res.status(500).send(err)
        }
        res.status(200).send(result)
        console.log('value',result)

    })
}



const userValue = async (req, res) => {
    const { name, email, gender, password } = req.body;

    try {
        // Check if user already exists
        const sqlCheck = 'SELECT * FROM loginregister.users WHERE email = ?';
        const [rows] = await db.query(sqlCheck, [email]);

        if (rows.length > 0) {
            return res.status(400).send('User already exists');
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert new user
        const sqlInsert = 'INSERT INTO loginregister.users (name, email, gender, password) VALUES (?, ?, ?, ?)';
        const [result] = await db.query(sqlInsert, [name, email, gender, hashedPassword]);

        res.status(201).send('User registered successfully');
        console.log('User value is added:', result);

    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
};

// const userValue = async (req, res) => {
//     const { name, email, gender, password } = req.body;

// try{
//     const sqlcheck='SELECT * FROM loginregister.users WHERE email=?'
    
//     const [row]= await db.query(sqlcheck,[email])
//     if(row.length>0){
//         return res.status(500).send('user already exist')
        
//     }

//     const hashpassword=await bcrypt.hash(password,10)

//     const sql = 'INSERT INTO loginregister.users (name, email, gender, password) VALUES (?, ?, ?, ?)';

//     db.query(sql, [name, email, gender, hashpassword], (err, result) => {
//         if (err) {
//             console.error('Error inserting user:', err); 
//             return res.status(500).send('Internal Server Error');
//         }
//         res.status(200).send('User inserted successfully');
//         console.log('User value is added:', result); 
//     });

// }catch(error){
//     console.log(error)
// }
    
// };


module.exports={
    userValue,
    getUserValue
}