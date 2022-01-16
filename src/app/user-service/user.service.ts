import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../classes/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }


  



    getUser(gitUser: string):Observable<any>{
      let userUrl = `https://api.github.com/users/${gitUser}?client_id=${environment.clientid}?client_secret=${environment.clientSecret}`
      return this.http.get<User>(userUrl)
    }

    getUserRepos(gitUser: string):Observable<any>{
      let reposUrl = `https://api.github.com/users/${gitUser}/repos?per_page=9?client_id=${environment.clientid}?client_secret=${environment.clientSecret}`
      return this.http.get<any>(reposUrl)
    }

  }

