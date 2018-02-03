import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {DistributionModule} from './module-distribution/distribution.module';
import {CampaignsModule} from './module-campaigns/campaigns.module';


@NgModule({
  imports: [
    IonicPageModule,
    DistributionModule,
    CampaignsModule
  ]
})
export class PortalAdminModule {
}
