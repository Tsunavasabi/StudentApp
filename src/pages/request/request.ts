import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Platform } from 'ionic-angular';
import { SelectserviceProvider } from '../../providers/selectservice/selectservice';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-request',
  templateUrl: 'request.html',
})
export class RequestPage {
  detail: any;
  name: any;
  act: any;
  clas: any;
  dr: any;
  select: any;
  search: any;
  point = new Array();
  fileTransfer: FileTransferObject = this.transfer.create();
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public selectService: SelectserviceProvider, public alertCtrl: AlertController,
    public loadingCtrl: LoadingController, private http: Http,
    private transfer: FileTransfer, private file: File, public platform: Platform) {
    this.detail = this.navParams.get('person')
    this.name = this.detail.name
    this.clas = this.detail.class
    console.log(this.clas)
    this.presentLoading()
  }

  ionViewDidLoad() {
    this.Geteachdata()
  }

  radioClicked(id) {
    this.select = id;
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "กำลังจัดเตรียมข้อมูล...",
      duration: 5000
    });
    loader.present();
  }

  searchpoint() {
    if (this.select == undefined) {
      this.showAlert()
    } else {
      this.navCtrl.push('StatisticPage', {select: this.select})
    }
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'แจ้งเตือน',
      subTitle: 'ท่านยังไม่ได้เลือกนักเรียน',
      buttons: ['ตกลง']
    });
    alert.present();
  }

  async Geteachdata() {
    for (let element of this.detail.name) {
      let name = element.std_firstname+" "+element.std_lastname+" "+"("+element.std_number+")"
      let point_temp = { ชื่อและนามสกุล: name,
        บำเพ็ญประโยชน์ต่อสังคม: null, บำเพ็ญประโยชน์ต่อโรงเรียน: null, อ่านหนังสือ: null, 
        ออกกำลังกาย: null, การเข้าค่ายวิชาการ: null, การเข้าค่ายปฏิบัติธรรม: null,
        การศึกษาดูงานด้านคณิตศาสตร์_วิทยาศาสตร์และเทคโนโลยี: null, การศึกษาดูงานด้านสังคมศึกษา_ภาษา_ศาสนา_ศิลปวัฒนธรรมและโบราณคดี: null, 
        การฟังบรรยายด้านวิทยาศาสตร์และเทคโนโลยี: null, การฟังบรรยายด้านพัฒนาบุคลิกภาพและความฉลาดทางอารมณ์: null, 
        การฟังบรรยายด้านสังคมศึกษา_ภาษา_ศาสนา_ศิลปวัฒนธรรมและดนตรี: null, 
        การเข้าร่วมกิจกรรมชุมนุม: null, การเข้าร่วมกิจกรรมพบพ่อครูแม่ครู: null
      }
      console.log(element.std_firstname)
        this.selectService.selectPoint1(element.std_ID)
        .then(out => {
          point_temp.บำเพ็ญประโยชน์ต่อสังคม = out+'/15'
          this.selectService.selectPoint2(element.std_ID)
          .then(out => {
            point_temp.บำเพ็ญประโยชน์ต่อโรงเรียน = out+'/10'
            this.selectService.selectPoint3(element.std_ID)
            .then(out => {
              point_temp.อ่านหนังสือ = out+'/5'
              this.selectService.selectPoint12(element.std_ID)
              .then(out => {
                point_temp.ออกกำลังกาย = out+'/40'
                this.selectService.selectPoint4(element.std_ID)
                .then(out => {
                  point_temp.การเข้าค่ายวิชาการ = out
                  this.selectService.selectPoint5(element.std_ID)
                  .then(out => {
                    point_temp.การเข้าค่ายปฏิบัติธรรม = out
                    this.selectService.selectPoint6(element.std_ID)
                    .then(out => {
                      point_temp.การศึกษาดูงานด้านคณิตศาสตร์_วิทยาศาสตร์และเทคโนโลยี = out
                      this.selectService.selectPoint7(element.std_ID)
                      .then(out => {
                        point_temp.การศึกษาดูงานด้านสังคมศึกษา_ภาษา_ศาสนา_ศิลปวัฒนธรรมและโบราณคดี = out
                        this.selectService.selectPoint8(element.std_ID)
                        .then(out => {
                          point_temp.การฟังบรรยายด้านวิทยาศาสตร์และเทคโนโลยี = out
                          this.selectService.selectPoint9(element.std_ID)
                          .then(out => {
                            point_temp.การฟังบรรยายด้านพัฒนาบุคลิกภาพและความฉลาดทางอารมณ์ = out
                            this.selectService.selectPoint10(element.std_ID)
                            .then(out => {
                              point_temp.การฟังบรรยายด้านสังคมศึกษา_ภาษา_ศาสนา_ศิลปวัฒนธรรมและดนตรี = out
                              this.selectService.selectPoint11(element.std_ID)
                              .then(out => {
                                point_temp.การเข้าร่วมกิจกรรมชุมนุม = out+'/1'
                                this.selectService.selectPoint13(element.std_ID)
                                .then(out => {
                                  point_temp.การเข้าร่วมกิจกรรมพบพ่อครูแม่ครู = out+'/90'
                                  this.point.push(point_temp)
                                  console.log(this.point)
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
    }
  }

  loadCSV() {
    let data, link;
    let csv = this.convertArrayOfObjectsToCSV({
        data: this.point
    });
    if (csv == null) return;

    let filename = this.clas[0]+'-'+this.clas[2]+'_report.csv';

    if (!csv.match(/^data:text\/csv/i)) {
        csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    data = encodeURI(csv);
    console.log(csv)

    link = document.createElement('a');
    link.setAttribute('href', data);

    let url = 'http://www.zp11489.tld.122.155.167.85.no-domain.name/www/file/uploadcsv.php'

    let options: FileUploadOptions = {
      fileKey: 'csv',
      fileName: filename,
      chunkedMode: false,
      httpMethod: 'post',
      mimeType: 'text/csv',
      headers: {}
      }

    this.fileTransfer.upload(csv, url, options)
    .then((data) => {
      console.log(data)
      this.downLoadCSV(filename)
    }, (error) => {
      console.log(error)
    })
  }

  Alertdownload() {
    const alert = this.alertCtrl.create({
      title: 'ดาวน์โหลดเสร็จสิ้น',
      subTitle: 'สามารถตรวจสอบไฟล์ได้ที่โฟลเดอร์ Download',
      buttons: ['ตกลง']
    });
    alert.present();
  }

  downLoadCSV(filename) {
    let file = {name: filename}
    const url = 'http://www.zp11489.tld.122.155.167.85.no-domain.name/www/file/'+filename;
    let path = null
    if (this.platform.is('android')) {
      path = this.file.externalRootDirectory+'Download/'
    } else {
      path = this.file.documentsDirectory
    }
    
    this.fileTransfer.download(url, path + filename, true)
    .then((entry) => {
      console.log('download complete: ' + entry.toURL());
      this.http.post('http://www.zp11489.tld.122.155.167.85.no-domain.name/www/file/delfile.php', JSON.stringify(file))
      .subscribe(data => {
        console.log(data)
        this.Alertdownload()
      })
      }, (error) => {
      console.log(error)
    });
    
  }

  convertArrayOfObjectsToCSV(args) {  
    let result, ctr, keys, columnDelimiter, lineDelimiter, data;

    data = args.data || null;
    if (data == null || !data.length) {
      return null;
    }

    columnDelimiter = args.columnDelimiter || ',';
    lineDelimiter = args.lineDelimiter || '\n';

    keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(function(item) {
      ctr = 0;
      keys.forEach(function(key) {
          if (ctr > 0) result += columnDelimiter;

          result += item[key];
          ctr++;
      });
      result += lineDelimiter;
    });

    return result;
  }

}
