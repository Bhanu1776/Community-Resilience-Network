import User from "../models/user.model.js";
import Incident from "../models/incident.model.js";
import createError from "../utils/createError.js";
import mongoose from "mongoose";
export const createIncident = async (req, res, next) => {
  const newIncident = new Incident({
    userId: req.userId,
    userInfo: req.userId,
    ...req.body,
  });

  try {
    const savedIncident = await newIncident.save();
    res.status(201).send(savedIncident);
  } catch (err) {
    next(err);
  }
};

export const getIncidents = async(req,res,next)=>{
    try {
        const incidents = await Incident.find();
        res.status(200).send(incidents)
    } catch (error) {
        next(error)
    }
}