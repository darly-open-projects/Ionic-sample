import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { DistributionModule } from './module-distribution/distribution.module';
import { CampaignsModule } from './module-campaigns/campaigns.module';
import { PortalAdminPage } from './portal-admin.component';


@NgModule({
  declarations: [PortalAdminPage],
  imports: [
    IonicPageModule.forChild(PortalAdminPage),
    DistributionModule,
    CampaignsModule,
  ],
  entryComponents: [PortalAdminPage],
})
export class PortalAdminModule {
}
