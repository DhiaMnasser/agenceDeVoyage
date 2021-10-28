const mongoose= require('mongoose');
const Scheme= mongoose.Schema;

const HotelSchema = new Scheme({
    object: { 
        type: String, 
        required: false 
    },
    nom: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }

});
module.exports = Post=mongoose.model('hotel',HotelSchema);