import {Tag} from "../shared/shop/tag/tag";
import {Stock} from "../shared/shop/stock/stock";
import {Photo} from "../shared/shop/photo";
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
