import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
    getUser():Observable<any>{
      let userUrl = `https://api.github.com/users/TrekHub`
      return this.http.get<any>(userUrl)
    }

  }

