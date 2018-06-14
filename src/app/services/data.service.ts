import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';

// import { Http, Headers, Response } from '@angular/http';
// import 'rxjs/Rx';
// import { Observable } from 'rxjs/Observable';

// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:Http) {
    console.log("Data Service connected!.......")
  }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
    // .subscribe(res => res.json);


    // return this.http.get('https://jsonplaceholder.typicode.com/posts').
    // subscribe(data => {
    //   console.log("Respose ====> "+data);
    // });

    // .map(res => res.json());
    //.map(res => res.json());
  }


}
