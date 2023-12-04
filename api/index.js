import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();
mongoose
  .connect(process.env.MONGODB_CONNECT_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(() => {
    console.log("Failed to connect to MongoDB");
  });

app.listen(3000, (err, res) => {
  console.log("Listening on http://localhost:3000..");
});
