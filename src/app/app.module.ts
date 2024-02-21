import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductComponent } from './products/components/product/product.component';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { CartsModule } from './carts/carts.module';
import { dark_modeComponent } from './dark_mode/components/dark_mode.component';
import { dark_modeService } from './dark_mode/dark_mode.service';
import { HomeComponent } from './home/home.component';
import { CarouselTestComponent } from './carousel-test/carousel-test.component';
import { LoginPopupComponent } from './login-popup/login-popup.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent,
    CartComponent,
    SpinnerComponent,
    ProductComponent,

    HomeComponent,
    CarouselTestComponent,
    LoginPopupComponent



  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    FormsModule,
    CartsModule,
    MatSnackBarModule,
    AppRoutingModule,
    SharedModule
  ],
  exports:[
    SpinnerComponent
  ],
  providers: [dark_modeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
