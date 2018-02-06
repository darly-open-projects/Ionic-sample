import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Store } from '@ngrx/store';
import * as rootReducer from '../app.reducer';

import { PageService } from '../core/services/page.service';

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

  constructor(public navCtrl: NavController,
              private store: Store<rootReducer.State>,
              private pageService: PageService) {
    this.store.select('portalAdmin')
      .subscribe((response: {data: string}) => {
        if (!response.data) {
          return;
        }
        this.page = response.data;
      })
  }

  showPage(page: string) {
    this.pageService.setPage(page);
  }
}
