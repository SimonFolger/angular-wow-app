import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { TalentsComponent } from './talents/talents.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BeginnerComponent} from './home/beginner/beginner.component';
import { WarriorComponent} from './home/beginner/warrior/warrior.component';
import { WowDataService } from './wow-data.service'

import { BeginnerRoutingModule} from './home/beginner/beginnerrouting.module';



const appRoutes: Routes = [
  {
      path: 'home',
      component: HomeComponent },
  {
      path: 'home/beginner',
      component: BeginnerComponent },
  {
      path: 'talents',
      component: TalentsComponent },
  {
      path: 'home/beginner/warrior',
      component: WarriorComponent },
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
    BeginnerComponent,
    WarriorComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    BeginnerRoutingModule,
    BrowserModule

  ],
  providers: [WowDataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
