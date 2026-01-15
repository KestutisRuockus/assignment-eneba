import app from "./app.js";
import "dotenv/config";
import { initDb } from "./db/initDB.js";

const PORT = Number(process.env.PORT) || 3000;

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

const startServer = async () => {
  try {
    await initDb();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
