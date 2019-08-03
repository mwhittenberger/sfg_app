import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MonthlyTasksPage } from './monthly-tasks.page';

const routes: Routes = [
  {
    path: '',
    component: MonthlyTasksPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MonthlyTasksPage]
})
export class MonthlyTasksPageModule {}
