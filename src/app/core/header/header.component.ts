import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../module-home/home.component';
import { ChannelPage } from '../../module-channel/channel.component';
import { UserSettingsPage } from '../../module-user/user.component';

@Component({
  selector: 'mmx-header',
  templateUrl: './header.component.html'
})
export class MmxHeaderComponent {
  @Input() title: string;

  public buttons = [
    {icon: 'logo-windows', component: HomePage},
    {icon: 'mail', component: ChannelPage},
    {icon: 'eye', component: HomePage},
    {icon: 'phone-portrait', component: ChannelPage},
    {icon: 'heart', component: ChannelPage},
    {icon: 'person', component: UserSettingsPage},
  ];

  constructor(public navCtrl: NavController) {
  }

  goToPage(page) {
    this.navCtrl.setRoot(page);
  }
}
