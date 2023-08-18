import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
 {
    fullName: {
        type: String,
        required: [true, 'please provide the developer fullname'],
    },
   email: {
        type: String,
        required: [true, 'please provide the developer email address'],
    
    match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ,
    'please provide the developer email address',
  ],
  unique: true,
},
website: {
        type: String,
        required: [true,'please provide the developer website for this profilen'],
    },
    about: {
        type: String,
        required: [true, 'please provide the developer bio for this profile'],
    },
},
    { timestamps: true }
    
);

export default mongoose.model('profile', profileSchema);