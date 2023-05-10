import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import router from "./routes/index.js";


const app = express();

dotenv.config();
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", () => [console.log("unable to connect db")]);
db.once("open", () => {
  console.log("database connect");
});

app.use(express.json());

app.use('/', router)


const startServer = () => {
  app.listen(3000, () => {
    console.log("server started");
  });
};

startServer();