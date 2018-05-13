import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SendserviceProvider {
  private url: string = "http://192.168.1.40/www/teacher.php";
  private link: string = "http://192.168.1.40/www/send.php";
  constructor(public http: HttpClient) {
    console.log('Hello SendserviceProvider Provider');
  }

  getalltch() {
  return new Promise(resolve => {
    this.http.get(this.url)
    .subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
    });
  }

  senddata(act_id, tch) {
    let send = {act_id: act_id.act_id,
                flag: act_id.flag,
                tch_id: tch.tch_idcard,
                tch_firstname: tch.tch_firstname,
                tch_lastname: tch.tch_lastname}
    return new Promise(resolve => {
    this.http.post(this.link, JSON.stringify(send))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

}
