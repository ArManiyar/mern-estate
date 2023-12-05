import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const signup = async (req, res, next) => {
  console.log(req.body);
  const { username, firstName, lastName, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = User({
    username,
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", User: newUser });
  } catch (error) {
    next(error);
  }
};
