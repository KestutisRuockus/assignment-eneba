import express from "express";
import cors from "cors";
import listRoutes from "./routes/list.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/list", listRoutes);

app.use(express.json());

export default app;
