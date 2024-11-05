
const db = require('../model/db');


const product=async(req,res)=>{
    try{
        const sql="SELECT * FROM productdetails"
        const [rows]=await db.query(sql)
        return res.status(200).send(rows)
    }
    catch(err){
        console.log(err)
        return res.status(400).send(err,"internal error")
    }
}

const addproduct = async (req, res) => {
    const { productname, productimage, productprice } = req.body;
    try {
        const sql = 'INSERT INTO productdetails (productname, productimage, productprice) VALUES (?, ?, ?)';
        await db.query(sql, [productname, productimage, productprice]);
        return res.status(200).send("Product added successfully!");
    } catch (err) {
        console.error(err); 
        return res.status(400).send("Internal error occurred");
    }
}

const deleteproduct=async(req,res)=>{
    const {id}=req.params
    try{
        const sql='DELETE FROM productdetails WHERE id=?'
        const [rows]=await db.query(sql,[id])
        return res.status(200).send(rows)
    }
    catch(err){
        return res.send(400).send(err,'Particular Row')
    }
}

const updateProduct=async(req,res)=>{
    const {id}=req.params
    const { productname, productimage, productprice } = req.body;
    try{
        const sql="UPDATE productdetails SET productname=?, productimage=?, productprice=? WHERE id=?"
        const [result]=await db.query(sql,[productname, productimage, productprice,id])
        return res.status(200).send("updated sucessfuly")
    }
    catch(err){
        console.log(err)
        return res.status(400).send(err)
    }

}

module.exports = {
    addproduct,
    product,
    deleteproduct,
    updateProduct
};
