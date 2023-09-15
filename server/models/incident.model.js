import mongoose from "mongoose";
const { Schema } = mongoose;

const IncidentSchema = new Schema({
    userId : {
        type : String,
        required: true
    },
    userInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    latitude : {
        type : Number,
        required: true
    },
    longitude : {
        type : Number,
        required: true
    },
    photoUrl : {
        type : String,
        required: false
    },
    category : {
        type : String,
        required: true,
        enum:["Natural", "Weather","Emergency", "Shelter", "Hospital","CSO"]
    },
    icon:{
       type:String,
       required:true
    }
})
export default mongoose.model("Incident", IncidentSchema);