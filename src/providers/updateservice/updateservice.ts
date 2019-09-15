import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UpdateserviceProvider {
  url = "http://www.zp11489.tld.122.155.167.85.no-domain.name/www/update/"
  constructor(public http: HttpClient) {
    console.log('Hello UpdateserviceProvider Provider');
  }

  selectupdateoutreach(act_id) {
    let out = {acttype: '01',
               act_id: act_id}
    return new Promise(resolve => {
    this.http.post(this.url+'outreach.php', JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  updateschool(act_id) {
    let out = {acttype: '02',
               act_id: act_id}
    return new Promise(resolve => {
    this.http.post(this.url+'school.php', JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  updatebook(act_id) {
    let out = {acttype: '03',
               act_id: act_id}
    return new Promise(resolve => {
    this.http.post(this.url+'book.php', JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  updateacademic(act_id) {
    let out = {acttype: '04',
               act_id: act_id}
    return new Promise(resolve => {
    this.http.post(this.url+'academic.php', JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  updatebuddha(act_id) {
    let out = {acttype: '05',
               act_id: act_id}
    return new Promise(resolve => {
    this.http.post(this.url+'buddha.php', JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  updatescivisit(act_id) {
    let out = {acttype: '06',
               act_id: act_id}
    return new Promise(resolve => {
    this.http.post(this.url+'scivisit.php', JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  updatesocialvisit(act_id) {
    let out = {acttype: '07',
               act_id: act_id}
    return new Promise(resolve => {
    this.http.post(this.url+'socialvisit.php', JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  updatescilecture(act_id) {
    let out = {acttype: '08',
               act_id: act_id}
    return new Promise(resolve => {
    this.http.post(this.url+'scilecture.php', JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  updatepersonlecture(act_id) {
    let out = {acttype: '09',
               act_id: act_id}
    return new Promise(resolve => {
    this.http.post(this.url+'personlecture.php', JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  updatesocaillecture(act_id) {
    let out = {acttype: '10',
               act_id: act_id}
    return new Promise(resolve => {
    this.http.post(this.url+'sociallecture.php', JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  updateclub(act_id) {
    let out = {acttype: '11',
               act_id: act_id}
    return new Promise(resolve => {
    this.http.post(this.url+'club.php', JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  updateexercise(act_id) {
    let out = {acttype: '12',
               act_id: act_id}
    return new Promise(resolve => {
    this.http.post(this.url+'exercise.php', JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  updatemeetteacher(act_id) {
    let out = {acttype: '13',
               act_id: act_id}
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
