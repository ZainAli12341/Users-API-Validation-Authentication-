const mongoose = require ('mongoose');
const registrationSchema=mongoose.Schema(
{
    username:{
        type:String,
        required:[true,'Please enter a valid Username']
    },
    
    password:{
        type:String,
        required:[true,'Please enter a valid password']
    },
    
    email:{
        type:String,
        required:[true,'please enter a valid email']
    },
},
{
    timestamps:true,
}
)
module.exports=mongoose.model('Register',registrationSchema)