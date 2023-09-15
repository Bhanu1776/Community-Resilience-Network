import mongoose from "mongoose";
const { Schema } = mongoose;

const IncidentSchema = new Schema({
    userID : {
        type : Number,
        required: true
    },
    latitude : {
        type : Number,
        required: true
    },
    longitude : {
        type : Number,
        required: true
    },
    photo : {
        type : String,
        required: false
    },
    severity : {
        type : String,
        required: false
    },
})
export default mongoose.model("Incident", IncidentSchema);