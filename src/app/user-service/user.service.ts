import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../classes/user';
import { Repo } from '../classes/repo';


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
      let reposUrl = `https://api.github.com/users/${gitUser}/repos?client_id=${environment.clientid}?client_secret=${environment.clientSecret}&sort=stars&order=desc&page=1&per_page=9`
      return this.http.get<Repo>(reposUrl)
    }

  }

