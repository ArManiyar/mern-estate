import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();
const app = express();
app.use(express.json());
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

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
