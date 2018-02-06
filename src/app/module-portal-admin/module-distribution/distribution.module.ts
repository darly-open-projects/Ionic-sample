import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { DistributionPage } from './distribution.component';


@NgModule({
  declarations: [DistributionPage],
  imports: [
    IonicModule,
    CommonModule,
  ],
  exports: [DistributionPage]
})
export class DistributionModule {
}
