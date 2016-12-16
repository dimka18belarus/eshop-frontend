import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Product} from "../product";
import {ProductService} from "../services/product.service";

@Component({

  selector: 'products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;

  constructor(private productService: ProductService,
              private router: Router) {
  }

  getProducts(): void {
    this.productService
      .getProducts()
      .then(products => this.products = products);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.productService.createProduct(name)
      .then(product => {
        this.products.push(product);
        this.selectedProduct = null;
      });
  }

  delete(product: Product): void {
    this.productService
      .deleteProduct(product.id)
      .then(() => {
        this.products = this.products.filter(h => h !== product);
        if (this.selectedProduct === product) {
          this.selectedProduct = null;
        }
      });
  }

  ngOnInit(): void {
    this.getProducts();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedProduct.id]);
  }

  addToBucket(selectedProduct) {
    console.log(selectedProduct);
  }
}
