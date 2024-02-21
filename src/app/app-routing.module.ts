import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { BackComponent } from './back/components/back/back.component';
import { HomeComponent } from './home/home.component';
import { CarouselTestComponent } from './carousel-test/carousel-test.component';
import { LoginPopupComponent } from './login-popup/login-popup.component';
const routes: Routes = [
  {path:"products",component:AllProductsComponent},
  {path:"details/:id",component:ProductsDetailsComponent},
  {path:"carts",component:CartComponent},
  {path:"home",component:HomeComponent},
  {path:"back",component:BackComponent},
  {path:"login",component:LoginPopupComponent},
  { path: 'testeur', component: CarouselTestComponent },
  {path:"**", redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
