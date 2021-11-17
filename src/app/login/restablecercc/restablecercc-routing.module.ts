import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestablecerccPage } from './restablecercc.page';

const routes: Routes = [
  {
    path: '',
    component: RestablecerccPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestablecerccPageRoutingModule {}
