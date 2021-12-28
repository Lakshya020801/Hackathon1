const router=require("express").Router();
const Student=require("../models/student");

router.get("/",async(req,res)=>{
    const catName=req.query.cat;
    try{
        let students;
        if(catName){
            students=await Student.find({topics:{
                $in:[catName]
            }})
        }
        else
        {
            students=await Student.find();
        }

        res.status(200).json(students);
    }
    catch(err)
    {
       res.status(404).json(err);
    }
});

router.get("/:id",async(req,res)=>{
    try{
       const user=await Student.findById(req.params.id);
       const{password, ...others}=user._doc;
       res.status(200).json(others);
    }
    catch(err)
    {
       res.status(404).json(err);
    }
});

module.exports=router;