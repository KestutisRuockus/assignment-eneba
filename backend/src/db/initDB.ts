import { Game } from "../types.js";
import { pool } from "./db.js";

const seedGames: Game[] = [
  {
    title: "FIFA 23",
    platform: "Xbox Series X|S",
    store: "XBOX LIVE KEY",
    region: "EUROPE",
    price: 34.99,
    discountPercent: 45,
    cashback: 2.8,
    likes: 1240,
  },
  {
    title: "Red Dead Redemption 2",
    platform: "PC",
    store: "Steam Key",
    region: "GLOBAL",
    price: 29.99,
    discountPercent: 40,
    cashback: 3.0,
    likes: 980,
  },
  {
    title: "Split Fiction",
    platform: "Nintendo Switch 2",
    store: "eShop Key",
    region: "EUROPE",
    price: 44.99,
    discountPercent: 18,
    cashback: 4.5,
    likes: 625,
  },
];

const seedDb = async (): Promise<void> => {
  const countResult = await pool.query<{ count: string }>(
    `SELECT COUNT(*) FROM games`
  );

  const count = Number(countResult.rows[0]?.count ?? 0);

  if (count > 0) {
    console.log(`Seed skipped. Games already exist (${count} rows).`);
    return;
  }

  for (const game of seedGames) {
    await pool.query(
      `
        
        INSERT INTO games (title, platform, store, region, price, discount_percent, cashback, likes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        `,
      [
        game.title,
        game.platform,
        game.store,
        game.region,
        game.price,
        game.discountPercent,
        game.cashback ?? 0,
        game.likes,
      ]
    );
  }
  console.log(`Seed complete. Inserted ${seedGames.length} games.`);
};

export async function initDb(): Promise<void> {
  const existsResult = await pool.query<{
    exists: boolean;
  }>(`
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_schema = 'public'
      AND table_name = 'games'
    ) AS exists;
  `);

  const exists = existsResult.rows[0]?.exists ?? false;

  if (!exists) {
    console.log("Table 'games' not found. Creating...");

    await pool.query(`
  CREATE TABLE IF NOT EXISTS games (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    platform TEXT NOT NULL,
    store TEXT NOT NULL,
    region TEXT NOT NULL,
    price NUMERIC(10,2) NOT NULL,
    discount_percent INTEGER NOT NULL DEFAULT 0,
    cashback NUMERIC(10,2) NOT NULL DEFAULT 0,
    likes INTEGER NOT NULL DEFAULT 0
  );
`);

    console.log("Table 'games' created");
  } else {
    console.log("Table 'games' already exists");
  }

  await seedDb();
}
