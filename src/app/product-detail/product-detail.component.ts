import "rxjs/add/operator/switchMap";
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import {Product} from "../shared/product/product";
import {ProductService} from "../shared/product.service";

@Component({

  selector: 'product-detail',
  templateUrl: 'product-detail.component.html',
  styleUrls: ['product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.productService.getProduct(+params['id']))
      .subscribe(product => this.product = product);
  }

  save(): void {
    this.productService.update(this.product)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
