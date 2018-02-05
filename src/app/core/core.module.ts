import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from 'ionic-angular';
import  {MmxHeaderComponent } from './header/header.component';


@NgModule({
  declarations: [MmxHeaderComponent],
  imports: [
    IonicModule,
    CommonModule,
  ],
  exports: [MmxHeaderComponent],
})
export class CoreModule {
}
