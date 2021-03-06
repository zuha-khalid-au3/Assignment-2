const Category=require('../models/category');
const Sub=require('../models/sub');
const Product=require('../models/product');
const slugify =require('slugify');
//const { default: Product } = require('../../client/src/pages/Product');
exports.create=async (req,res) =>{
try{
    const {name}=req.body
 const category = await new Category({name,slug:slugify(name)}).save();
    res.json(category);
}catch(err){
    res.status(400).send('Create category failed')
}
}



exports.list=async (req,res) =>{
     res.json(await Category.find({}).sort({createdAt:-1}).exec());
  }
exports.read=async (req,res) =>{
   const category =await (await Category.findOne({slug:req.params.slug}).exec());
  const products=await Product.find({category:category})
   .populate('category')
   .exec()

   res.json({category,products});
}  
exports.update=async (req,res) =>{
    const {name}=req.body;
    try{
        const updated= await Category.findOneAndUpdate({slug:req.params.slug},
            {name,slug:slugify(name)},
            {new:true});
            res.json(updated);
    }
    catch(err){
        res.status(400).send("Create update failed");
    }
}
exports.remove=async (req,res) =>{
    try{
        const removed= await Category.findOneAndDelete({slug:req.params.slug});
        res.json(removed);
    }catch(err){
        res.status(400).send("Delete operation failed");
    }
}


exports.getSubs =  (req, res) =>{
    Sub.find({parent:req.params._id}).exec((err,subs)=>{
        if(err)
        console.log(err);
        res.json(subs);
    })
};