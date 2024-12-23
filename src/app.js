import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(cookieParser());

app.use(express.json({ limit: "150kb" }));
app.use(express.urlencoded({ limit: "150kb", extended: true }));


export {app}