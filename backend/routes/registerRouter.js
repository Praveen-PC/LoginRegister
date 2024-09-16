const express=require('express')
const router=express.Router()
const registerController=require('../controller/registerController')



router.post('/insert',registerController.userValue)
router.get('/userdetails',registerController.getUserValue)


module.exports=router