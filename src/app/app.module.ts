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
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ConfirmPage } from '../pages/confirm/confirm';
import { MemberPage } from '../pages/member/member';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginProvider } from '../providers/login/login';
import { RecordPage } from '../pages/record/record';
import { ActivityProvider } from '../providers/activity/activity';
import { Login1Provider } from '../providers/login1/login1';
import { ProfileactProvider } from '../providers/profileact/profileact';
import { LogserviceProvider } from '../providers/logservice/logservice';
import { OutreachPage } from '../pages/outreach/outreach';
import { SchoolPage } from '../pages/school/school';
import { BookPage } from '../pages/book/book';
import { AcademiccampPage } from '../pages/academiccamp/academiccamp';
import { BuddhacampPage } from '../pages/buddhacamp/buddhacamp';
import { SciencevisitPage } from '../pages/sciencevisit/sciencevisit';
import { SocialvisitPage } from '../pages/socialvisit/socialvisit';
import { ScilecturePage } from '../pages/scilecture/scilecture';
import { PersonlecturePage } from '../pages/personlecture/personlecture';
import { SociallecturePage } from '../pages/sociallecture/sociallecture';
import { ClubPage } from '../pages/club/club';
import { ExercisePage } from '../pages/exercise/exercise';
import { MeetteacherPage } from '../pages/meetteacher/meetteacher';
import { SelectserviceProvider } from '../providers/selectservice/selectservice';
import { UpdateserviceProvider } from '../providers/updateservice/updateservice';
import { DeleteserviceProvider } from '../providers/deleteservice/deleteservice';
import { Form1updatePage } from '../pages/form1update/form1update';
import { SearchPage } from '../pages/search/search';
import { RequestPage } from '../pages/request/request';
import { TabPage } from '../pages/tab/tab';
import { TeacherProvider } from '../providers/teacher/teacher';
import { TeachermemberPage } from '../pages/teachermember/teachermember';
import { SearchProvider } from '../providers/search/search';
import { TeacherlistPage } from '../pages/teacherlist/teacherlist';
import { SendserviceProvider } from '../providers/sendservice/sendservice';
import { RequestProvider } from '../providers/request/request';
import { CheckPage } from '../pages/check/check';
import { CheckProvider } from '../providers/check/check';
import { AuthserviceProvider } from '../providers/authservice/authservice';
import { RecordProvider } from '../providers/record/record';
import { ResultPage } from '../pages/result/result';
import { PersonPage } from '../pages/person/person';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    WelcomePage,
    ConfirmPage,
    MemberPage,
    RecordPage,
    OutreachPage,
    SchoolPage,
    BookPage,
    AcademiccampPage,
    BuddhacampPage,
    SciencevisitPage,
    SocialvisitPage,
    ScilecturePage,
    PersonlecturePage,
    SociallecturePage,
    ClubPage,
    ExercisePage,
    MeetteacherPage,
    Form1updatePage,
    SearchPage,
    RequestPage,
    TabPage,
    TeachermemberPage,
    TeacherlistPage,
    CheckPage,
    ResultPage,
    PersonPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    WelcomePage,
    SignupPage,
    ConfirmPage,
    MemberPage,
    RecordPage,
    OutreachPage,
    SchoolPage,
    BookPage,
    AcademiccampPage,
    BuddhacampPage,
    SciencevisitPage,
    SocialvisitPage,
    ScilecturePage,
    PersonlecturePage,
    SociallecturePage,
    ClubPage,
    ExercisePage,
    MeetteacherPage,
    Form1updatePage,
    SearchPage,
    RequestPage,
    TabPage,
    TeachermemberPage,
    TeacherlistPage,
    CheckPage,
    ResultPage,
    PersonPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Device,
    SMS,
    Camera,
    File,FileTransfer,
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
    RecordProvider
  ]
})
export class AppModule {}
