const express=require('express')
const router=express.Router()
const cartcontroller=require('../controller/cartcontroller')
const { route } = require('./productRouter')


router.post('/addcart',cartcontroller.addcart)
router.get('/cart',cartcontroller.getcart)
router.delete('/deletecart/:id',cartcontroller.deletecart)


module.exports=router