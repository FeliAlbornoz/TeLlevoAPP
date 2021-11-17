import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestablecerccPageRoutingModule } from './restablecercc-routing.module';

import { RestablecerccPage } from './restablecercc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestablecerccPageRoutingModule
  ],
  declarations: [RestablecerccPage]
})
export class RestablecerccPageModule {}
