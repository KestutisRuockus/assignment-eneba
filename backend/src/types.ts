export type Game = {
  title: string;
  platform: string;
  store: string;
  region: string;
  price: number;
  discountPercent: number;
  cashback?: number;
  likes: number;
};

export type GameRowFromDb = {
  id: number;
  title: string;
  platform: string;
  store: string;
  region: string;
  price: string;
  discount_percent: number;
  cashback: string;
  likes: number;
};
