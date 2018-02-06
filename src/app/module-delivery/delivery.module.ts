import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { CoreModule } from '../core/core.module';
import { DeliveryPage } from './delivery.component';


@NgModule({
  declarations: [DeliveryPage],
  imports: [
    IonicPageModule.forChild(DeliveryPage),
    CoreModule
  ],
  entryComponents: [DeliveryPage]
})
export class DeliveryModule {
}
