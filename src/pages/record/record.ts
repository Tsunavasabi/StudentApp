import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { ActivityProvider } from '../../providers/activity/activity';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Device } from '@ionic-native/device';

@IonicPage()
@Component({
  selector: 'page-record',
  templateUrl: 'record.html',
})
export class RecordPage {
  acttype: any;
  actid: any;
  phoneid: string;
  public Person: any;
  public select1: boolean = false;
  public select2: boolean = false;
  public select3: boolean = false;
  public select4: boolean = false;
  public select5: boolean = false;
  public select6: boolean = false;
  public select7: boolean = false;
  public select8: boolean = false;
  public select9: boolean = false;
  public select10: boolean = false;
  public select11: boolean = false;
  public select12: boolean = false;
  public select13: boolean = false;
  form1detail : any = {
    date: '2018-01-01'
  };
  form2detail: any = {
    date: '2018-01-01'
  };
  form3detail: any = {
    date: '2018'
  };
  form4detail:any = {};
  form5detail:any = {};
  form6detail:any = {
    date: '2018-01-01'
  };
  form7detail: any = {
    date: '2018-01-01'
  };
  form8detail: any = {
    date: '2018-01-01'
  };
  form9detail: any = {
    date: '2018-01-01'
  };
  form10detail: any = {
    date: '2018-01-01'
  };
  form11detail:any = {
    date: '2018-01-01',
    place: ''
  };
  form12detail:any = {
    date: '2018-01-01',
    timeStarts: '00:00',
    timeEnds: '00:00'
  };
  form13detail:any = {
    date: '2018-01-01'
  };
  isValid: boolean;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loginservice: LoginProvider,
    public activityService: ActivityProvider,
    public http: Http,
    public alertCtrl: AlertController, public platform: Platform,
    public device: Device) {
      if (this.platform.is('ios')) {
        this.phoneid = this.device.uuid;
      } else if (this.platform.is('android')) {
        this.phoneid = this.device.serial;
      }
    this.getacttype();
    this.Person = this.navParams.get('person');

  }

  Form1Confirm() {
    let confirm = this.alertCtrl.create({
      title: 'บันทึก',
      message: 'คุณต้องการบันทึกใช่หรือไม่ ?',
      buttons: [{ text: 'ยกเลิก'},{ text: 'ตกลง',handler: () => {this.Form1();}}]});
    confirm.present();
  }

  Form1() {
      let postParams =  {
        acttype: "01",
        act_type_name: "การบำเพ็ญประโยชน์ต่อชุมชนและสังคม",
        std_firstname: this.Person.std_firstname,
        std_lastname: this.Person.std_lastname,
        std_classroom: this.Person.std_classroom,
        std_number: this.Person.std_number,
        std_dorm: this.Person.std_dormitory,
        std_id: this.Person.std_ID,
        date: this.form1detail.date,
        hour: this.form1detail.hour,
        place: this.form1detail.place,
        make: this.form1detail.make,
        feel: this.form1detail.feel,
        pn_id: this.phoneid,
      };
      this.http.post("http://119.46.21.249/www/insert/form1insert.php", JSON.stringify(postParams))
        .subscribe(data => {
          this.navCtrl.pop();
        }, error => {
          console.log(error);});


  }

  Form2Confirm() {
    let confirm = this.alertCtrl.create({
      title: 'บันทึก',
      message: 'คุณต้องการบันทึกใช่หรือไม่ ?',
      buttons: [{ text: 'ยกเลิก'},{ text: 'ตกลง',handler: () => {this.Form2();}}]});
    confirm.present();
  }

  Form2() {
    let postParams =  {
      acttype: "02",
      act_type_name: "การบำเพ็ญประโยชน์ต่อโรงเรียน",
      std_firstname: this.Person.std_firstname,
      std_lastname: this.Person.std_lastname,
      std_classroom: this.Person.std_classroom,
      std_number: this.Person.std_number,
      std_dorm: this.Person.std_dormitory,
      std_id: this.Person.std_ID,
      date: this.form2detail.date,
      hour: this.form2detail.hour,
      place: this.form2detail.place,
      make: this.form2detail.make,
      feel: this.form2detail.feel,
      pn_id: this.phoneid
    };
    this.http.post("http://119.46.21.249/www/insert/form2insert.php", JSON.stringify(postParams))
      .subscribe(data => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);});
  }

  Form3Confirm() {
    let confirm = this.alertCtrl.create({
      title: 'บันทึก',
      message: 'คุณต้องการบันทึกใช่หรือไม่ ?',
      buttons: [{ text: 'ยกเลิก'},{ text: 'ตกลง',handler: () => {this.Form3();}}]});
    confirm.present();
  }

  Form3() {
    let postParams =  {
      acttype: "03",
      act_type_name: "การอ่านหนังสือ",
      std_firstname: this.Person.std_firstname,
      std_lastname: this.Person.std_lastname,
      std_classroom: this.Person.std_classroom,
      std_number: this.Person.std_number,
      std_dorm: this.Person.std_dormitory,
      std_id: this.Person.std_ID,
      date: this.form3detail.date,
      hour: this.form3detail.hour,
      place: this.form3detail.place,
      make: this.form3detail.make,
      feel: this.form3detail.feel,
      head: this.form3detail.head,
      print: this.form3detail.print,
      pn_id: this.phoneid
    };
    this.http.post("http://119.46.21.249/www/insert/form3insert.php", JSON.stringify(postParams))
      .subscribe(data => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);});
  }

  Form4Confirm() {
    let confirm = this.alertCtrl.create({
      title: 'บันทึก',
      message: 'คุณต้องการบันทึกใช่หรือไม่ ?',
      buttons: [{ text: 'ยกเลิก'},{ text: 'ตกลง',handler: () => {this.Form4();}}]});
    confirm.present();
  }

  Form4() {
    let postParams =  {
      acttype: "04",
      act_type_name: "การเข้าค่ายวิชาการ",
      std_firstname: this.Person.std_firstname,
      std_lastname: this.Person.std_lastname,
      std_classroom: this.Person.std_classroom,
      std_number: this.Person.std_number,
      std_dorm: this.Person.std_dormitory,
      std_id: this.Person.std_ID,
      head: this.form4detail.head,
      place: this.form4detail.place,
      make: this.form4detail.make,
      feel: this.form4detail.feel,
      pn_id: this.phoneid
    };
    console.log(postParams);
    this.http.post("http://119.46.21.249/www/insert/form4insert.php", JSON.stringify(postParams))
      .subscribe(data => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);});
  }

  Form5Confirm() {
    let confirm = this.alertCtrl.create({
      title: 'บันทึก',
      message: 'คุณต้องการบันทึกใช่หรือไม่ ?',
      buttons: [{ text: 'ยกเลิก'},{ text: 'ตกลง',handler: () => {this.Form5();}}]});
    confirm.present();
  }

  Form5() {
    let postParams =  {
      acttype: "05",
      act_type_name: "การเข้าค่ายปฏิบัติธรรม",
      std_firstname: this.Person.std_firstname,
      std_lastname: this.Person.std_lastname,
      std_classroom: this.Person.std_classroom,
      std_number: this.Person.std_number,
      std_dorm: this.Person.std_dormitory,
      std_id: this.Person.std_ID,
      head: this.form5detail.head,
      place: this.form5detail.place,
      make: this.form5detail.make,
      feel: this.form5detail.feel,
      pn_id: this.phoneid
    };
    this.http.post("http://119.46.21.249/www/insert/form5insert.php", JSON.stringify(postParams))
      .subscribe(data => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);});
  }

  Form6Confirm() {
    let confirm = this.alertCtrl.create({
      title: 'บันทึก',
      message: 'คุณต้องการบันทึกใช่หรือไม่ ?',
      buttons: [{ text: 'ยกเลิก'},{ text: 'ตกลง',handler: () => {this.Form6();}}]});
    confirm.present();
  }

  Form6() {
    let postParams =  {
      acttype: "06",
      act_type_name: "การศึกษาดูงานด้านคณิตศาสตร์ วิทยาศาสตร์และเทคโนโลยี",
      std_firstname: this.Person.std_firstname,
      std_lastname: this.Person.std_lastname,
      std_classroom: this.Person.std_classroom,
      std_number: this.Person.std_number,
      std_dorm: this.Person.std_dormitory,
      std_id: this.Person.std_ID,
      date: this.form6detail.date,
      head: this.form6detail.head,
      place: this.form6detail.place,
      make: this.form6detail.make,
      feel: this.form6detail.feel,
      pn_id: this.phoneid
    };
    this.http.post("http://119.46.21.249/www/insert/form6insert.php", JSON.stringify(postParams))
      .subscribe(data => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);});
  }

  Form7Confirm() {
    let confirm = this.alertCtrl.create({
      title: 'บันทึก',
      message: 'คุณต้องการบันทึกใช่หรือไม่ ?',
      buttons: [{ text: 'ยกเลิก'},{ text: 'ตกลง',handler: () => {this.Form7();}}]});
    confirm.present();
  }

  Form7() {
    let postParams =  {
      acttype: "07",
      act_type_name: "การศึกษาดูงานด้านสังคมศึกษา ภาษา ศาสนา ศิลปวัฒนธรรมและโบราณคดี",
      std_firstname: this.Person.std_firstname,
      std_lastname: this.Person.std_lastname,
      std_classroom: this.Person.std_classroom,
      std_number: this.Person.std_number,
      std_dorm: this.Person.std_dormitory,
      std_id: this.Person.std_ID,
      date: this.form7detail.date,
      head: this.form7detail.head,
      place: this.form7detail.place,
      make: this.form7detail.make,
      feel: this.form7detail.feel,
      pn_id: this.phoneid
    };
    this.http.post("http://119.46.21.249/www/insert/form7insert.php", JSON.stringify(postParams))
      .subscribe(data => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);});
  }

  Form8Confirm() {
    let confirm = this.alertCtrl.create({
      title: 'บันทึก',
      message: 'คุณต้องการบันทึกใช่หรือไม่ ?',
      buttons: [{ text: 'ยกเลิก'},{ text: 'ตกลง',handler: () => {this.Form8();}}]});
    confirm.present();
  }

  Form8() {
    let postParams =  {
      acttype: "08",
      act_type_name: "การฟังบรรยายด้านวิทยาศาสตร์ และเทคโนโลยี",
      std_firstname: this.Person.std_firstname,
      std_lastname: this.Person.std_lastname,
      std_classroom: this.Person.std_classroom,
      std_number: this.Person.std_number,
      std_dorm: this.Person.std_dormitory,
      std_id: this.Person.std_ID,
      date: this.form8detail.date,
      head: this.form8detail.head,
      make: this.form8detail.make,
      feel: this.form8detail.feel,
      pn_id: this.phoneid
    };
    this.http.post("http://119.46.21.249/www/insert/form8insert.php", JSON.stringify(postParams))
      .subscribe(data => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);});
  }

  Form9Confirm() {
    let confirm = this.alertCtrl.create({
      title: 'บันทึก',
      message: 'คุณต้องการบันทึกใช่หรือไม่ ?',
      buttons: [{ text: 'ยกเลิก'},{ text: 'ตกลง',handler: () => {this.Form9();}}]});
    confirm.present();
  }

  Form9() {
    let postParams =  {
      acttype: "09",
      act_type_name: "การฟังบรรยายด้านพัฒนาบุคลิกภาพและความฉลาดทางอารมณ์",
      std_firstname: this.Person.std_firstname,
      std_lastname: this.Person.std_lastname,
      std_classroom: this.Person.std_classroom,
      std_number: this.Person.std_number,
      std_dorm: this.Person.std_dormitory,
      std_id: this.Person.std_ID,
      date: this.form9detail.date,
      head: this.form9detail.head,
      make: this.form9detail.make,
      feel: this.form9detail.feel,
      pn_id: this.phoneid
    };
    this.http.post("http://119.46.21.249/www/insert/form9insert.php", JSON.stringify(postParams))
      .subscribe(data => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);});
  }

  Form10Confirm() {
    let confirm = this.alertCtrl.create({
      title: 'บันทึก',
      message: 'คุณต้องการบันทึกใช่หรือไม่ ?',
      buttons: [{ text: 'ยกเลิก'},{ text: 'ตกลง',handler: () => {this.Form10();}}]});
    confirm.present();
  }

  Form10() {
    let postParams =  {
      acttype: "10",
      act_type_name: "การฟังบรรยายด้านสังคมศึกษา ภาษา ศาสนา ศิลปวัฒนธรรมและดนตรี",
      std_firstname: this.Person.std_firstname,
      std_lastname: this.Person.std_lastname,
      std_classroom: this.Person.std_classroom,
      std_number: this.Person.std_number,
      std_dorm: this.Person.std_dormitory,
      std_id: this.Person.std_ID,
      date: this.form10detail.date,
      head: this.form10detail.head,
      make: this.form10detail.make,
      feel: this.form10detail.feel,
      pn_id: this.phoneid
    };
    this.http.post("http://119.46.21.249/www/insert/form10insert.php", JSON.stringify(postParams))
      .subscribe(data => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);});
  }

  Form11Confirm() {
    let confirm = this.alertCtrl.create({
      title: 'บันทึก',
      message: 'คุณต้องการบันทึกใช่หรือไม่ ?',
      buttons: [{ text: 'ยกเลิก'},{ text: 'ตกลง',handler: () => {this.Form11();}}]});
    confirm.present();
  }

  Form11() {
    let postParams =  {
      acttype: "11",
      act_type_name: "การเข้าร่วมกิจกรรมชุมนุม",
      std_firstname: this.Person.std_firstname,
      std_lastname: this.Person.std_lastname,
      std_classroom: this.Person.std_classroom,
      std_number: this.Person.std_number,
      std_dorm: this.Person.std_dormitory,
      std_id: this.Person.std_ID,
      date: this.form11detail.date,
      head: this.form11detail.head,
      hour: this.form11detail.hour,
      place: this.form11detail.place,
      make: this.form11detail.make,
      feel: this.form11detail.feel,
      pn_id: this.phoneid
    };
    this.http.post("http://119.46.21.249/www/insert/form11insert.php", JSON.stringify(postParams))
      .subscribe(data => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);});
  }

  Form12Confirm() {
    let confirm = this.alertCtrl.create({
      title: 'บันทึก',
      message: 'คุณต้องการบันทึกใช่หรือไม่ ?',
      buttons: [{ text: 'ยกเลิก'},{ text: 'ตกลง',handler: () => {this.Form12();}}]});
    confirm.present();
  }

  Form12() {
    let postParams =  {
      acttype: "12",
      act_type_name: "การออกกำลังกายและการเล่นกีฬา",
      std_firstname: this.Person.std_firstname,
      std_lastname: this.Person.std_lastname,
      std_classroom: this.Person.std_classroom,
      std_number: this.Person.std_number,
      std_dorm: this.Person.std_dormitory,
      std_id: this.Person.std_ID,
      date: this.form12detail.date,
      timestart: this.form12detail.timeStarts,
      timeend: this.form12detail.timeEnds,
      make: this.form12detail.make,
      pn_id: this.phoneid
    };
    this.http.post("http://119.46.21.249/www/insert/form12insert.php", JSON.stringify(postParams))
      .subscribe(data => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);});
  }

  Form13Confirm() {
    let confirm = this.alertCtrl.create({
      title: 'บันทึก',
      message: 'คุณต้องการบันทึกใช่หรือไม่ ?',
      buttons: [{ text: 'ยกเลิก'},{ text: 'ตกลง',handler: () => {this.Form13();}}]});
    confirm.present();
  }

  Form13() {
    let postParams =  {
      acttype: "13",
      act_type_name: "การเข้าร่วมกิจกรรมพบพ่อครู/แม่ครู",
      std_firstname: this.Person.std_firstname,
      std_lastname: this.Person.std_lastname,
      std_classroom: this.Person.std_classroom,
      std_number: this.Person.std_number,
      std_dorm: this.Person.std_dormitory,
      std_id: this.Person.std_ID,
      date: this.form13detail.date,
      head: this.form13detail.head,
      pn_id: this.phoneid
    };
    this.http.post("http://119.46.21.249/www/insert/form13insert.php", JSON.stringify(postParams))
      .subscribe(data => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);});
  }

  getacttype() {
    this.loginservice.getacttype()
    .then(data => {
      this.acttype = data;
    });
  }

  getactid() {
    this.activityService.getactid()
    .then(data => {
      this.actid = data;
    });
  }

  ontypeChange(selectedValue: any) {
   this.isValid = true;
   if (selectedValue == "การบำเพ็ญประโยชน์ต่อชุมชนและสังคม") {
     this.select1 = true;
     this.select2 = false;
     this.select3 = false;
     this.select4 = false;
     this.select5 = false;
     this.select6 = false;
     this.select7 = false;
     this.select8 = false;
     this.select9 = false;
     this.select10 = false;
     this.select11 = false;
     this.select12 = false;
     this.select13 = false;
   } else if(selectedValue == "การบำเพ็ญประโยชน์ต่อโรงเรียน") {
     this.select1 = false;
     this.select2 = true;
     this.select3 = false;
     this.select4 = false;
     this.select5 = false;
     this.select6 = false;
     this.select7 = false;
     this.select8 = false;
     this.select9 = false;
     this.select10 = false;
     this.select11 = false;
     this.select12 = false;
     this.select13 = false;
   } else if(selectedValue == "การอ่านหนังสือ") {
     this.select1 = false;
     this.select2 = false;
     this.select3 = true;
     this.select4 = false;
     this.select5 = false;
     this.select6 = false;
     this.select7 = false;
     this.select8 = false;
     this.select9 = false;
     this.select10 = false;
     this.select11 = false;
     this.select12 = false;
     this.select13 = false;
   } else if(selectedValue == "การเข้าค่ายวิชาการ") {
     this.select1 = false;
     this.select2 = false;
     this.select3 = false;
     this.select4 = true;
     this.select5 = false;
     this.select6 = false;
     this.select7 = false;
     this.select8 = false;
     this.select9 = false;
     this.select10 = false;
     this.select11 = false;
     this.select12 = false;
     this.select13 = false;
   } else if(selectedValue == "การเข้าค่ายปฏิบัติธรรม") {
     this.select1 = false;
     this.select2 = false;
     this.select3 = false;
     this.select4 = false;
     this.select5 = true;
     this.select6 = false;
     this.select7 = false;
     this.select8 = false;
     this.select9 = false;
     this.select10 = false;
     this.select11 = false;
     this.select12 = false;
     this.select13 = false;
   } else if(selectedValue == "การศึกษาดูงานด้านคณิตศาสตร์ วิทยาศาสตร์และเทคโนโลยี") {
     this.select1 = false;
     this.select2 = false;
     this.select3 = false;
     this.select4 = false;
     this.select5 = false;
     this.select6 = true;
     this.select7 = false;
     this.select8 = false;
     this.select9 = false;
     this.select10 = false;
     this.select11 = false;
     this.select12 = false;
     this.select13 = false;
   } else if(selectedValue == "การศึกษาดูงานด้านสังคมศึกษา ภาษา ศาสนา ศิลปวัฒนธรรมและโบราณคดี") {
     this.select1 = false;
     this.select2 = false;
     this.select3 = false;
     this.select4 = false;
     this.select5 = false;
     this.select6 = false;
     this.select7 = true;
     this.select8 = false;
     this.select9 = false;
     this.select10 = false;
     this.select11 = false;
     this.select12 = false;
     this.select13 = false;
   } else if(selectedValue == "การฟังบรรยายด้านวิทยาศาสตร์ และเทคโนโลยี") {
     this.select1 = false;
     this.select2 = false;
     this.select3 = false;
     this.select4 = false;
     this.select5 = false;
     this.select6 = false;
     this.select7 = false;
     this.select8 = true;
     this.select9 = false;
     this.select10 = false;
     this.select11 = false;
     this.select12 = false;
     this.select13 = false;
   } else if(selectedValue == "การฟังบรรยายด้านพัฒนาบุคลิกภาพและความฉลาดทางอารมณ์") {
     this.select1 = false;
     this.select2 = false;
     this.select3 = false;
     this.select4 = false;
     this.select5 = false;
     this.select6 = false;
     this.select7 = false;
     this.select8 = false;
     this.select9 = true;
     this.select10 = false;
     this.select11 = false;
     this.select12 = false;
     this.select13 = false;
   } else if(selectedValue == "การฟังบรรยายด้านสังคมศึกษา ภาษา ศาสนา ศิลปวัฒนธรรมและดนตรี") {
     this.select1 = false;
     this.select2 = false;
     this.select3 = false;
     this.select4 = false;
     this.select5 = false;
     this.select6 = false;
     this.select7 = false;
     this.select8 = false;
     this.select9 = false;
     this.select10 = true;
     this.select11 = false;
     this.select12 = false;
     this.select13 = false;
   } else if(selectedValue == "การเข้าร่วมกิจกรรมชุมนุม") {
     this.select1 = false;
     this.select2 = false;
     this.select3 = false;
     this.select4 = false;
     this.select5 = false;
     this.select6 = false;
     this.select7 = false;
     this.select8 = false;
     this.select9 = false;
     this.select10 = false;
     this.select11 = true;
     this.select12 = false;
     this.select13 = false;
   } else if(selectedValue == "การออกกำลังกายและการเล่นกีฬา") {
     this.select1 = false;
     this.select2 = false;
     this.select3 = false;
     this.select4 = false;
     this.select5 = false;
     this.select6 = false;
     this.select7 = false;
     this.select8 = false;
     this.select9 = false;
     this.select10 = false;
     this.select11 = false;
     this.select12 = true;
     this.select13 = false;
   } else if(selectedValue == "การเข้าร่วมกิจกรรมพบพ่อครู/แม่ครู") {
     this.select1 = false;
     this.select2 = false;
     this.select3 = false;
     this.select4 = false;
     this.select5 = false;
     this.select6 = false;
     this.select7 = false;
     this.select8 = false;
     this.select9 = false;
     this.select10 = false;
     this.select11 = false;
     this.select12 = false;
     this.select13 = true;
   } else if(selectedValue == "ไม่ระบุ"){
     this.isValid = false;
     this.select1 = false;
     this.select2 = false;
     this.select3 = false;
     this.select4 = false;
     this.select5 = false;
     this.select6 = false;
     this.select7 = false;
     this.select8 = false;
     this.select9 = false;
     this.select10 = false;
     this.select11 = false;
     this.select12 = false;
     this.select13 = false;
   }
 }

 typeclub(club: any) {
   this.form11detail.place = club;
 }


}
