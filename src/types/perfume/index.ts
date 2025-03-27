export interface IPerfume {
  _id: string;
  name: string;
  description: string;
  price: number;
  categories: string[];
  brand: string;
  collection: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  remaining?: number;
  soldAmount?: number;
}
