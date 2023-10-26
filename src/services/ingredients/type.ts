import { type } from "os";

export interface Iingredient{
  _id: string;
  name: string;
  type: string;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: string;
  image: string;
  image_mobile: string;
  image_large: string;
}
export interface IData {
  ingredient: Iingredient[];
  loading: boolean;
  error: null| string;
}