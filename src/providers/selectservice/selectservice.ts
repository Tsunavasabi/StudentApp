import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SelectserviceProvider {
  private url = "http://192.168.1.40/www/select/";
  human: any;
  constructor(public http: HttpClient) {

  }

  humandetail(data) {
    this.human = data;
  }

  selectallPoint(id) {
    let out = {std_id: id}
    return new Promise(resolve => {
    this.http.post("http://192.168.1.40/www/selectpoint/all.php", JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  selectPoint1(id) {
    let out = {std_id: id,
               act_type: '01'}
    return new Promise(resolve => {
    this.http.post("http://192.168.1.40/www/selectpoint/p1.php", JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  selectPoint2(id) {
    let out = {std_id: id,
               act_type: '02'}
    return new Promise(resolve => {
    this.http.post("http://192.168.1.40/www/selectpoint/p1.php", JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  selectPoint3(id) {
    let out = {std_id: id,
               act_type: '03'}
    return new Promise(resolve => {
    this.http.post("http://192.168.1.40/www/selectpoint/p1.php", JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  selectPoint4(id) {
    let out = {std_id: id,
               act_type: '04'}
    return new Promise(resolve => {
    this.http.post("http://192.168.1.40/www/selectpoint/p1.php", JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  selectPoint5(id) {
    let out = {std_id: id,
               act_type: '05'}
    return new Promise(resolve => {
    this.http.post("http://192.168.1.40/www/selectpoint/p1.php", JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  selectPoint6(id) {
    let out = {std_id: id,
               act_type: '06'}
    return new Promise(resolve => {
    this.http.post("http://192.168.1.40/www/selectpoint/p1.php", JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  selectPoint7(id) {
    let out = {std_id: id,
               act_type: '07'}
    return new Promise(resolve => {
    this.http.post("http://192.168.1.40/www/selectpoint/p1.php", JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  selectPoint8(id) {
    let out = {std_id: id,
               act_type: '08'}
    return new Promise(resolve => {
    this.http.post("http://192.168.1.40/www/selectpoint/p1.php", JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  selectPoint9(id) {
    let out = {std_id: id,
               act_type: '09'}
    return new Promise(resolve => {
    this.http.post("http://192.168.1.40/www/selectpoint/p1.php", JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  selectPoint10(id) {
    let out = {std_id: id,
               act_type: '10'}
    return new Promise(resolve => {
    this.http.post("http://192.168.1.40/www/selectpoint/p1.php", JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  selectPoint11(id) {
    let out = {std_id: id,
               act_type: '11'}
    return new Promise(resolve => {
    this.http.post("http://192.168.1.40/www/selectpoint/p1.php", JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  selectPoint12(id) {
    let out = {std_id: id,
               act_type: '12'}
    return new Promise(resolve => {
    this.http.post("http://192.168.1.40/www/selectpoint/p1.php", JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  selectPoint13(id) {
    let out = {std_id: id,
               act_type: '13'}
    return new Promise(resolve => {
    this.http.post("http://192.168.1.40/www/selectpoint/p1.php", JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  Selectoutreach() {
    let out = {acttype: '01',
               stdid: this.human.std_ID}
    return new Promise(resolve => {
    this.http.post(this.url+'outreach.php', JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  Selectschool() {
    let out = {acttype: '02',
               stdid: this.human.std_ID}
    return new Promise(resolve => {
    this.http.post(this.url+'school.php', JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  Selectbook() {
    let out = {acttype: '03',
               stdid: this.human.std_ID}
    return new Promise(resolve => {
    this.http.post(this.url+'book.php', JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  Selectacademic() {
    let out = {acttype: '04',
               stdid: this.human.std_ID}
    return new Promise(resolve => {
    this.http.post(this.url+'academic.php', JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  Selectbuddha() {
    let out = {acttype: '05',
               stdid: this.human.std_ID}
    return new Promise(resolve => {
    this.http.post(this.url+'buddha.php', JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  Selectscivisit() {
    let out = {acttype: '06',
               stdid: this.human.std_ID}
    return new Promise(resolve => {
    this.http.post(this.url+'scivisit.php', JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  Selectsocialvisit() {
    let out = {acttype: '07',
               stdid: this.human.std_ID}
    return new Promise(resolve => {
    this.http.post(this.url+'socialvisit.php', JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  Selectscilecture() {
    let out = {acttype: '08',
               stdid: this.human.std_ID}
    return new Promise(resolve => {
    this.http.post(this.url+'scilecture.php', JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  Selectpersonlecture() {
    let out = {acttype: '09',
               stdid: this.human.std_ID}
    return new Promise(resolve => {
    this.http.post(this.url+'personlecture.php', JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  Selectsociallecture() {
    let out = {acttype: '10',
               stdid: this.human.std_ID}
    return new Promise(resolve => {
    this.http.post(this.url+'sociallecture.php', JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  Selectclub() {
    let out = {acttype: '11',
               stdid: this.human.std_ID}
    return new Promise(resolve => {
    this.http.post(this.url+'club.php', JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  Selectexercise() {
    let out = {acttype: '12',
               stdid: this.human.std_ID}
    return new Promise(resolve => {
    this.http.post(this.url+'exercise.php', JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  Selectmeetteacher() {
    let out = {acttype: '13',
               stdid: this.human.std_ID}
    return new Promise(resolve => {
    this.http.post(this.url+'meetteacher.php', JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }



}
