import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CheckProvider {
  private link: string = "http://119.46.21.249/www/check.php";
  private unlink: string = "http://119.46.21.249/www/uncheck.php";
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
