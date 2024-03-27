import { Routes } from "@angular/router";
import { AppRoutes } from "../enum/AppRoutes";
import { Tutorial1Component } from "../pages/employees/employees.component";
import { MusicComponent } from "../pages/music/music.component";
import { Tutorial2Component } from "../pages/payrolls/payrolls.component";

export const APP_ROUTER: Routes = [
  {
    path: AppRoutes.EMPLOYEES,
    component: Tutorial1Component,
  },
  {
    path: AppRoutes.PAYROLLS,
    component: Tutorial2Component,
  },
  {
    path: AppRoutes.MUSIC,
    component: MusicComponent,
  },
  {
    path: '**',
    redirectTo: AppRoutes.DEFAULT,
  }
]
