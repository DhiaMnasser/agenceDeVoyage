const express = require('express');
const router = express.Router();
const {check, validationResult}= require('express-validator/check');
const Hotel = require('../../models/Hotel');
//@route Post api/hotel
//@desc Create hotel
//@access Private
router.post(
    '/',
    [
       
        check('nom', 'Name is required').not().isEmpty(),
        check('description', 'Description is required').not().isEmpty(),

    ],
async(req,res)=>{
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    try{
    //créer un nouveau hotel
    const newHotel= new Hotel({
        nom: req.body.nom,
        description: req.body.description,
    });
    //save
    await newHotel.save();
    res.status(200).json(newHotel);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }    
});
//@route Get api/hotels
//@desc GET ALL hotels
//@access Private
router.get('/',
async(req,res)=> {
    try{
        const listHotels= await Hotel.find().sort({dateRec: -1});
        return res.json(listHotels);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
);
//@route Reclamation api/hotels/:id
//@desc get hotel par id
//@access Private 
router.get('/:id',
async(req,res)=>{
    try{
        const Hotel= await Hotel.findById(req.params.id);
        if(!Hotel){
           return res.status(404).json({msg: 'Hotel not found'});
        }     
        res.json(Hotel);   
    }
    catch(err){
        console.error(err.message);
        if(err.kind === 'ObjectId'){ //it's not a valid objectId
            return res.status(404).json({msg: 'Hotel not found'});
         }
        res.status(500).send('Server Error');   
    }
});

//@route Hotel api/hotels/:id
//@desc delete hotel
//@access Private
router.delete('/:id',
async(req,res)=>{
    try{
        const hotelDelete= await Hotel.findById(req.params.id);
        //check if the hotel exist
        if(!hotelDelete){
           return res.status(404).json({msg: 'Hotel not found'});
        }     
        await hotelDelete.deleteOne();
    res.status(200).send('Deleted successfully');   

    }
    catch(err){
        console.error(err.message);
        if(err.kind === 'ObjectId'){ //it's not a valid objectId
            return res.status(404).json({msg: 'Hotel not found'});
         }
        res.status(500).send('Server Error');   
    }
});
//@route Put api/Reclamation/archived/:id
//@desc arc
//@access Private
router.put('/archived/:id',
async(req,res)=>{
    try{
        const rec= await Hotel.findById(req.params.id);

        rec.archived = true;
         await rec.save();
         return res.status(200).json({msg: 'Hotel archived !!'});
    }
    catch(err){
        console.error(err.message);
        if(err.kind === 'ObjectId'){ //it's not a valid objectId
            return res.status(404).json({msg: 'Hotel not found'});
         }
        res.status(500).send('Server Error');   
    }
});
//@route Put api/Hotel/state/:id
//@desc arc
//@access Private
router.put('/state/:id',
async(req,res)=>{
    try{
        const rec= await Hotel.findById(req.params.id);

        rec.etat = "Treated";
         await rec.save();
         return res.status(200).json({msg: 'Hotel Treated !!'});
    }
    catch(err){
        console.error(err.message);
        if(err.kind === 'ObjectId'){ //it's not a valid objectId
            return res.status(404).json({msg: 'Hotel not found'});
         }
        res.status(500).send('Server Error');   
    }
});
module.exports = router;
