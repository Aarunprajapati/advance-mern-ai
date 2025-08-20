import { generateToken } from "../config/token.js";
import User from "../models/user.modal.js";
import { bcrypt } from "bcryptjs";

export const Signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existEmail = await User.findOne({ email });
    if (existEmail) {
      return res.status(400).json({ message: "email already exist" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "password must be greater then 6 characters" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      password: hashPassword,
      email,
    });

    const token = await generateToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60,
      sameSite: "strict",
      secure: false,
    });

    return res.status(201).json({ message: "User Created Successfully", user });
  } catch (error) {
    return res.status(500).json({ message: "something went wrong" });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "email does not exist" });
    }
    const isMatched = bcrypt.compare(password, user.password);
    if (!isMatched) {
      return res.status(400).json({ message: "incorrect password" });
    }
    const token = await generateToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60,
      sameSite: "strict",
      secure: false,
    });

    return res.status(200).json({ message: "User login Successfully", user });
  } catch (error) {
    return res.status(500).json({ message: "something went wrong" });
  }
};

export const Logout = (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "logout Successfully" });
  } catch (error) {
    return res.status(400).json({ message: "something went wrong" });
  }
};
