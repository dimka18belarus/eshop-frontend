import {Tag} from "../tag/tag";
import {Stock} from "../stock/stock";
import {Photo} from "../photo";
export class Product {
  id: number;
  name: string;
  category: number;
  description: string;
  photo: Photo;
  price: number;
  stocks: Array<Stock>;
  tags: Array<Tag>;
}
