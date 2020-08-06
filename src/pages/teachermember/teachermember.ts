import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, App, AlertController, ActionSheetController } from 'ionic-angular';
import { SearchProvider } from '../../providers/search/search';
import { RequestProvider } from '../../providers/request/request';
import { Storage } from '@ionic/storage';
import { LoginProvider } from '../../providers/login/login';
import { Http } from '@angular/http';
import { Camera, CameraOptions } from '@ionic-native/camera';

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
  clas: string = "";
  names: any;
  idsend: any = "";
  fileToUpload: any
  Image: string;
  ImgSrc = 'http://www.zp11489.tld.122.155.167.85.no-domain.name/www/profile/'
  tch_img: string
  tch_get
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public app: App,
    public searchService: SearchProvider,
    public requestService: RequestProvider,
    private storage: Storage,
    public loginservice: LoginProvider,
    public http: Http,
    public alertCtrl: AlertController,
    public camera: Camera,
    public actionSheetCtrl: ActionSheetController,) {
      this.Detail = this.navParams.get('detailper');
      let requestdata = {tch_firstname: this.Detail.tch_firstname, tch_lastname: this.Detail.tch_lastname}
      this.requestService.request(requestdata)
      .then(data => {
        this.request = data;
        this.badge = data['length'];
      });
      this.getacttype();

  }

  ionViewWillEnter() {
    console.log(this.Detail)
    this.ImgSrc = this.ImgSrc+this.Detail.tch_username+'.jpg?'+Math.random()
    let requestdata = {tch_firstname: this.Detail.tch_firstname, tch_lastname: this.Detail.tch_lastname}
      this.requestService.request(requestdata)
      .then(data => {
        this.request = data;
        this.badge = data['length'];
      });
  }

  ChangeImage() {
    const actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Change profile image',
          role: 'destructive',
          icon: 'image',
          handler: () => {
            this.AlertNext()
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  AlertNext() {
    const confirm = this.alertCtrl.create({
      title: 'ข้อชี้แนะ',
      message: 'คุณสามารถเลือกรูปได้เพียงหนึ่งครั้งและรูปนั้นควรเป็นรูปที่มีขนาดเป็นสี่เหลี่ยมจัตุรัสจะดีที่สุด',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'ต่อไป',
          handler: () => {
            this.openGallery()
          }
        }
      ]
    });
    confirm.present();
  }

  openGallery() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.Image = 'data:image/jpeg;base64,' + imageData;
     console.log(imageData)
     this.navCtrl.push('CropPage', {image: this.Image, id: this.Detail.tch_username, flag: this.Detail.flag})
    }, (err) => {
     // Handle error 
    });
  }

  refresh() {
    this.requestService.request(this.Detail.tch_idcard)
    .then(data => {
      this.request = data;
      this.badge = data['length'];
    });
  }

  getacttype() {
    this.loginservice.getacttype()
    .then(data => {
      this.acttype = data;
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
    this.navCtrl.setRoot('HomePage');
    let nav = this.app.getRootNav();
    nav.setRoot('HomePage');
  }

  check(data) {
    this.navCtrl.push('CheckPage', {data: data, tch_data: this.Detail})
  }

  onactivityChange(act: any){
    this.activity = act;
  }

  selectname() {
    let out = {activity: this.activity,
               clas: this.clas}
    return new Promise(resolve => {
    this.http.post("http://www.zp11489.tld.122.155.167.85.no-domain.name/www/selectname.php", JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
        console.log(data)
        this.names = JSON.parse(data['_body']);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  selectstd() {
    let out = {clas: this.clas}
    return new Promise(resolve => {
    this.http.post("http://www.zp11489.tld.122.155.167.85.no-domain.name/www/selectname.php", JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
        this.names = JSON.parse(data['_body']);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  onclassChange(classes: any) {
    this.clas = classes
  }

  showAlertper() {
    let alert = this.alertCtrl.create({
      title: 'แจ้งเตือน',
      subTitle: 'คุณต้องเลือกให้ครบทั้งประเภทกิจกรรมและห้องเรียน',
      buttons: ['ตกลง']
    });
    alert.present();
  }

  showAlertperson() {
    let alert = this.alertCtrl.create({
      title: 'แจ้งเตือน',
      subTitle: 'คุณต้องเลือกห้องเรียน',
      buttons: ['ตกลง']
    });
    alert.present();
  }

  callactperson() {
    if(this.activity != "" && this.clas != "") {
      this.selectname()
      .then(data => {
        let per = {act_type: this.activity,
                   class: this.clas,
                   name: this.names}
      this.navCtrl.push('PersonPage', {person: per});
      });
    } else {
      this.showAlertper()
    }
  }

  callperson() {
    if(this.clas != "") {
      this.selectname()
      .then(data => {
        let per = {class: this.clas,
                   name: this.names}
      console.log(per.name)
      this.navCtrl.push('RequestPage', {person: per});
      });
    } else {
      this.showAlertperson()
    }
  }

}
