import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Device } from '@ionic-native/device';
import { SMS } from '@ionic-native/sms';
import { Camera } from '@ionic-native/camera';
import { AngularCropperjsModule } from 'angular-cropperjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginProvider } from '../providers/login/login';
import { IonicStorageModule } from '@ionic/storage';
import { ActivityProvider } from '../providers/activity/activity';
import { Login1Provider } from '../providers/login1/login1';
import { ProfileactProvider } from '../providers/profileact/profileact';
import { LogserviceProvider } from '../providers/logservice/logservice';
import { SelectserviceProvider } from '../providers/selectservice/selectservice';
import { UpdateserviceProvider } from '../providers/updateservice/updateservice';
import { DeleteserviceProvider } from '../providers/deleteservice/deleteservice';
import { TeacherProvider } from '../providers/teacher/teacher';
import { SearchProvider } from '../providers/search/search';
import { SendserviceProvider } from '../providers/sendservice/sendservice';
import { RequestProvider } from '../providers/request/request';
import { CheckProvider } from '../providers/check/check';
import { AuthserviceProvider } from '../providers/authservice/authservice';
import { RecordProvider } from '../providers/record/record';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';

import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AngularCropperjsModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Device,
    SMS,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    ActivityProvider,
    Login1Provider,
    ProfileactProvider,
    LogserviceProvider,
    SelectserviceProvider,
    UpdateserviceProvider,
    DeleteserviceProvider,
    TeacherProvider,
    SearchProvider,
    SendserviceProvider,
    RequestProvider,
    CheckProvider,
    AuthserviceProvider,
    RecordProvider,
    File, FileTransfer
  ]
})
export class AppModule {}
