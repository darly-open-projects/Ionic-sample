import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DeliveryPage } from '../module-delivery/delivery.component';

@Component({
  selector: 'page-channel',
  templateUrl: './channel.component.html'
})
export class ChannelPage {

  constructor(public navCtrl: NavController) {
  }

  goToPage() {
    this.navCtrl.push(DeliveryPage);
  }
}
