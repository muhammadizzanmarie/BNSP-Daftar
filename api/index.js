// api/index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./v1/router.js";
import serverless from "serverless-http";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1", router); // penting: sesuaikan path

export const handler = serverless(app); // Wajib! tanpa listen()
