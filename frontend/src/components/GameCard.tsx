import type { Game } from "../types";

type Props = {
  game: Game;
};

const GameCard = ({ game }: Props) => {
  return <div>{game.title}</div>;
};

export default GameCard;
