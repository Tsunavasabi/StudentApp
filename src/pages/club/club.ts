import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SelectserviceProvider } from '../../providers/selectservice/selectservice';
import { UpdateserviceProvider } from '../../providers/updateservice/updateservice';
import { DeleteserviceProvider } from '../../providers/deleteservice/deleteservice';
import { SendserviceProvider } from '../../providers/sendservice/sendservice';

@IonicPage()
@Component({
  selector: 'page-club',
  templateUrl: 'club.html',
})
export class ClubPage {
  public outreach: any;
  public act_id: {};
  public send: boolean;
  public flag: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public selectService: SelectserviceProvider,
    public updateService: UpdateserviceProvider,
    public deleteService: DeleteserviceProvider,
    public sendService: SendserviceProvider,
    public alertCtrl: AlertController) {
      this.selectService.Selectclub()
      .then(data => {
        this.outreach = data;
      });

  }

  ionViewWillEnter() {
    this.selectService.Selectclub()
    .then(data => {
      this.outreach = data;
    });
  }

  updatedata(act_id) {
    this.updateService.updateclub(act_id)
    .then(data => {
      this.navCtrl.push('Form1updatePage', {outdata: data});
    });
  }

  deleteConfirm(act_id) {
    let confirm = this.alertCtrl.create({
      title: 'ลบ',
      message: 'คุณต้องการลบใช่หรือไม่ ?',
      buttons: [
        { text: 'ยกเลิก',
          handler: () => {} },
        { text: 'ตกลง',
          handler: () => {
            this.deletedata(act_id);}}]});
    confirm.present();
  }

  deletedata(act_id) {
    console.log(act_id);
    this.deleteService.deleteclub(act_id)
    .then(data => {
      console.log(data['_body']);
    });
  }

  senddata(act_id) {
    let send = {act_id: act_id,
                flag: '1'}
    this.navCtrl.push('TeacherlistPage', {senddata: send});
  }

  doRefresh(refresher) {
    this.selectService.Selectclub()
    .then(data => {
      console.log(data);
      this.outreach = data;
    });

    setTimeout(() => {
      refresher.complete();
    }, 1000);

  }


}
