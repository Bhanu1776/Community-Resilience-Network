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

app.use('/subscribe', async (req, res, next) => {
  const newSubscription = await Subscription.create ({...req.body});
  
  const options = {
    vapidDetails: {
      subject: 'mailto:myemail@example.com',
      publicKey: process.env.PUBLIC_KEY,
      privateKey: process.env.PRIVATE_KEY,
    },
  };
  try {
    const res2 = await webPush.sendNotification (
      newSubscription,
      JSON.stringify ({
        title: 'New Alert Raised',
        description: 'Checkout Maps for the alerts!!!',
        image: 'https://cdn2.vectorstock.com/i/thumb-large/94/66/emoji-smile-icon-symbol-smiley-face-vector-26119466.jpg',
      }),
      options
    );
    res.sendStatus(200)
  } catch (error) {
    console.log (error);
    res.sendStatus (500);
  }
});

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
