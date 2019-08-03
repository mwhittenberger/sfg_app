import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'account',
    pathMatch: 'full'
  },


  { path: 'account', loadChildren: './pages/account/account.module#AccountPageModule' },
  { path: 'monthly', loadChildren: './pages/monthly/monthly.module#MonthlyPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
