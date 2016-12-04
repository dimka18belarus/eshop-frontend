import {Component, OnInit} from "@angular/core";
import {Product} from "../shared/product/product";
import {ProductService} from "../shared/product.service";

@Component({
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Product[] = [];

  constructor(private heroService: ProductService) {
  }

  ngOnInit(): void {
    this.heroService.getProducts()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
