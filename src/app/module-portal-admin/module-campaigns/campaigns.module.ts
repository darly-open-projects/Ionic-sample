import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { CampaignsPage } from './campaigns.component';

@NgModule({
  declarations: [CampaignsPage],
  imports: [
    IonicModule,
    CommonModule,
  ],
  exports: [CampaignsPage],
})
export class CampaignsModule {
}
