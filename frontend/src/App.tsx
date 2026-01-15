import { useEffect, useState } from "react";
import { getGames } from "./api/games";
import type { Game } from "./types";
import GameCard from "./components/GameCard";
import "./App.css";
import { Header } from "./components/Header";

function App() {
  const [games, setGames] = useState<Game[] | []>([]);
  useEffect(() => {
    const fetchGames = async () => {
      const list = await getGames();
      setGames(list);
    };

    fetchGames();
  }, []);

  const handleSearch = async (query: string) => {
    const list = await getGames(query);
    setGames(list);
  };

  return (
    <main>
      <Header onSearch={handleSearch} />
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
