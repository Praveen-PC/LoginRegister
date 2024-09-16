const db=require('../model/db')


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
const userValue = (req, res) => {
    const { name, email, gender, password } = req.body;
    const sql = 'INSERT INTO loginregister.users (name, email, gender, password) VALUES (?, ?, ?, ?)';

    db.query(sql, [name, email, gender, password], (err, result) => {
        if (err) {
            console.error('Error inserting user:', err); 
            return res.status(500).send('Internal Server Error');
        }
        res.status(200).send('User inserted successfully');
        console.log('User value is added:', result); 
    });
};


module.exports={
    userValue,
    getUserValue
}