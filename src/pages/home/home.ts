import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { MemberPage } from '../member/member';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { TeachermemberPage } from '../teachermember/teachermember';
import { LogserviceProvider } from '../../providers/logservice/logservice';
import { Device } from '@ionic-native/device';

@Injectable()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: '';
  pass: '';
  public respone: any;
  public detail: any;
  public detall: any;
  user1: any;
  User:any;
  remember: boolean;
  loading = this.loadingCtrl.create({
    spinner: 'bubbles',
    content: 'Please wait...'
  });

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    private storage: Storage,
    public http: Http,
    public logService: LogserviceProvider, public alertCtrl: AlertController,
    public device: Device) {

  }

  ionViewDidLoad() {
    this.storage.get('user').then((data) => {
      if (data !== null) {
        let usage = JSON.parse(data);
        console.log(usage);
        if (usage.flag == '0') {
            this.navCtrl.setRoot(MemberPage, {detailper: usage});
        } else if (usage.flag == '2'){
            this.navCtrl.setRoot(TeachermemberPage, {detailper: usage});
        }
      }
    });

  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'แจ้งเตือน',
      subTitle: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง<br>กรุณาตรวจสอบอีกครั้ง',
      buttons: ['ตกลง']
    });
    alert.present();
  }

  Login() {
    let data={username: this.user,
              password:this.pass};
    this.logService.Login(data)
    .then(data => {
      console.log(data)
      if (data['_body']=="0"){
      this.showAlert();
    } else {
      this.loading.present();
      this.respone = data['_body'];
      this.loading.dismiss();
      this.detall = JSON.parse(this.respone);
      if (this.remember == true) {
        this.storage.set('user', this.respone);
      }
      if (this.detall.flag == "0") {
        this.navCtrl.setRoot(MemberPage, {detailper: this.detall});
      } else {
        this.navCtrl.setRoot(TeachermemberPage, {detailper: this.detall});
      }

      }
    });
  }

    }
