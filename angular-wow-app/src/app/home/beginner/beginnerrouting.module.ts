import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BeginnerComponent } from './beginner.component';
import { WarriorComponent }  from './warrior/warrior.component';

const beginnerRoutes: Routes = [
  {
    path: 'beginner',
    component: BeginnerComponent,
    children: [
          {
            path: 'warrior/warrior',
            component: WarriorComponent
          },
        ]
      }
];

@NgModule({
  imports: [
    RouterModule.forChild(beginnerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BeginnerRoutingModule { }
