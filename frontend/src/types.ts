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
