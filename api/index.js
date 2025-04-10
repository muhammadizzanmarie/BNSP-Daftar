// api/index.js (khusus Vercel)
import express from "express";
import cors from "cors";
import router from "./v1/router.js";
import dotenv from "dotenv";
import serverless from "serverless-http"; // install dulu ya: npm i serverless-http

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

export const handler = serverless(app); // tanpa listen
