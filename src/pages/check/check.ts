import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { CheckProvider } from '../../providers/check/check';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-check',
  templateUrl: 'check.html',
})
export class CheckPage {
  public check: any;
  public Detail: any;
  public date: string = new Date().toISOString();
  private pin: string = ""
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public checkService: CheckProvider,
    public alertCtrl: AlertController,
     public http: Http,
    public toastCtrl: ToastController) {
    this.check = this.navParams.get('data');
    this.Detail = this.navParams.get('tch_data');
    console.log(this.check);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckPage');
    console.log(this.date)
  }

  message() {
    console.log(this.Detail.tch_phone)
    
  }

  UnCheckTo() {
    let confirm = this.alertCtrl.create({
      title: 'ส่งคืน',
      message: 'คุณต้องการส่งคืนใช่หรือไม่ ?',
      buttons: [{ text: 'ยกเลิก'},
                { text: 'ตกลง', handler: () => {this.Unchecksend() }}]});
    confirm.present();
  }

  CheckTo() {
    let confirm = this.alertCtrl.create({
      title: 'ตรวจ',
      message: 'คุณต้องการตรวจใช่หรือไม่ ?',
      buttons: [{ text: 'ยกเลิก'},
                { text: 'ตกลง',handler: () => {this.Checksend()}}]});
    confirm.present();
  }

  generatePin() {
    let min = 0
    let max = 9999
    return ("0" + Math.floor(Math.random() * (max - min + 1)) + min).substr(-4);
  }

  Checksend() {
    let pin = this.generatePin()
    this.pin = pin
    let actpin = {act_id: this.check.act_id,
                  act_pin: pin}
    console.log(pin)
    console.log(this.pin)
    this.http.post("http://www.zp11489.tld.122.155.167.85.no-domain.name/www/pinup.php", JSON.stringify(actpin))
      .subscribe(data => {
        console.log(data['_body'])
        if(data['_body']==pin) {
          this.Checkinput()
        }
      }, err => {
        console.log(err);// Error getting the data
      });
  }

  Uncheckinput() {
    let phoneid = {phoneid: this.Detail.tch_phone_id}
    this.http.post("http://www.zp11489.tld.122.155.167.85.no-domain.name/www/phoneid.php", JSON.stringify(phoneid))
      .subscribe(data => {
        console.log(data['_body'])
        this.Uncheckcomplete()
      }, err => {
        console.log(err);// Error getting the data
      });
  }

  Checkinput() {
    let phoneid = {phoneid: this.Detail.tch_phone_id}
    this.http.post("http://www.zp11489.tld.122.155.167.85.no-domain.name/www/phoneid.php", JSON.stringify(phoneid))
      .subscribe(data => {
        console.log(data['_body'])
        this.Checkcomplete()
      }, err => {
        console.log(err);// Error getting the data
      });
  }

  Checkpin(pin) {
    if(pin.PIN==this.pin) {
        this.Checkcomplete()
    } else {
        this.presentToast()
        this.Checkinput()
    }
  }

  Uncheckpin(pin) {
    if(pin.PIN==this.pin) {
        this.Uncheckcomplete()
    } else {
        this.presentToast()
        this.Checkinput()
    }
  }

  presentToast() {
   const toast = this.toastCtrl.create({
     message: 'รหัสผิดพลาดกรุณาใส่รหัสอีกครั้ง',
     duration: 2000
   });
   toast.present();
 }

  Checkcomplete() {
    let check = {act_id: this.check.act_id,
                 act_adivice_date: this.date,
                 act_advices: this.check.act_advices}
    console.log(check)
    this.checkService.Check(check)
    .then(data => {
      let alert = this.alertCtrl.create({
      subTitle: 'ตรวจเรียบร้อยแล้ว',
      buttons: ['ตกลง']
      });
      alert.present();
      this.navCtrl.pop();
    });
  }

  Uncheckcomplete() {
    let check = {act_id: this.check.act_id,
                 act_adivice_date: this.date,
                 act_advices: this.check.act_advices}
    this.checkService.Uncheck(check)
    .then(data => {
      let alert = this.alertCtrl.create({
      subTitle: 'ตรวจเรียบร้อยแล้ว',
      buttons: ['ตกลง']
      });
      alert.present();
      this.navCtrl.pop();
    });
  }

  Unchecksend() {
    let pin = this.generatePin()
    this.pin = pin
    let actpin = {act_id: this.check.act_id,
                  act_pin: pin}
    this.http.post("http://www.zp11489.tld.122.155.167.85.no-domain.name/www/pinup.php", JSON.stringify(actpin))
      .subscribe(data => {
        console.log(data)
        if(data['_body']==pin) {
          this.Uncheckinput()
        }
      }, err => {
        console.log(err);// Error getting the data
      });
    console.log(pin)
  }

}
