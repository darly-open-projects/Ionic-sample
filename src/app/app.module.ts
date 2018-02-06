import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducer';

import { MyApp } from './app.component';
import { HomeModule } from './module-home/home.module';
import { CoreModule } from './core/core.module';
import { ChannelModule } from './module-channel/channel.module';
import { DeliveryModule } from './module-delivery/delivery.module';
import { UserModule } from './module-user/user.module';
import { PortalAdminModule } from './module-portal-admin/portal-admin.module';
import { PageService } from './core/services/page.service';

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
    IonicModule.forRoot(MyApp),
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PageService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
