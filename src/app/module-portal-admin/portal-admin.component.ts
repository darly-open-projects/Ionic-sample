import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// import { CampaignsPage } from './module-campaigns/campaigns.component';
// import { DistributionPage } from './module-distribution/distribution.component';

@Component({
  selector: 'portal-admin',
  templateUrl: './portal-admin.component.html'
})
export class PortalAdminPage {

  public page = 'Campaigns Page';
  public buttons = [
    {icon: 'microphone', title: 'Campaigns', component: 'Campaigns Page'},
    {icon: 'shuffle', title: 'Distribution', component: 'Distribution Page'},
    {icon: 'contacts', title: 'Contacts', component: 'Campaigns Page'},
    {icon: 'person', title: 'My Profile', component: 'Distribution Page'},
  ];

  constructor(public navCtrl: NavController) {
  }

  showPage(page) {
    this.page = (page) ? page : 'Campaigns Page';
  }
}
