import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDb from "./config/db.js";
import authRoute from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.send("backend is running...");
});

app.listen(port, () => {
  connectDb();
  console.log(`Server is running on ${port}`);
});
