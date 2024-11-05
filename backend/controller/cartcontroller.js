const db=require('../model/db')


const addcart=async(req,res)=>{
    const {productname,productimage,productprice}=req.body
    try{
        const sql='INSERT INTO cart (productname,productimage,productprice) VALUES(?,?,?)'
        await db.query(sql,[productname,productimage,productprice])
        return res.status(200).send("inserted")

    }
    catch(err){
        return res.status(400).send(err,"internal error")
    }
}

const getcart=async(req,res)=>{
    try{
        const sql='Select * from cart'
        const [result]=await db.query(sql)
        return res.status(200).send(result)
    }
    catch(err){
        return res.status(400).send("internal error")
    }
}
const deletecart=async(req,res)=>{
    const {id}=req.params
    try{
        const sql='DELETE FROM cart WHERE id=?'
        const [result]=db.query(sql,[id])
        return req.status(200).send("cart deleted successfully")

    }
    catch(err){
        return res.status(400).send("internal error")
    }
}

module.exports={
    addcart,
    getcart,
    deletecart
}