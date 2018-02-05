import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { CoreModule } from '../core/core.module';
import { HomePage } from './home.component';

@NgModule({
  declarations: [HomePage],
  imports: [
    IonicPageModule.forChild(HomePage),
    CoreModule,
  ],
  entryComponents: [HomePage],
})
export class HomeModule {
}
