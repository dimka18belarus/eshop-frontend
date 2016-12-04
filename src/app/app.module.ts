import "./rxjs-extensions";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {EshopClientRoutingModule} from "./app-routing.module";
// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
import {InMemoryDataService} from "./shared/in-memory-data.service";
import {AppComponent} from "./app.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroesComponent} from "./heroes/products.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {ProductService} from "./shared/product.service";
import {ProductSearchComponent} from "./product-search/product-search.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    EshopClientRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    ProductSearchComponent,
    DashboardComponent
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
