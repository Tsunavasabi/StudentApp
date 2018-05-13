import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RequestProvider {
  private link: string = "http://192.168.1.40/www/request.php";
  constructor(public http: HttpClient) {
    console.log('Hello RequestProvider Provider');
  }

  request(tch_idcard) {
    console.log(tch_idcard);
    let send = {flag: "1",
               tch_idcard: tch_idcard}
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
