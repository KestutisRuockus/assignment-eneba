import { useEffect, useState } from "react";
import { getAllGames } from "./api/games";
import type { Game } from "./types";
import GameCard from "./components/GameCard";
import "./App.css";
import { Header } from "./components/Header";

function App() {
  const [games, setGames] = useState<Game[] | []>([]);
  useEffect(() => {
    const fetchGames = async () => {
      const list = await getAllGames();
      setGames(list);
    };

    fetchGames();
  }, []);

  return (
    <main>
      <Header />
      <p className="results-count">Results found: {games.length}</p>
      <section>
        {games.map((game: Game) => (
          <GameCard key={game.title} game={game} />
        ))}
      </section>
    </main>
  );
}

export default App;
