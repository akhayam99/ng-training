import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from '../enum/AppRoutes';
import { componentRoute, uniqueArray } from '../utils';

const APP_ROUTER: Routes = [
  ...uniqueArray(Object.values(AppRoutes)).map(path => ({ path, component: componentRoute(path) })),
  {
    path: '**',
    redirectTo: AppRoutes.DEFAULT,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTER)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
