import express from "express";
import { pool } from "../db/db.js";
import { Game, GameRowFromDb } from "../types.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const search = req.query.search;

    const query = search
      ? `SELECT * FROM games WHERE title ILIKE $1`
      : `SELECT * FROM games`;

    const queryValues = search ? [`%${search}%`] : [];

    const result = await pool.query<GameRowFromDb>(query, queryValues);

    const games: Game[] = result.rows.map((row) => ({
      title: row.title,
      platform: row.platform,
      store: row.store,
      region: row.region,
      price: Number(row.price),
      discountPercent: row.discount_percent,
      cashback: Number(row.cashback),
      likes: row.likes,
      imageUrl: row.image_url,
    }));

    res.status(200).json(games);
  } catch (error) {
    console.log("GET /list error:", error);
    res.status(500).json({ message: "Failed to fetch games" });
  }
});

export default router;
