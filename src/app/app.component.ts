import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, LoadingController, App, ToastController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
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
import { AuthserviceProvider } from '../providers/authservice/authservice';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = WelcomePage;
  @ViewChild(Nav) nav:Nav;
  public badge: number;
  public user: any;
  public counter=0;
  public regisid: any;
  constructor(public platform: Platform, statusBar: StatusBar,
    splashScreen: SplashScreen,
    public loadingCtrl: LoadingController, private storage: Storage,
    public authService: AuthserviceProvider, public app: App,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController) {
      this.platform.ready().then(() => {
        statusBar.styleDefault();
        splashScreen.hide();

        this.platform.registerBackButtonAction(() => {
       if (this.counter == 0) {
         this.counter++;
         this.presentToast();
         setTimeout(() => { this.counter = 0 }, 3000)
       } else {
         // console.log("exitapp");
         this.platform.exitApp();
       }
     }, 0)
     //this.pushSetup();
    });

  }

  /*pushSetup() {
    const options: PushOptions = {
   android: {
     senderID: '477760960604'
   },
   ios: {
       alert: 'true',
       badge: true,
       sound: 'false'
   }};

   const pushObject: PushObject = this.push.init(options);


   pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));

   pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration.registrationId));

   pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
 }*/


  presentToast() {
    let toast = this.toastCtrl.create({
      message: "กดอีกครั้งเพื่อออก",
      duration: 3000,
      position: "bottom"
    });
    toast.present();
  }

  Outreach() {
    this.nav.push(OutreachPage);
  }
  School() {
    this.nav.push(SchoolPage);
  }
  Book() {
    this.nav.push(BookPage);
  }
  Academic() {
    this.nav.push(AcademiccampPage);
  }
  Buddha() {
    this.nav.push(BuddhacampPage);
  }
  Sciencevisit() {
    this.nav.push(SciencevisitPage);
  }
  Socialvisit() {
    this.nav.push(SocialvisitPage);
  }
  Scilecture() {
    this.nav.push(ScilecturePage);
  }
  Sociallecture() {
    this.nav.push(SociallecturePage);
  }
  Personlecture() {
    this.nav.push(PersonlecturePage);
  }
  Club() {
    this.nav.push(ClubPage);
  }
  Exercise() {
    this.nav.push(ExercisePage);
  }
  Meetteacher() {
    this.nav.push(MeetteacherPage);
  }

  Logout() {
    let loading = this.loadingCtrl.create({
    spinner: 'bubbles',
    content: 'Please wait...'
    });

    loading.present();

    setTimeout(() => {
        loading.dismiss();
      }, 500);
    this.storage.remove('user');
    this.nav.setRoot(HomePage);
    let nav1 = this.app.getRootNav();
    nav1.setRoot(HomePage);
  }

}
