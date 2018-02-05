import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { CoreModule } from '../core/core.module';
import { ChannelPage } from './channel.component';

@NgModule({
  declarations: [ChannelPage],
  imports: [
    IonicPageModule.forChild(ChannelPage),
    CoreModule
  ],
  entryComponents: [ChannelPage]
})
export class ChannelModule {
}
