import express from "express";
import { Server } from "http";
import mongoose from "mongoose";

let server: Server;
const app = express();

const startSever = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://saumittra_DB:Saumittra12@tsoftelectronics.l4wjuvt.mongodb.net/tour_DB?retryWrites=true&w=majority&appName=TSoftElectronics`
    );
    console.log(`Connected to Mongo DB Server`);
    app.listen(5000, () => {
      console.log("Server is listening to port 5000");
    });
  } catch (error) {
    console.log(error);
  }
};
startSever();
