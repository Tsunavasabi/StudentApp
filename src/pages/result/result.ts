import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import pdfMake from "pdfmake/build/pdfmake"; 
import pdfFonts from "pdfmake/build/vfs_fonts"; 
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
pdfMake.fonts = {
  THSarabunNew: {
    normal: 'THSarabunNew.ttf',
    bold: 'THSarabunNew Bold.ttf',
    italics: 'THSarabunNew Italic.ttf',
    bolditalics: 'THSarabunNew BoldItalic.ttf'
  },
  Roboto: {
    normal: 'Roboto-Regular.ttf',
    bold: 'Roboto-Medium.ttf',
    italics: 'Roboto-Italic.ttf',
    bolditalics: 'Roboto-MediumItalic.ttf'
  }
};

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  @ViewChild('htmlData') htmlData:ElementRef;
  result: any;
  pdffile: any
  fileTransfer: FileTransferObject = this.transfer.create();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public platform: Platform, private transfer: FileTransfer, private file: File) {
    this.result = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

  Preparing() {
    let url = 'http://www.zp11489.tld.122.155.167.85.no-domain.name/www/file/uploadpdf.php'
    let name = this.result.std_ID+'_'+this.result.act_id+'.pdf'

    let options: FileUploadOptions = {
      fileKey: 'pdf',
      fileName: name,
      chunkedMode: false,
      httpMethod: 'post',
      mimeType: 'application/pdf',
      headers: {}
      }

    this.fileTransfer.upload(this.pdffile, url, options)
    .then((data) => {
      console.log(data)
      this.downloadPDF(name)
    }, (error) => {
      console.log(error)
    })
  }

  downloadPDF(name) {

  }

  close() {
    this.navCtrl.pop();
  }

  downloadPDF1() {
    var docDefinition = {
      content: [
        {
          text: 'รายงานบันทึกการบำเพ็ญประโยชน์ต่อชุมชนและสังคม\n',
          style: 'header'
        },
        {
          text: 'รหัสกิจกรรม'+' '+this.result.act_id+' '+'ของ'+' '+this.result.std_firstname+' '+this.result.std_lastname+'\n'
          +'ห้อง'+' '+this.result.std_classroom+' '+'เลขที่'+' '+this.result.std_number+' '+'เลขประจำตัว'+' '+this.result.std_ID,
          style: 'subheader'
        },
        '\n',
        {
          text: [
            'วันที่ : ', {text: this.result.act_date, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'จำนวนชั่วโมง : ', {text: this.result.act_hours+' '+'ชั่วโมง', bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'สถานที่บำเพ็ญประโยชน์ : ', {text: this.result.act_places, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'ลักษณะรูปแบบการบำเพ็ญประโยชน์ต่อชุมชนและสังคม',
          ], style: 'sub_subheader'
        },
        {
          text: this.result.act_details+'\n\n',
          style: 'paragraph'
        },
        {
          text: [
            'ความประทับใจ',
          ], style: 'sub_subheader'
        },
        {
          text: this.result.act_feels+'\n\n',
          style: 'paragraph'
        },
        {
          text: [
            'รับรองโดย : ', {text: this.result.tch_firstname+' '+this.result.tch_lastname, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'สร้างเมื่อ : ', {text: this.result.act_created+'\n', bold: false},
            'แก้ไขล่าสุดเมื่อ : ', {text: this.result.act_updated, bold: false},
          ], style: 'sub_subheader'
        },
      ],
      defaultStyle: {
        font: "THSarabunNew"
      },
      styles: {
        header: {
          fontSize: 30,
          bold: true
        },
        subheader: {
          fontSize: 20,
          bold: true
        },
        sub_subheader: {
          fontSize: 18,
          bold: true
        },
        paragraph: {
          fontSize: 16,
        }
      }
    }
    this.pdffile = pdfMake.createPdf(docDefinition).download(this.result.std_ID+'_'+this.result.act_id+'.pdf')
  }

  downloadPDF2() {
    var docDefinition = {
      content: [
        {
          text: 'รายงานบันทึกการบำเพ็ญประโยชน์ต่อโรงเรียน\n',
          style: 'header'
        },
        {
          text: 'รหัสกิจกรรม'+' '+this.result.act_id+' '+'ของ'+' '+this.result.std_firstname+' '+this.result.std_lastname+'\n'
          +'ห้อง'+' '+this.result.std_classroom+' '+'เลขที่'+' '+this.result.std_number+' '+'เลขประจำตัว'+' '+this.result.std_ID,
          style: 'subheader'
        },
        '\n',
        {
          text: [
            'วันที่ : ', {text: this.result.act_date, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'จำนวนชั่วโมง : ', {text: this.result.act_hours+' '+'ชั่วโมง', bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'สถานที่บำเพ็ญประโยชน์ : ', {text: this.result.act_places, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'ลักษณะรูปแบบการบำเพ็ญประโยชน์ต่อโรงเรียน',
          ], style: 'sub_subheader'
        },
        {
          text: this.result.act_details+'\n\n',
          style: 'paragraph'
        },
        {
          text: [
            'ความประทับใจ',
          ], style: 'sub_subheader'
        },
        {
          text: this.result.act_feels+'\n\n',
          style: 'paragraph'
        },
        {
          text: [
            'รับรองโดย : ', {text: this.result.tch_firstname+' '+this.result.tch_lastname, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'สร้างเมื่อ : ', {text: this.result.act_created+'\n', bold: false},
            'แก้ไขล่าสุดเมื่อ : ', {text: this.result.act_updated, bold: false},
          ], style: 'sub_subheader'
        },
      ],
      defaultStyle: {
        font: "THSarabunNew"
      },
      styles: {
        header: {
          fontSize: 30,
          bold: true
        },
        subheader: {
          fontSize: 20,
          bold: true
        },
        sub_subheader: {
          fontSize: 18,
          bold: true
        },
        paragraph: {
          fontSize: 16,
        }
      }
    }
    this.pdffile = pdfMake.createPdf(docDefinition).download(this.result.std_ID+'_'+this.result.act_id+'.pdf')
  }

  downloadPDF3() {
    var docDefinition = {
      content: [
        {
          text: 'รายงานบันทึกการอ่านหนังสือ\n',
          style: 'header'
        },
        {
          text: 'รหัสกิจกรรม'+' '+this.result.act_id+' '+'ของ'+' '+this.result.std_firstname+' '+this.result.std_lastname+'\n'
          +'ห้อง'+' '+this.result.std_classroom+' '+'เลขที่'+' '+this.result.std_number+' '+'เลขประจำตัว'+' '+this.result.std_ID,
          style: 'subheader'
        },
        '\n',
        {
          text: [
            'ชื่อหนังสือ : ', {text: this.result.act_head, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'ผู้แต่ง/ผู้แปล หรือหน่วยงานที่จัดทำ : ', {text: this.result.act_places, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'พิมพ์ครั้งที่ : ', {text: this.result.act_hours, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'ปีที่พิมพ์ : ', {text: this.result.act_date, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'สำนักพิมพ์ : ', {text: this.result.act_print, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'เรื่องย่อหรือสาระสังเขปของเรื่อง',
          ], style: 'sub_subheader'
        },
        {
          text: this.result.act_details+'\n\n',
          style: 'paragraph'
        },
        {
          text: [
            'ความประทับใจ',
          ], style: 'sub_subheader'
        },
        {
          text: this.result.act_feels+'\n\n',
          style: 'paragraph'
        },
        {
          text: [
            'รับรองโดย : ', {text: this.result.tch_firstname+' '+this.result.tch_lastname, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'สร้างเมื่อ : ', {text: this.result.act_created+'\n', bold: false},
            'แก้ไขล่าสุดเมื่อ : ', {text: this.result.act_updated, bold: false},
          ], style: 'sub_subheader'
        },
      ],
      defaultStyle: {
        font: "THSarabunNew"
      },
      styles: {
        header: {
          fontSize: 30,
          bold: true
        },
        subheader: {
          fontSize: 20,
          bold: true
        },
        sub_subheader: {
          fontSize: 18,
          bold: true
        },
        paragraph: {
          fontSize: 16,
        }
      }
    }
    this.pdffile = pdfMake.createPdf(docDefinition).download(this.result.std_ID+'_'+this.result.act_id+'.pdf')
  }

  downloadPDF4() {
    var docDefinition = {
      content: [
        {
          text: 'รายงานบันทึกการออกกำลังกายและเล่นกีฬา\n',
          style: 'header'
        },
        {
          text: 'รหัสกิจกรรม'+' '+this.result.act_id+' '+'ของ'+' '+this.result.std_firstname+' '+this.result.std_lastname+'\n'
          +'ห้อง'+' '+this.result.std_classroom+' '+'เลขที่'+' '+this.result.std_number+' '+'เลขประจำตัว'+' '+this.result.std_ID,
          style: 'subheader'
        },
        '\n',
        {
          text: [
            'วันที่ : ', {text: this.result.act_date, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'ช่วงเวลา : ', {text: this.result.act_time_starts+''+'-'+''+this.result.act_time_ends, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'เวลา : ', {text: this.result.act_hours+' '+'ชั่วโมง', bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'ลักษณะการออกกำลังกาย',
          ], style: 'sub_subheader'
        },
        {
          text: this.result.act_details+'\n\n',
          style: 'paragraph'
        },
        {
          text: [
            'รับรองโดย : ', {text: this.result.tch_firstname+' '+this.result.tch_lastname, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'สร้างเมื่อ : ', {text: this.result.act_created+'\n', bold: false},
            'แก้ไขล่าสุดเมื่อ : ', {text: this.result.act_updated, bold: false},
          ], style: 'sub_subheader'
        },
      ],
      defaultStyle: {
        font: "THSarabunNew"
      },
      styles: {
        header: {
          fontSize: 30,
          bold: true
        },
        subheader: {
          fontSize: 20,
          bold: true
        },
        sub_subheader: {
          fontSize: 18,
          bold: true
        },
        paragraph: {
          fontSize: 16,
        }
      }
    }
    this.pdffile = pdfMake.createPdf(docDefinition).download(this.result.std_ID+'_'+this.result.act_id+'.pdf')
  }

  downloadPDF5() {
    var docDefinition = {
      content: [
        {
          text: 'รายงานบันทึกการเข้าค่ายวิชาการ\n',
          style: 'header'
        },
        {
          text: 'รหัสกิจกรรม'+' '+this.result.act_id+' '+'ของ'+' '+this.result.std_firstname+' '+this.result.std_lastname+'\n'
          +'ห้อง'+' '+this.result.std_classroom+' '+'เลขที่'+' '+this.result.std_number+' '+'เลขประจำตัว'+' '+this.result.std_ID,
          style: 'subheader'
        },
        '\n',
        {
          text: [
            'ชื่อค่าย : ', {text: this.result.act_head, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'สถานที่ : ', {text: this.result.act_places, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'ความรู้ที่ได้รับโดยสังเขป',
          ], style: 'sub_subheader'
        },
        {
          text: this.result.act_details+'\n\n',
          style: 'paragraph'
        },
        {
          text: [
            'ความประทับใจ',
          ], style: 'sub_subheader'
        },
        {
          text: this.result.act_feels+'\n\n',
          style: 'paragraph'
        },
        {
          text: [
            'รับรองโดย : ', {text: this.result.tch_firstname+' '+this.result.tch_lastname, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'สร้างเมื่อ : ', {text: this.result.act_created+'\n', bold: false},
            'แก้ไขล่าสุดเมื่อ : ', {text: this.result.act_updated, bold: false},
          ], style: 'sub_subheader'
        },
      ],
      defaultStyle: {
        font: "THSarabunNew"
      },
      styles: {
        header: {
          fontSize: 30,
          bold: true
        },
        subheader: {
          fontSize: 20,
          bold: true
        },
        sub_subheader: {
          fontSize: 18,
          bold: true
        },
        paragraph: {
          fontSize: 16,
        }
      }
    }
    this.pdffile = pdfMake.createPdf(docDefinition).download(this.result.std_ID+'_'+this.result.act_id+'.pdf')
  }

  downloadPDF6() {
    var docDefinition = {
      content: [
        {
          text: 'รายงานบันทึกการเข้าค่ายปฏิบัติธรรม\n',
          style: 'header'
        },
        {
          text: 'รหัสกิจกรรม'+' '+this.result.act_id+' '+'ของ'+' '+this.result.std_firstname+' '+this.result.std_lastname+'\n'
          +'ห้อง'+' '+this.result.std_classroom+' '+'เลขที่'+' '+this.result.std_number+' '+'เลขประจำตัว'+' '+this.result.std_ID,
          style: 'subheader'
        },
        '\n',
        {
          text: [
            'ชื่อค่าย : ', {text: this.result.act_head, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'สถานที่ : ', {text: this.result.act_places, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'ความรู้ที่ได้รับโดยสังเขป',
          ], style: 'sub_subheader'
        },
        {
          text: this.result.act_details+'\n\n',
          style: 'paragraph'
        },
        {
          text: [
            'ความประทับใจ',
          ], style: 'sub_subheader'
        },
        {
          text: this.result.act_feels+'\n\n',
          style: 'paragraph'
        },
        {
          text: [
            'รับรองโดย : ', {text: this.result.tch_firstname+' '+this.result.tch_lastname, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'สร้างเมื่อ : ', {text: this.result.act_created+'\n', bold: false},
            'แก้ไขล่าสุดเมื่อ : ', {text: this.result.act_updated, bold: false},
          ], style: 'sub_subheader'
        },
      ],
      defaultStyle: {
        font: "THSarabunNew"
      },
      styles: {
        header: {
          fontSize: 30,
          bold: true
        },
        subheader: {
          fontSize: 20,
          bold: true
        },
        sub_subheader: {
          fontSize: 18,
          bold: true
        },
        paragraph: {
          fontSize: 16,
        }
      }
    }
    this.pdffile = pdfMake.createPdf(docDefinition).download(this.result.std_ID+'_'+this.result.act_id+'.pdf')
  }

  downloadPDF7() {
    var docDefinition = {
      content: [
        {
          text: 'รายงานบันทึกการศึกษาดูงานด้านคณิตศาสตร์ วิทยาศาสตร์และเทคโนโลยี\n',
          style: 'header'
        },
        {
          text: 'รหัสกิจกรรม'+' '+this.result.act_id+' '+'ของ'+' '+this.result.std_firstname+' '+this.result.std_lastname+'\n'
          +'ห้อง'+' '+this.result.std_classroom+' '+'เลขที่'+' '+this.result.std_number+' '+'เลขประจำตัว'+' '+this.result.std_ID,
          style: 'subheader'
        },
        '\n',
        {
          text: [
            'วันทีไปศึกษาดูงาน : ', {text: this.result.act_date, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'สถานที่ไปศึกษาดูงาน : ', {text: this.result.act_places, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'หัวข้อการศึกษาดูงาน : ', {text: this.result.act_head, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'ความรู้ที่ได้รับโดยสังเขป',
          ], style: 'sub_subheader'
        },
        {
          text: this.result.act_details+'\n\n',
          style: 'paragraph'
        },
        {
          text: [
            'ความประทับใจ',
          ], style: 'sub_subheader'
        },
        {
          text: this.result.act_feels+'\n\n',
          style: 'paragraph'
        },
        {
          text: [
            'รับรองโดย : ', {text: this.result.tch_firstname+' '+this.result.tch_lastname, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'สร้างเมื่อ : ', {text: this.result.act_created+'\n', bold: false},
            'แก้ไขล่าสุดเมื่อ : ', {text: this.result.act_updated, bold: false},
          ], style: 'sub_subheader'
        },
      ],
      defaultStyle: {
        font: "THSarabunNew"
      },
      styles: {
        header: {
          fontSize: 30,
          bold: true
        },
        subheader: {
          fontSize: 20,
          bold: true
        },
        sub_subheader: {
          fontSize: 18,
          bold: true
        },
        paragraph: {
          fontSize: 16,
        }
      }
    }
    this.pdffile = pdfMake.createPdf(docDefinition).download(this.result.std_ID+'_'+this.result.act_id+'.pdf')
  }

  downloadPDF8() {
    var docDefinition = {
      content: [
        {
          text: 'รายงานบันทึกการศึกษาดูงานด้านสังคมศึกษา ภาษา ศาสนา\nศิลปวัฒนธรรมและโบราณคดี\n',
          style: 'header'
        },
        {
          text: 'รหัสกิจกรรม'+' '+this.result.act_id+' '+'ของ'+' '+this.result.std_firstname+' '+this.result.std_lastname+'\n'
          +'ห้อง'+' '+this.result.std_classroom+' '+'เลขที่'+' '+this.result.std_number+' '+'เลขประจำตัว'+' '+this.result.std_ID,
          style: 'subheader'
        },
        '\n',
        {
          text: [
            'วันทีไปศึกษาดูงาน : ', {text: this.result.act_date, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'สถานที่ไปศึกษาดูงาน : ', {text: this.result.act_places, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'หัวข้อการศึกษาดูงาน : ', {text: this.result.act_head, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'ความรู้ที่ได้รับโดยสังเขป',
          ], style: 'sub_subheader'
        },
        {
          text: this.result.act_details+'\n\n',
          style: 'paragraph'
        },
        {
          text: [
            'ความประทับใจ',
          ], style: 'sub_subheader'
        },
        {
          text: this.result.act_feels+'\n\n',
          style: 'paragraph'
        },
        {
          text: [
            'รับรองโดย : ', {text: this.result.tch_firstname+' '+this.result.tch_lastname, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'สร้างเมื่อ : ', {text: this.result.act_created+'\n', bold: false},
            'แก้ไขล่าสุดเมื่อ : ', {text: this.result.act_updated, bold: false},
          ], style: 'sub_subheader'
        },
      ],
      defaultStyle: {
        font: "THSarabunNew"
      },
      styles: {
        header: {
          fontSize: 30,
          bold: true
        },
        subheader: {
          fontSize: 20,
          bold: true
        },
        sub_subheader: {
          fontSize: 18,
          bold: true
        },
        paragraph: {
          fontSize: 16,
        }
      }
    }
    this.pdffile = pdfMake.createPdf(docDefinition).download(this.result.std_ID+'_'+this.result.act_id+'.pdf')
  }

  downloadPDF9() {
    var docDefinition = {
      content: [
        {
          text: 'รายงานบันทึกการฟังบรรยายด้านวิทยาศาสตร์และเทคโนโลยี\n',
          style: 'header'
        },
        {
          text: 'รหัสกิจกรรม'+' '+this.result.act_id+' '+'ของ'+' '+this.result.std_firstname+' '+this.result.std_lastname+'\n'
          +'ห้อง'+' '+this.result.std_classroom+' '+'เลขที่'+' '+this.result.std_number+' '+'เลขประจำตัว'+' '+this.result.std_ID,
          style: 'subheader'
        },
        '\n',
        {
          text: [
            'วันที่ฟังบรรยาย : ', {text: this.result.act_date, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'หัวข้อการฟังบรรยาย : ', {text: this.result.act_head, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'ความรู้ที่ได้รับโดยสังเขป',
          ], style: 'sub_subheader'
        },
        {
          text: this.result.act_details+'\n\n',
          style: 'paragraph'
        },
        {
          text: [
            'ความประทับใจ',
          ], style: 'sub_subheader'
        },
        {
          text: this.result.act_feels+'\n\n',
          style: 'paragraph'
        },
        {
          text: [
            'รับรองโดย : ', {text: this.result.tch_firstname+' '+this.result.tch_lastname, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'สร้างเมื่อ : ', {text: this.result.act_created+'\n', bold: false},
            'แก้ไขล่าสุดเมื่อ : ', {text: this.result.act_updated, bold: false},
          ], style: 'sub_subheader'
        },
      ],
      defaultStyle: {
        font: "THSarabunNew"
      },
      styles: {
        header: {
          fontSize: 30,
          bold: true
        },
        subheader: {
          fontSize: 20,
          bold: true
        },
        sub_subheader: {
          fontSize: 18,
          bold: true
        },
        paragraph: {
          fontSize: 16,
        }
      }
    }
    this.pdffile = pdfMake.createPdf(docDefinition).download(this.result.std_ID+'_'+this.result.act_id+'.pdf')
  }

  downloadPDF10() {
    var docDefinition = {
      content: [
        {
          text: 'รายงานบันทึกการฟังบรรยายด้านพัฒนาบุคลิกภาพและความฉลาดทางอารมณ์\n',
          style: 'header'
        },
        {
          text: 'รหัสกิจกรรม'+' '+this.result.act_id+' '+'ของ'+' '+this.result.std_firstname+' '+this.result.std_lastname+'\n'
          +'ห้อง'+' '+this.result.std_classroom+' '+'เลขที่'+' '+this.result.std_number+' '+'เลขประจำตัว'+' '+this.result.std_ID,
          style: 'subheader'
        },
        '\n',
        {
          text: [
            'วันที่ฟังบรรยาย : ', {text: this.result.act_date, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'หัวข้อการฟังบรรยาย : ', {text: this.result.act_head, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'ความรู้ที่ได้รับโดยสังเขป',
          ], style: 'sub_subheader'
        },
        {
          text: this.result.act_details+'\n\n',
          style: 'paragraph'
        },
        {
          text: [
            'ความประทับใจ',
          ], style: 'sub_subheader'
        },
        {
          text: this.result.act_feels+'\n\n',
          style: 'paragraph'
        },
        {
          text: [
            'รับรองโดย : ', {text: this.result.tch_firstname+' '+this.result.tch_lastname, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'สร้างเมื่อ : ', {text: this.result.act_created+'\n', bold: false},
            'แก้ไขล่าสุดเมื่อ : ', {text: this.result.act_updated, bold: false},
          ], style: 'sub_subheader'
        },
      ],
      defaultStyle: {
        font: "THSarabunNew"
      },
      styles: {
        header: {
          fontSize: 30,
          bold: true
        },
        subheader: {
          fontSize: 20,
          bold: true
        },
        sub_subheader: {
          fontSize: 18,
          bold: true
        },
        paragraph: {
          fontSize: 16,
        }
      }
    }
    this.pdffile = pdfMake.createPdf(docDefinition).download(this.result.std_ID+'_'+this.result.act_id+'.pdf')
  }

  downloadPDF11() {
    var docDefinition = {
      content: [
        {
          text: 'รายงานบันทึกการฟังบรรยายด้านสังคมศึกษา ภาษา ศาสนา\nศิลปวัฒนธรรมและโบราณคดี\n',
          style: 'header'
        },
        {
          text: 'รหัสกิจกรรม'+' '+this.result.act_id+' '+'ของ'+' '+this.result.std_firstname+' '+this.result.std_lastname+'\n'
          +'ห้อง'+' '+this.result.std_classroom+' '+'เลขที่'+' '+this.result.std_number+' '+'เลขประจำตัว'+' '+this.result.std_ID,
          style: 'subheader'
        },
        '\n',
        {
          text: [
            'วันที่ฟังบรรยาย : ', {text: this.result.act_date, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'หัวข้อการฟังบรรยาย : ', {text: this.result.act_head, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'ความรู้ที่ได้รับโดยสังเขป',
          ], style: 'sub_subheader'
        },
        {
          text: this.result.act_details+'\n\n',
          style: 'paragraph'
        },
        {
          text: [
            'ความประทับใจ',
          ], style: 'sub_subheader'
        },
        {
          text: this.result.act_feels+'\n\n',
          style: 'paragraph'
        },
        {
          text: [
            'รับรองโดย : ', {text: this.result.tch_firstname+' '+this.result.tch_lastname, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'สร้างเมื่อ : ', {text: this.result.act_created+'\n', bold: false},
            'แก้ไขล่าสุดเมื่อ : ', {text: this.result.act_updated, bold: false},
          ], style: 'sub_subheader'
        },
      ],
      defaultStyle: {
        font: "THSarabunNew"
      },
      styles: {
        header: {
          fontSize: 30,
          bold: true
        },
        subheader: {
          fontSize: 20,
          bold: true
        },
        sub_subheader: {
          fontSize: 18,
          bold: true
        },
        paragraph: {
          fontSize: 16,
        }
      }
    }
    this.pdffile = pdfMake.createPdf(docDefinition).download(this.result.std_ID+'_'+this.result.act_id+'.pdf')
  }

  downloadPDF12() {
    var docDefinition = {
      content: [
        {
          text: 'รายงานบันทึกการเข้าร่วมกิจกรรมชุมนุม\n',
          style: 'header'
        },
        {
          text: 'รหัสกิจกรรม'+' '+this.result.act_id+' '+'ของ'+' '+this.result.std_firstname+' '+this.result.std_lastname+'\n'
          +'ห้อง'+' '+this.result.std_classroom+' '+'เลขที่'+' '+this.result.std_number+' '+'เลขประจำตัว'+' '+this.result.std_ID,
          style: 'subheader'
        },
        '\n',
        {
          text: [
            'ปีการศึกษา : ', {text: this.result.act_date, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'ภาคเรียนที่ : ', {text: this.result.act_hours, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'ประเภทของชุมนุม : ', {text: this.result.act_places, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'ชื่อชุมนุม : ', {text: this.result.act_head, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'ความรู้ที่ได้รับโดยสังเขป',
          ], style: 'sub_subheader'
        },
        {
          text: this.result.act_details+'\n\n',
          style: 'paragraph'
        },
        {
          text: [
            'ความประทับใจ',
          ], style: 'sub_subheader'
        },
        {
          text: this.result.act_feels+'\n\n',
          style: 'paragraph'
        },
        {
          text: [
            'รับรองโดย : ', {text: this.result.tch_firstname+' '+this.result.tch_lastname, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'สร้างเมื่อ : ', {text: this.result.act_created+'\n', bold: false},
            'แก้ไขล่าสุดเมื่อ : ', {text: this.result.act_updated, bold: false},
          ], style: 'sub_subheader'
        },
      ],
      defaultStyle: {
        font: "THSarabunNew"
      },
      styles: {
        header: {
          fontSize: 30,
          bold: true
        },
        subheader: {
          fontSize: 20,
          bold: true
        },
        sub_subheader: {
          fontSize: 18,
          bold: true
        },
        paragraph: {
          fontSize: 16,
        }
      }
    }
    this.pdffile = pdfMake.createPdf(docDefinition).download(this.result.std_ID+'_'+this.result.act_id+'.pdf')
  }

  downloadPDF13() {
    var docDefinition = {
      content: [
        {
          text: 'รายงานบันทึกการเข้าร่วมกิจกรรมพบพ่อครู/แม่ครู\n',
          style: 'header'
        },
        {
          text: 'รหัสกิจกรรม'+' '+this.result.act_id+' '+'ของ'+' '+this.result.std_firstname+' '+this.result.std_lastname+'\n'
          +'ห้อง'+' '+this.result.std_classroom+' '+'เลขที่'+' '+this.result.std_number+' '+'เลขประจำตัว'+' '+this.result.std_ID,
          style: 'subheader'
        },
        '\n',
        {
          text: [
            'วันที่ : ', {text: this.result.act_date, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'หัวข้ออบรม/กิจกรรม : ', {text: this.result.act_head, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'รับรองโดย : ', {text: this.result.tch_firstname+' '+this.result.tch_lastname, bold: false},
          ], style: 'sub_subheader'
        },
        {
          text: [
            'สร้างเมื่อ : ', {text: this.result.act_created+'\n', bold: false},
            'แก้ไขล่าสุดเมื่อ : ', {text: this.result.act_updated, bold: false},
          ], style: 'sub_subheader'
        },
      ],
      defaultStyle: {
        font: "THSarabunNew"
      },
      styles: {
        header: {
          fontSize: 30,
          bold: true
        },
        subheader: {
          fontSize: 20,
          bold: true
        },
        sub_subheader: {
          fontSize: 18,
          bold: true
        },
        paragraph: {
          fontSize: 16,
        }
      }
    }
    this.pdffile = pdfMake.createPdf(docDefinition).download(this.result.std_ID+'_'+this.result.act_id+'.pdf')
  }
}
