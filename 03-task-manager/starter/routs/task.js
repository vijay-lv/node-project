const express =require('express')
const {create,delet,getAll,getOne,update}=require("../controller/tasks.js")
const router=express.Router()

router.route('/').get(getAll).post(create)
router.route('/:id').get(getOne).patch(update).delete(delet)

module.exports =router