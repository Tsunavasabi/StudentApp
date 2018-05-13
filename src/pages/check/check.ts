import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CheckProvider } from '../../providers/check/check';


@IonicPage()
@Component({
  selector: 'page-check',
  templateUrl: 'check.html',
})
export class CheckPage {
  public check: any;
  public date: string = new Date().toISOString();
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public checkService: CheckProvider,
    public alertCtrl: AlertController) {
    this.check = this.navParams.get('data');
    console.log(this.check);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckPage');
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

  Checksend() {
    let check = {act_id: this.check.act_id,
                 act_adivice_date: this.date,
                 act_advices: this.check.act_advices}
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

  Unchecksend() {
    let check = {act_id: this.check.act_id}
    this.checkService.Uncheck(check)
    .then(data => {
      let alert = this.alertCtrl.create({
      subTitle: 'ส่งคืนเรียบร้อยแล้ว',
      buttons: ['ตกลง']
      });
      alert.present();
      this.navCtrl.pop();
    });
  }

}
