import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.prod';

// const { backendUrl } = environment;

@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  // contentAll: any;
  // dates: Array<string>;
  // johnPoints: Array<number>;
  // larryPoints: Array<number>;

  constructor(private http: HttpClient) {}

  getJsonData() {
    return this.http.get("http://cdn.55labs.com/demo/api.json").toPromise()
    // .then(data => {
    //   this.contentAll = data;
    //   this.dates = this.contentAll['data']['DAILY']['dates'];
    //   this.johnPoints = this.contentAll['data']['DAILY']['dataByMember']['john']['points'];
    //   this.larryPoints = this.contentAll['data']['DAILY']['dataByMember']['larry']['points'];
    // }, err => {
    //   console.log('err', err);
    // });
  }



}
