import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, App, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SearchProvider } from '../../providers/search/search';
import { RequestProvider } from '../../providers/request/request';
import { CheckPage } from '../check/check';
import { Storage } from '@ionic/storage';
import { LoginProvider } from '../../providers/login/login';
import { Http } from '@angular/http';
import { SearchPage } from '../search/search';
import { PersonPage } from '../person/person';

@IonicPage()
@Component({
  selector: 'page-teachermember',
  templateUrl: 'teachermember.html',
})
export class TeachermemberPage {
  public Detail: any;
  public page: string = 'home';
  public items: any;
  public request: any = "";
  public badge: number;
  public itemsea: any = [];
  public lengthd: number;
  acttype: any;
  activity: string = "";
  dorm: string = "";
  clas: string = "";
  names: any;
  idsend: any = "";
  c: string;
  btn: boolean = false;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public app: App,
    public searchService: SearchProvider,
    public requestService: RequestProvider,
    private storage: Storage,
    public loginservice: LoginProvider,
    public http: Http,
    public alertCtrl: AlertController) {
      this.Detail = this.navParams.get('detailper');
      this.requestService.request(this.Detail.tch_idcard)
      .then(data => {
        this.request = data;
        this.badge = data['length'];
      });
      this.getacttype();

  }

  ionViewWillEnter() {
    this.requestService.request(this.Detail.tch_idcard)
    .then(data => {
      this.request = data;
      this.badge = data['length'];
    });
    this.activity = "";
    this.names = "";
    this.btn = false;
  }

  getacttype() {
    this.loginservice.getacttype()
    .then(data => {
      this.acttype = data;
      console.log(this.acttype)
    });
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
    this.navCtrl.setRoot(HomePage);
    let nav = this.app.getRootNav();
    nav.setRoot(HomePage);
  }

  check(data) {
    this.navCtrl.push(CheckPage, {data: data})
  }

  doRefresh(refresher) {
    this.requestService.request(this.Detail.tch_idcard)
    .then(data => {
      this.request = data;
      this.badge = data['length'];
    });


    setTimeout(() => {
      refresher.complete();
    }, 1000);

  }

  onactivityChange(act: any){
    this.activity = "";
    this.dorm = "";
    this.clas = "";
    this.c = 'false';
    this.idsend = "";
    this.activity = act;
    if (this.activity != '' && this.dorm != '') {
      this.c ='true';
    }
    if (this.activity != "" && this.dorm != "" && this.clas != "" && this.c === 'true') {
      this.btn = true;
    }
  }

  ondormChange(dorm: any) {
    this.idsend = "";
    this.dorm = dorm;
    if (this.activity != '' && this.dorm != '') {
      this.c ='true';
    }
    if (this.activity != "" && this.dorm != "" && this.clas != "" && this.c === 'true') {
      this.btn = true;
    }
  }

  selectname() {
    let out = {dorms: this.dorm,
               clas: this.clas}
    return new Promise(resolve => {
    this.http.post("http://119.46.21.249/www/selectname.php", JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
        this.names = JSON.parse(data['_body']);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }


  selectname1() {
    let out = {clas: this.clas}
    return new Promise(resolve => {
    this.http.post("http://119.46.21.249/www/selectname1.php", JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
        this.names = JSON.parse(data['_body']);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  selectname2() {
    let out = {dorms: this.dorm}
    return new Promise(resolve => {
    this.http.post("http://119.46.21.249/www/selectname2.php", JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
        this.names = JSON.parse(data['_body']);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  onclassChange(classes: any) {
    this.idsend = "";
    this.clas = classes;
    if (this.activity != "" && this.dorm != "" && this.clas != "" && this.c === 'true') {
      this.btn = true;
    }
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'แจ้งเตือน',
      subTitle: 'กรุณาเลือกให้ครบทุกประเภท<br>หรือเลือกอย่างใดอย่างหนึ่ง<br>กรณีไม่เลือกประเภทนั้น<br>กรุณาเลือก "ไม่เรียงตาม"',
      buttons: ['ตกลง']
    });
    alert.present();
  }

  showAlertper() {
    let alert = this.alertCtrl.create({
      title: 'แจ้งเตือน',
      subTitle: 'คุณไม่สามารถเลือกเฉพาะประเภทกิจกรรมได้',
      buttons: ['ตกลง']
    });
    alert.present();
  }

  callact() {
    if (this.activity == "" && this.clas == "" && this.dorm == "") {
      this.showAlert();
    } else {
      if (this.activity != "" && this.clas == "none" && this.dorm == "none") {
        this.searchService.searchact(this.activity)
        .then(data => {
          this.navCtrl.push(SearchPage, {search: data});
        })
      } else if (this.activity != "" && this.dorm != "" && this.dorm != "none" && this.clas == "none") {
        this.searchService.searchactdorm(this.activity, this.dorm)
        .then(data => {
          this.navCtrl.push(SearchPage, {search: data});
        })
      } else if (this.activity != "" && this.clas != ""  && this.clas != "none" && this.dorm == "none") {
        this.searchService.searchactclass(this.activity, this.clas)
        .then(data => {
          this.navCtrl.push(SearchPage, {search: data});
        })
      } else if (this.activity != "" && this.clas != "none" && this.dorm != "none") {
        this.searchService.searchall(this.activity, this.clas, this.dorm)
        .then(data => {
          this.navCtrl.push(SearchPage, {search: data});
        })
      }
    }

  }

  callactperson() {
    if (this.activity == "" && this.clas == "" && this.dorm == "") {
      this.showAlert();
    } else {
      if (this.activity != "" && this.clas == "none" && this.dorm == "none") {
        this.showAlertper()
      } else if (this.activity != "" && this.dorm != "" && this.dorm != "none" && this.clas == "none") {
        this.selectname2()
        .then(data => {
          let per = {act_type: this.activity,
                     dorm: this.dorm,
                     name: this.names}
          this.navCtrl.push(PersonPage, {person: per});
        })
      } else if (this.activity != "" && this.clas != ""  && this.clas != "none" && this.dorm == "none") {
        this.selectname1()
        .then(data => {
          let per = {act_type: this.activity,
                     class: this.clas,
                     name: this.names}
          this.navCtrl.push(PersonPage, {person: per});
        })
      } else if (this.activity != "" && this.clas != "none" && this.dorm != "none") {
        this.selectname()
        .then(data => {
          let per = {act_type: this.activity,
                     class: this.clas,
                     dorm: this.dorm,
                     name: this.names}
          this.navCtrl.push(PersonPage, {person: per});
        })
      }
    }

  }


}
