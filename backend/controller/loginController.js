const db=require('../model/db')


const getall=(req,res)=>{ 
        const sql='SELECT * FROM loginregister.users'
        db.query(sql,(err,result)=>{
            if (err){
              return  res.status(500).send(err)
            }
            res.status(200).send(result)
            console.log(result)
        })
}





module.exports={
    getall
}


