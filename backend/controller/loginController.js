const db=require('../model/db')

const getall=async(req,res)=>{ 
        const sql='SELECT * FROM loginregister.users'
        try{
          const [row]=  await  db.query(sql)
           
            res.status(200).send(row)
          
        } catch(err){
          res.status(500).send({message:err})

        }
}





module.exports={
    getall
}


