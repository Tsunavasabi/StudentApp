import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RequestProvider {
  private link: string = "http://www.zp11489.tld.122.155.167.85.no-domain.name/www/request.php";
  constructor(public http: HttpClient) {
    console.log('Hello RequestProvider Provider');
  }

  request(tch_name) {
    console.log(tch_name);
    let send = {flag: "1",
               tch_firstname: tch_name.tch_firstname,
               tch_lastname: tch_name.tch_lastname}
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
