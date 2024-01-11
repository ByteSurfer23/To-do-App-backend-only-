const model = require('../models/models')
module.exports.getTodo = async(req,res)=>{
    const todo = await model.find()//returns stuff based on the query and performs a callback on the results
    res.send(todo)
}
module.exports.saveToDo = async(req,res)=>{
    const {text,day,time,rem_stats,comp_stats} = req.body
    model.create({text,day,time,rem_stats,comp_stats}).then((data)=>{
        console.log("Added");
        res.send(data)
    })
}
module.exports.updateToDo = async(req,res)=>{
    const{_id,text,day,time,rem_stats,comp_stats}=req.body
    model.findByIdAndUpdate(_id,{text,day,time,rem_stats,comp_stats}).then(()=>res.send("Updated")).catch((err)=>console.log(err))
}
module.exports.deleteTodo = async(req,res)=>{
    const {_id}= req.body
    model.findByIdAndDelete(_id).then(()=>res.send("Deleted")).catch((err)=>console.log(err))
} 