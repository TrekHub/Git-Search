import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  token: string = "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"

  clientSecret: string = "0c89665b93d5fefa14caa72d49a0ae874bd8e9fa"

  clientid: string = "467a2bbab7ef3c73d69d"

    getUser(gitUser: string):Observable<any>{
      let userUrl = `https://api.github.com/users/${gitUser}?client_id=${this.clientid}?client_secret=${this.clientSecret}`
      return this.http.get<any>(userUrl)
    }

    getUserRepos(gitUser: string):Observable<any>{
      let reposUrl = `https://api.github.com/users/${gitUser}/repos?client_id=${this.clientid}?client_secret=${this.clientSecret}?per_page=9`
      return this.http.get<any>(reposUrl)
    }

  }

