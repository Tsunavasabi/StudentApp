import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CheckProvider {
  private link: string = "http://www.zp11489.tld.122.155.167.85.no-domain.name/www/check.php";
  private unlink: string = "http://www.zp11489.tld.122.155.167.85.no-domain.name/www/uncheck.php";
  constructor(public http: HttpClient) {
    console.log('Hello CheckProvider Provider');
  }

  Check(data) {
    let send = {act_id: data.act_id,
                act_adivice_date: data.act_adivice_date,
               act_advices: data.act_advices,
               flag: '3'}
    return new Promise(resolve => {
    this.http.post(this.link, JSON.stringify(send))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  Uncheck(data) {
    let send = {act_id: data.act_id,
               flag: '4'}
    return new Promise(resolve => {
    this.http.post(this.unlink, JSON.stringify(send))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

}
