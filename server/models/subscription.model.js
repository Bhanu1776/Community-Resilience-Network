import mongoose from "mongoose";
const { Schema } = mongoose;

const subscriptionSchema = new Schema({
    endpoint: String,
    expirationTime: Number,
    keys: {
      p256dh: String,
      auth: String,
    }

});

export default mongoose.model("Subscription", subscriptionSchema);