import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class TeacherProvider {

  constructor(public http: HttpClient) {

    console.log('Hello TeacherProvider Provider');

  }

}
