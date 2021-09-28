import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestablecerCPageRoutingModule } from './restablecer-c-routing.module';

import { RestablecerCPage } from './restablecer-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestablecerCPageRoutingModule
  ],
  declarations: [RestablecerCPage]
})
export class RestablecerCPageModule {}
