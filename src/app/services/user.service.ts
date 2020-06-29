import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'https://reqres.in/api';
  constructor( private http: HttpClient ) { }


  getUSers( page:number = 1) {
    return this.http.get(`${this.url}/users?page=${page}`).pipe( map( res => res['data'] ));
  }
}
