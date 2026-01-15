import type { Game } from "../types";
import { CiCircleInfo, CiHeart } from "react-icons/ci";
import CashbackIcon from "./CashbackIcon";

type Props = {
  game: Game;
};

const platformIcons: Record<string, string> = {
  xbox: "https://products.eneba.games/drms/v1/xbox.svg",
  nintendo: "https://products.eneba.games/drms/v1/nintendo.svg",
  steam: "https://products.eneba.games/drms/v1/steam.svg",
};

const getPlatformIconUrl = (platform: string) => {
  const p = platform.toLowerCase();

  if (p.includes("xbox")) {
    return platformIcons.xbox;
  }
  if (p.includes("nintendo") || p.includes("switch")) {
    return platformIcons.nintendo;
  }
  if (p.includes("pc")) {
    return platformIcons.steam;
  }

  return null;
};

const GameCard = ({ game }: Props) => {
  const titleText = `${game.title} (${game.platform}) ${game.store} ${game.region}`;
  const calculatedCurrentPrice = (
    game.price -
    (game.discountPercent / 100) * game.price
  ).toFixed(2);
  const iconUrl = getPlatformIconUrl(game.platform);

  return (
    <article>
      <div className="img-wrapper">
        <img src={game.imageUrl} alt={game.title} />
        {game.cashback && (
          <div className="cashback-icon-wrapper">
            <CashbackIcon size={16} />
            <p>Cashback</p>
          </div>
        )}
        <div className="blured-element">
          {iconUrl && <img src={iconUrl} alt={game.platform} />}
          <p>{game.platform}</p>
        </div>
      </div>
      <div className="content">
        <div>
          <h2>{titleText}</h2>
          <p className="region">{game.region}</p>
        </div>

        <div>
          <div className="price-wrapper">
            {game.discountPercent && (
              <p className="price-original">
                From <span className="price-old">€{game.price}</span>
                <span className="price-discount-percent">
                  -{game.discountPercent}%
                </span>
              </p>
            )}
            <div className="current-price">
              <p>€{calculatedCurrentPrice}</p>
              <CiCircleInfo className="info-icon" size={20} />
            </div>
            <p className="cashback">Cashback: €{game.cashback}</p>
          </div>

          <div className="likes">
            <CiHeart size={22} />
            <p>{game.likes}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default GameCard;
