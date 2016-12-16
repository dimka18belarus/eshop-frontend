import "rxjs/add/operator/switchMap";
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import {Product} from "../product";
import {ProductService} from "../services/product.service";
import {Category} from "../../category/category";
import {CategoryService} from "../../category/services/category.service";

@Component({

  selector: 'product-detail',
  templateUrl: 'product-detail.component.html',
  styleUrls: ['product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  categories: Array<Category>;

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.productService.getProduct(+params['id']))
      .subscribe(product => this.product = product);

    this.getCategories();
  }

  save(): void {
    this.productService.updateProduct(this.product)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  getCategories() {
    this.categoryService.getCategories()
      .then(categories => this.categories = categories);
  }
}
