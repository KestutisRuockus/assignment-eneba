import { useEffect, useState } from "react";
import { getAllGames } from "./api/games";
import type { Game } from "./types";
import GameCard from "./components/GameCard";

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
    <>
      {games.map((game: Game) => (
        <GameCard key={game.title} game={game} />
      ))}
    </>
  );
}

export default App;
