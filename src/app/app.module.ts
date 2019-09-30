import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PruebaPage } from '../pages/prueba/prueba';
import { IonicStorageModule } from '@ionic/storage';
import { Base64 } from '@ionic-native/base64';
import { FileTransfer} from '@ionic-native/file-transfer';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PruebaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PruebaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Base64,
    FileTransfer,
    File,
    DocumentViewer,
    FileOpener
  ]
})
export class AppModule {}
