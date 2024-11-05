const express=require('express')
const router=express.Router()
const productcontroller=require('../controller/productController')

router.post('/addproduct',productcontroller.addproduct)
router.get('/allproduct',productcontroller.product)
router.delete('/deleteproduct/:id',productcontroller.deleteproduct)
router.put('/updateproduct/:id',productcontroller.updateProduct)


module.exports=router