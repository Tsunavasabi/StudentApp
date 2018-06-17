import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DeleteserviceProvider {
  private url: string = "http://119.46.21.249/www/delete/delete.php";
  constructor(public http: Http) {
    console.log('Hello DeleteserviceProvider Provider');
  }

  deleteoutreach(act_id) {
    let out = {acttype: '01',
               act_id: act_id}
    console.log(out);
    return new Promise(resolve => {
    this.http.post(this.url, JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  deleteschool(act_id) {
    let out = {acttype: '02',
               act_id: act_id}
    console.log(out);
    return new Promise(resolve => {
    this.http.post(this.url, JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  deletebook(act_id) {
    let out = {acttype: '03',
               act_id: act_id}
    console.log(out);
    return new Promise(resolve => {
    this.http.post(this.url, JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  deleteacademic(act_id) {
    let out = {acttype: '04',
               act_id: act_id}
    console.log(out);
    return new Promise(resolve => {
    this.http.post(this.url, JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  deletebuddha(act_id) {
    let out = {acttype: '05',
               act_id: act_id}
    console.log(out);
    return new Promise(resolve => {
    this.http.post(this.url, JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  deletescivisit(act_id) {
    let out = {acttype: '06',
               act_id: act_id}
    console.log(out);
    return new Promise(resolve => {
    this.http.post(this.url, JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  deletesocialvisit(act_id) {
    let out = {acttype: '07',
               act_id: act_id}
    console.log(out);
    return new Promise(resolve => {
    this.http.post(this.url, JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  deletescilecture(act_id) {
    let out = {acttype: '08',
               act_id: act_id}
    console.log(out);
    return new Promise(resolve => {
    this.http.post(this.url, JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  deletepersonlecture(act_id) {
    let out = {acttype: '09',
               act_id: act_id}
    console.log(out);
    return new Promise(resolve => {
    this.http.post(this.url, JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  deletesocaillecture(act_id) {
    let out = {acttype: '10',
               act_id: act_id}
    console.log(out);
    return new Promise(resolve => {
    this.http.post(this.url, JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  deleteclub(act_id) {
    let out = {acttype: '11',
               act_id: act_id}
    console.log(out);
    return new Promise(resolve => {
    this.http.post(this.url, JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  deleteexercise(act_id) {
    let out = {acttype: '12',
               act_id: act_id}
    console.log(out);
    return new Promise(resolve => {
    this.http.post(this.url, JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  deletemeetteacher(act_id) {
    let out = {acttype: '13',
               act_id: act_id}
    console.log(out);
    return new Promise(resolve => {
    this.http.post(this.url, JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

}
