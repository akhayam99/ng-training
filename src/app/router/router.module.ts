import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_ROUTER } from './router.config';

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTER)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
