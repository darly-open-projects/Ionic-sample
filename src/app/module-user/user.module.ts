import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { CoreModule } from '../core/core.module';
import { UserSettingsPage } from './user.component';


@NgModule({
  declarations: [UserSettingsPage],
  imports: [
    IonicPageModule.forChild(UserSettingsPage),
    CoreModule,
  ],
  entryComponents: [UserSettingsPage],
})
export class UserModule {
}
