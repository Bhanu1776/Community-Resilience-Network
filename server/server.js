import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import Subscription from "./models/subscription.model.js";
import webPush from 'web-push'
import authRoute from "./routes/auth.route.js";
import incidentRoute from "./routes/incident.route.js";
const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
};
app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));
app.set("trust proxy", 1);

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", authRoute);
app.use("/api/incidents", incidentRoute);

app.use("/about", (req, res) => {
  res.send("CommuniSafe: A Community Resilience Network");
});

// Configure web-push with your VAPID keys
webPush.setVapidDetails(
  'mailto:mrunalvaidya0715@gmail.com', 
  process.env.PUBLIC_KEY,
  process.env.PRIVATE_KEY
);

app.use('/subscribe', async(req,res,next)=>{
  try {
    const newSub = await Subscription.create({...req.body});
    res.status(201).send(newSub);
  } catch (error) {
    next(error);
  }
})

// Define an endpoint to send a push message
app.post('/send-push', async (req, res,next) => {
  
  const notification = {
    title: 'New Alert Raised',
    body: 'Checkout Maps to view Alerts!!',
  };

  try {
    const subscriptions = await Subscription.find();
    const pushPromises = subscriptions.map(async (subscription) => {
      await webPush.sendNotification(subscription, JSON.stringify(notification));
    });
    await Promise.all(pushPromises);
    res.status(201).json({ message: 'Push messages sent successfully' });
  } catch (error) {
    next(error);
    
  }
});

app.get('/getSubs',async(req,res,next)=>{
  try {
    const subs = await Subscription.find();
    res.status(200).send(subs)
  } catch (error) {
    next(error)
  }
})


app.use("/", (req, res) => {
  res.send("Reserved for CommuniSafe");
});

app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "Something went Wrong";
  return res.status(errStatus).send(errMessage);
});

const port = process.env.PORT || 8800;
app.listen(port, () => {
  connect();
  console.log(`Backend is Running at ${port}`);
});
