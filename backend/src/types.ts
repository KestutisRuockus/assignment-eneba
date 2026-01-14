export type Game = {
  title: string;
  platform: string;
  store: string;
  region: string;
  price: number;
  discountPercent: number;
  cashback?: number;
  likes: number;
  imageUrl: string;
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
  image_url: string;
};
