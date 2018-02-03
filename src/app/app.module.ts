import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomeModule } from './module-home/home.module';
import { CoreModule } from './core/core.module';
import { ChannelModule } from './module-channel/channel.module';
import { DeliveryModule } from './module-delivery/delivery.module';
import { UserModule } from './module-user/user.module';
import { PortalAdminModule } from './module-portal-admin/portal-admin.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HomeModule,
    CoreModule,
    ChannelModule,
    DeliveryModule,
    UserModule,
    PortalAdminModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
