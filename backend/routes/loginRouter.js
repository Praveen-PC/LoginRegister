const express=require('express')
const router=express.Router()
const loginController=require('../controller/loginController')



router.get('/login',loginController.getall)


module.exports=router
