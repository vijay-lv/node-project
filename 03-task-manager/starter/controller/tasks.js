const Task=require('../models/taskModel')

const getAll=async(req,res)=>{
    try{
        const tasks=await Task.find({})

        res.status(201).json({tasks})
    }
    catch(error){

        res.status(500).json({msg:error})
    }

}
const getOne=async(req,res)=>{
    try{
        const {id:taskI}=req.params
        const task=await Task.findOne({_id:taskI})
        if(!task){
           return  res.status(404).json({msg:`It is not the valid id : ${taskI}`})
        }
         res.status(200).json({task})
        }
    catch(error){

        res.status(500).json({msg:error})
    }
    }
    
const create=async(req,res)=>{
 
    try{
        const task=await Task.create(req.body)
    
        res.status(201).json({task})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}
const update=async(req,res)=>{
    try{
        const id=req.params.id
        const data=req.body
        const task=await Task.findOneAndUpdate({_id:id},data,{new:true,runValidators:true})
        if(!task){
            return  res.status(404).json({msg:`It is not the valid id : ${id}`})
         }
        res.status(200).json({task})
    }
    catch(error){

        res.status(500).json({msg:error})
    }
}
const delet=async(req,res)=>{

    try{
       const id=req.params.id
        console.log(id)
        const task=await Task.findOneAndDelete({_id:id})
        if(!task){
            return  res.status(404).json({msg:`It is not the valid id : ${id}`})
         }
        res.status(200).json({task})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
    
}
module.exports={
    getAll,getOne,update,delet,create

}