const router=require("express").Router();
const Course=require("../models/courses");

router.post("/",async (req,res)=>{
    try{
        const newCourse=await new Course({
            name:req.body.name
        })  
        const course=await newCourse.save();
        res.status(200).json(course);
    
    }
    catch(err){
        console.log(err);
    } 
    });

    router.get("/",async(req,res)=>{
        try{
            let courses;
                courses=await Course.find();
    
            res.status(200).json(courses);
        }
        catch(err)
        {
           res.status(404).json(err);
        }
    });
    
module.exports=router;