import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UpdateserviceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UpdateserviceProvider Provider');
  }

  selectupdateoutreach(act_id) {
    let out = {acttype: '01',
               act_id: act_id}
    return new Promise(resolve => {
    this.http.post('http://192.168.1.40/www/update/outreach.php', JSON.stringify(out))
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
    this.http.post('http://192.168.1.40/www/update/school.php', JSON.stringify(out))
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
    this.http.post('http://192.168.1.40/www/update/book.php', JSON.stringify(out))
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
    this.http.post('http://192.168.1.40/www/update/academic.php', JSON.stringify(out))
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
    this.http.post('http://192.168.1.40/www/update/buddha.php', JSON.stringify(out))
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
    this.http.post('http://192.168.1.40/www/update/scivisit.php', JSON.stringify(out))
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
    this.http.post('http://192.168.1.40/www/update/socialvisit.php', JSON.stringify(out))
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
    this.http.post('http://192.168.1.40/www/update/scilecture.php', JSON.stringify(out))
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
    this.http.post('http://192.168.1.40/www/update/personlecture.php', JSON.stringify(out))
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
    this.http.post('http://192.168.1.40/www/update/sociallecture.php', JSON.stringify(out))
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
    this.http.post('http://192.168.1.40/www/update/club.php', JSON.stringify(out))
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
    this.http.post('http://192.168.1.40/www/update/exercise.php', JSON.stringify(out))
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
    this.http.post('http://192.168.1.40/www/update/meetteacher.php', JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

}
