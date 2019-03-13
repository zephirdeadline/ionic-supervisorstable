import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private http: HttpClient) { }
  ping(url_object) {
    return this.http.get(url_object.url).subscribe(() => {
        url_object.status = 'ok'; }, error => { console.log(error); url_object.status = 'ko'; });
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
