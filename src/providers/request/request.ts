import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RequestProvider {
  private link: string = "http://www.zp11489.tld.122.155.167.85.no-domain.name/www/request.php";
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
