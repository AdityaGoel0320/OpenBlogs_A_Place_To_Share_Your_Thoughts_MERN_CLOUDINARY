import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });

let DB = process.env.MONGO_URI ;

export const dbConnection = () => {
  console.log("Connecting to MongoDB with URI:", DB);

  mongoose.connect(DB).then(() => {
    console.log("Connected to the database");
  }).catch((error) => {
    console.error("Error connecting to the database:", error);
  });
};
