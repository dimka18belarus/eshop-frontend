import {Photo} from "../shared/shop/photo";
import {Product} from "../product/product";
export class Category {
  description: string;
  id: number;
  name: string;
  photo: Photo;
  products: Array<Product>;
}
