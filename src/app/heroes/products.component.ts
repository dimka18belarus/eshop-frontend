import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Product} from "../shared/product/product";
import {ProductService} from "../shared/product.service";

@Component({

  selector: 'my-heroes',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Product[];
  selectedHero: Product;

  constructor(private heroService: ProductService,
              private router: Router) {
  }

  getHeroes(): void {
    this.heroService
      .getProducts()
      .then(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Product): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) {
          this.selectedHero = null;
        }
      });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Product): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
