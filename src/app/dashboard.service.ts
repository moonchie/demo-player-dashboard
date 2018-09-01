import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.prod';

// const { backendUrl } = environment;

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  constructor(private http: HttpClient) {}

  getJsonData() {
    return this.http.get("http://cdn.55labs.com/demo/api.json").toPromise();
  }
}
