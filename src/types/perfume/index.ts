import { IPrices } from '../common';

export interface IPerfume {
  _id: string;
  name: string;
  description: string;
  prices: IPrices[];
  categories: string[];
  brand: string;
  collection: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  remaining?: number;
  soldAmount?: number;
  imageUrl: string;
}
