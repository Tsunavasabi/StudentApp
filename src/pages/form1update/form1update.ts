import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import { Device } from '@ionic-native/device';

@IonicPage()
@Component({
  selector: 'page-form1update',
  templateUrl: 'form1update.html',
})
export class Form1updatePage {
  editdata: any;
  phoneid: string;
  url = "http://www.zp11489.tld.122.155.167.85.no-domain.name/www/update/"
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public http: Http, public platform: Platform,
    public device: Device) {
      if (this.platform.is('ios')) {
        this.phoneid = this.device.uuid;
      } else if (this.platform.is('android')) {
        this.phoneid = this.device.serial;
      }
    this.editdata = this.navParams.get('outdata');
    console.log(this.editdata)
  }

  typeclub(club: any) {
    this.editdata[0].act_places = club;
  }

  Form1Confirm() {
    let confirm = this.alertCtrl.create({
      title: 'บันทึก',message: 'คุณต้องการบันทึกใช่หรือไม่ ?',
      buttons: [
        { text: 'ยกเลิก'},
        { text: 'ตกลง',handler: () => {this.Form1();}}]});
    confirm.present();
  }

  Form1() {
    let postParams =  {
      act_id: this.editdata[0].act_id,
      date: this.editdata[0].act_date,
      hour: this.editdata[0].act_hours,
      place: this.editdata[0].act_places,
      make: this.editdata[0].act_details,
      feel: this.editdata[0].act_feels,
      pn_id: this.phoneid,
    };
    this.http.post(this.url+"outreachup.php", JSON.stringify(postParams))
      .subscribe(data => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);// Error getting the data
      });
  }

  Form2Confirm() {
    let confirm = this.alertCtrl.create({
      title: 'บันทึก',message: 'คุณต้องการบันทึกใช่หรือไม่ ?',
      buttons: [
        { text: 'ยกเลิก'},
        { text: 'ตกลง',handler: () => {this.Form2();}}]});
    confirm.present();
  }

  Form2() {
    let postParams =  {
      act_id: this.editdata[0].act_id,
      date: this.editdata[0].act_date,
      hour: this.editdata[0].act_hours,
      place: this.editdata[0].act_places,
      make: this.editdata[0].act_details,
      feel: this.editdata[0].act_feels,
      pn_id: this.phoneid,
    };
    console.log(postParams);
    this.http.post(this.url+"schoolup.php", JSON.stringify(postParams))
      .subscribe(data => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);// Error getting the data
      });
  }

  Form3Confirm() {
    let confirm = this.alertCtrl.create({
      title: 'บันทึก',message: 'คุณต้องการบันทึกใช่หรือไม่ ?',
      buttons: [
        { text: 'ยกเลิก'},
        { text: 'ตกลง',handler: () => {this.Form3();}}]});
    confirm.present();
  }

  Form3() {
    let postParams =  {
      act_id: this.editdata[0].act_id,
      date: this.editdata[0].act_date,
      hour: this.editdata[0].act_hours,
      place: this.editdata[0].act_places,
      make: this.editdata[0].act_details,
      feel: this.editdata[0].act_feels,
      head: this.editdata[0].act_head,
      pn_id: this.phoneid,
    };
    console.log(postParams);
    this.http.post(this.url+"bookup.php", JSON.stringify(postParams))
      .subscribe(data => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);// Error getting the data
      });
  }

  Form4Confirm() {
    let confirm = this.alertCtrl.create({
      title: 'บันทึก',message: 'คุณต้องการบันทึกใช่หรือไม่ ?',
      buttons: [
        { text: 'ยกเลิก'},
        { text: 'ตกลง',handler: () => {this.Form4();}}]});
    confirm.present();
  }

  Form4() {
    let postParams =  {
      act_id: this.editdata[0].act_id,
      place: this.editdata[0].act_places,
      make: this.editdata[0].act_details,
      feel: this.editdata[0].act_feels,
      pn_id: this.phoneid
    };
    console.log(postParams);
    this.http.post(this.url+"academicup.php", JSON.stringify(postParams))
      .subscribe(data => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);// Error getting the data
      });
  }

  Form5Confirm() {
    let confirm = this.alertCtrl.create({
      title: 'บันทึก',message: 'คุณต้องการบันทึกใช่หรือไม่ ?',
      buttons: [
        { text: 'ยกเลิก'},
        { text: 'ตกลง',handler: () => {this.Form5();}}]});
    confirm.present();
  }

  Form5() {
    let postParams =  {
      act_id: this.editdata[0].act_id,
      place: this.editdata[0].act_places,
      make: this.editdata[0].act_details,
      feel: this.editdata[0].act_feels,
      pn_id: this.phoneid,
    };
    console.log(postParams);
    this.http.post(this.url+"buddhaup.php", JSON.stringify(postParams))
      .subscribe(data => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);// Error getting the data
      });
  }

  Form6Confirm() {
    let confirm = this.alertCtrl.create({
      title: 'บันทึก',message: 'คุณต้องการบันทึกใช่หรือไม่ ?',
      buttons: [
        { text: 'ยกเลิก'},
        { text: 'ตกลง',handler: () => {this.Form6();}}]});
    confirm.present();
  }

  Form6() {
    let postParams =  {
      act_id: this.editdata[0].act_id,
      date: this.editdata[0].act_date,
      place: this.editdata[0].act_places,
      make: this.editdata[0].act_details,
      feel: this.editdata[0].act_feels,
      pn_id: this.phoneid,
    };
    this.http.post(this.url+"scivisitup.php", JSON.stringify(postParams))
      .subscribe(data => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);// Error getting the data
      });
  }

  Form7Confirm() {
    let confirm = this.alertCtrl.create({
      title: 'บันทึก',message: 'คุณต้องการบันทึกใช่หรือไม่ ?',
      buttons: [
        { text: 'ยกเลิก'},
        { text: 'ตกลง',handler: () => {this.Form7();}}]});
    confirm.present();
  }

  Form7() {
    let postParams =  {
      act_id: this.editdata[0].act_id,
      date: this.editdata[0].act_date,
      place: this.editdata[0].act_places,
      make: this.editdata[0].act_details,
      feel: this.editdata[0].act_feels,
      pn_id: this.phoneid,
    };
    this.http.post(this.url+"socialvisitup.php", JSON.stringify(postParams))
      .subscribe(data => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);// Error getting the data
      });
  }

  Form8Confirm() {
    let confirm = this.alertCtrl.create({
      title: 'บันทึก',message: 'คุณต้องการบันทึกใช่หรือไม่ ?',
      buttons: [
        { text: 'ยกเลิก'},
        { text: 'ตกลง',handler: () => {this.Form8();}}]});
    confirm.present();
  }

  Form8() {
    let postParams =  {
      act_id: this.editdata[0].act_id,
      date: this.editdata[0].act_date,
      place: this.editdata[0].act_places,
      make: this.editdata[0].act_details,
      feel: this.editdata[0].act_feels,
      pn_id: this.phoneid,
    };
    this.http.post(this.url+"scilecturehup.php", JSON.stringify(postParams))
      .subscribe(data => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);// Error getting the data
      });
  }

  Form9Confirm() {
    let confirm = this.alertCtrl.create({
      title: 'บันทึก',message: 'คุณต้องการบันทึกใช่หรือไม่ ?',
      buttons: [
        { text: 'ยกเลิก'},
        { text: 'ตกลง',handler: () => {this.Form9();}}]});
    confirm.present();
  }

  Form9() {
    let postParams =  {
      act_id: this.editdata[0].act_id,
      date: this.editdata[0].act_date,
      place: this.editdata[0].act_places,
      make: this.editdata[0].act_details,
      feel: this.editdata[0].act_feels,
      pn_id: this.phoneid,
    };
    this.http.post(this.url+"personlectureup.php", JSON.stringify(postParams))
      .subscribe(data => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);// Error getting the data
      });
  }

  Form10Confirm() {
    let confirm = this.alertCtrl.create({
      title: 'บันทึก',message: 'คุณต้องการบันทึกใช่หรือไม่ ?',
      buttons: [
        { text: 'ยกเลิก'},
        { text: 'ตกลง',handler: () => {this.Form10();}}]});
    confirm.present();
  }

  Form10() {
    let postParams =  {
      act_id: this.editdata[0].act_id,
      date: this.editdata[0].act_date,
      place: this.editdata[0].act_places,
      make: this.editdata[0].act_details,
      feel: this.editdata[0].act_feels,
      pn_id: this.phoneid,
    };
    this.http.post(this.url+"sociallectureup.php", JSON.stringify(postParams))
      .subscribe(data => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);// Error getting the data
      });
  }

  Form11Confirm() {
    let confirm = this.alertCtrl.create({
      title: 'บันทึก',message: 'คุณต้องการบันทึกใช่หรือไม่ ?',
      buttons: [
        { text: 'ยกเลิก'},
        { text: 'ตกลง',handler: () => {this.Form11();}}]});
    confirm.present();
  }

  Form11() {
    let postParams =  {
      act_id: this.editdata[0].act_id,
      date: this.editdata[0].act_date,
      hour: this.editdata[0].act_hours,
      place: this.editdata[0].act_places,
      make: this.editdata[0].act_details,
      feel: this.editdata[0].act_feels,
      head: this.editdata[0].act_head,
      pn_id: this.phoneid,
    };
    this.http.post(this.url+"clubup.php", JSON.stringify(postParams))
      .subscribe(data => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);// Error getting the data
      });
  }

  Form12Confirm() {
    let confirm = this.alertCtrl.create({
      title: 'บันทึก',message: 'คุณต้องการบันทึกใช่หรือไม่ ?',
      buttons: [
        { text: 'ยกเลิก'},
        { text: 'ตกลง',handler: () => {this.Form12();}}]});
    confirm.present();
  }

  Form12() {
    let postParams =  {
      act_id: this.editdata[0].act_id,
      date: this.editdata[0].act_date,
      make: this.editdata[0].act_details,
      start: this.editdata[0].act_time_starts,
      end: this.editdata[0].act_time_ends,
      pn_id: this.phoneid,
    };
    console.log(postParams);
    this.http.post(this.url+"exerciseup.php", JSON.stringify(postParams))
      .subscribe(data => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);// Error getting the data
      });
  }

  Form13Confirm() {
    let confirm = this.alertCtrl.create({
      title: 'บันทึก',message: 'คุณต้องการบันทึกใช่หรือไม่ ?',
      buttons: [
        { text: 'ยกเลิก'},
        { text: 'ตกลง',handler: () => {this.Form13();}}]});
    confirm.present();
  }

  Form13() {
    let postParams =  {
      act_id: this.editdata[0].act_id,
      date: this.editdata[0].act_date,
      head: this.editdata[0].act_head,
      pn_id: this.phoneid,
    };
    console.log(postParams);
    this.http.post(this.url+"meetteacherup.php", JSON.stringify(postParams))
      .subscribe(data => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);// Error getting the data
      });
  }

}
