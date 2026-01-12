import express from "express";
import { pool } from "../db/db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.json(result.rows[0]);
});

export default router;
