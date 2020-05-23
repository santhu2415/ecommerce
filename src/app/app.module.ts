import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MensComponent } from './mens/mens.component';
import { GirlsComponent } from './girls/girls.component';
import { KidsComponent } from './kids/kids.component';
import { RouterModule,Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';


const appRoutes:Routes =[
{
  path:'home',
  component:HomeComponent
},
{
  path:'mens',
component:MensComponent
},
{
  path:'girls',
  component:GirlsComponent
},
{
  path:'kids',
  component:KidsComponent
},
{
  path:'cart',
  component:CartComponent
}

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MensComponent,
    GirlsComponent,
    KidsComponent,
    CartComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
