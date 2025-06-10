export type Service = {
  id: string;
  title: string;
  description: string;
  priceMin: number;
  priceMax?: number;
  extraInfo?: string;
  icon: React.ReactNode;
};
