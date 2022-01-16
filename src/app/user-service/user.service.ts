import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  token: string = "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"

    getUser(gitUser: string):Observable<any>{
      let userUrl = `https://api.github.com/users/${gitUser}`
      return this.http.get<any>(userUrl)
    }

    getUserRepos(gitUser: string):Observable<any>{
      let reposUrl = `https://api.github.com/users/${gitUser}/repos?per_page=9`
      return this.http.get<any>(reposUrl)
    }

  }

