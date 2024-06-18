import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import { identityRouter } from "./src/routes/ContactRoute.js";

const app = express();

app.use(bodyParser.json());
app.use("/api", identityRouter);

export default app;
