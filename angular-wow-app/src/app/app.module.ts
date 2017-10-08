import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { TalentsComponent } from './talents/talents.component';
import { ClassComponent } from './class/class.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
  {
      path: 'home',
      component: HomeComponent },
  {
      path: 'talents',
      component: TalentsComponent },
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
  },
  {
      path: '**',
      component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    TalentsComponent,
    ClassComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
