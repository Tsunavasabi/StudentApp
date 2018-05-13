import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SendserviceProvider } from '../../providers/sendservice/sendservice';

@IonicPage()
@Component({
  selector: 'page-teacherlist',
  templateUrl: 'teacherlist.html',
})
export class TeacherlistPage {
  teacher: any;
  act_id: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public sendService: SendserviceProvider,
    public alertCtrl: AlertController) {
    this.act_id = this.navParams.get('senddata');
    this.sendService.getalltch()
    .then(data => {
      this.teacher = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherlistPage');
  }

  SendTo(tch) {
    let confirm = this.alertCtrl.create({
      title: 'ส่งรายการ',
      message: 'ต้องการส่งรายการนี้หรือไม่ ?',
      buttons: [
        { text: 'ยกเลิก'},
        {text: 'ตกลง',
          handler: () => {
            this.senddata(tch);}}]});
    confirm.present();
  }

  senddata(tch) {

    this.sendService.senddata(this.act_id, tch)
    .then(data => {
      let alert = this.alertCtrl.create({
      subTitle: 'ส่งเรียบร้อยแล้ว',
      buttons: ['ตกลง']
    });
    alert.present();
    this.navCtrl.pop();
    });

  }

}
