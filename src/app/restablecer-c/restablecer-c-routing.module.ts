import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestablecerCPage } from './restablecer-c.page';

const routes: Routes = [
  {
    path: '',
    component: RestablecerCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestablecerCPageRoutingModule {}
