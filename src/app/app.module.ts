import "./rxjs-extensions";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {EshopClientRoutingModule} from "./app-routing.module";
// Imports for loading & configuring the in-memory web api
import {AppComponent} from "./app.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProductsComponent} from "./product/products/products.component";
import {ProductDetailComponent} from "./product/product-detail/product-detail.component";
import {ProductService} from "./product/services/product.service";
import {ProductSearchComponent} from "./product/product-search/product-search.component";
import {ServerSettingsService} from "./shared/server-settings/server-settings.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    EshopClientRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductDetailComponent,
    ProductsComponent,
    ProductSearchComponent,
  ],
  providers: [ProductService, ServerSettingsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
