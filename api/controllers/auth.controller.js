import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";
import { errorHandler } from "../utils/errors.js";

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

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email: email });
    if (!validUser) return next(errorHandler(401, "User not found"));
    const validUserPassword = bcrypt.compareSync(password, validUser.password);
    if (!validUserPassword)
      return next(errorHandler(401, "Password incorrect"));
    const token = Jwt.sign({ id: validUser._id }, process.env.JWT_SECRET_KEY);
    // destrucutre the db data
    const { password: pass, ...rest_data } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest_data);
  } catch (error) {
    next(error);
  }
};
