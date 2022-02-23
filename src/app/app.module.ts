import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
const routes: Routes = [

  {path:'Home',component:HomeComponent, pathMatch: "full"},
  {path: 'Perfil', component: PerfilComponent},
  { path: '',   redirectTo: '/Home', pathMatch: 'full' }

//  {path: '', redirectTo: '/DPI', pathMatch: 'full'},




];
@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,RouterModule.forRoot(routes, {useHash: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
