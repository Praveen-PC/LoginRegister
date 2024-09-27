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
    try{
        const { name, email, gender, password } = req.body;

        const real_password = password;
        const hashpassword= await bcrypt.hash(password,10);
        const sql = 'INSERT INTO loginregister.users (name, email, gender, password) VALUES (?, ?, ?, ?)';
    
        db.query(sql, [name, email, gender,hashpassword], (err, result) => {
            if (err) {
                console.error('Error inserting user:', err); 
                return res.status(500).send('Internal Server Error');
            }
            res.status(200).send('User inserted successfully');
            console.log('User value is added:', result); 
        });

    }catch(error){
        console.log(error)
        res.status(500).send('internal error')
    }
   
};


module.exports={
    userValue,
    getUserValue
}