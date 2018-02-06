import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PortalAdminPage } from '../module-portal-admin/portal-admin.component';

@Component({
  selector: 'page-user-settings',
  templateUrl: './user.component.html'
})
export class UserSettingsPage {

  constructor(public navCtrl: NavController) {
  }
  goToPage() {
    this.navCtrl.setRoot(PortalAdminPage);
  }
}
