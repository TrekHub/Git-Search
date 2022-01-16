import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';
import { environment } from 'src/environments/environment';
import { User } from '../classes/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  userData!: User;

 


  constructor( private http: HttpClient) {

  }
ngOnInit(): void {
    /** spinner starts on init */
  
  
  this.http.get<User>(`https://api.github.com/users/trekhub?client_id=${environment.clientid}?client_secret=${environment.clientSecret}`).subscribe(res=>{
    this.userData = new User(res.login, res.avatar_url, res.created_at, res.html_url, res.followers, res.following, res.public_repos, res.public_gists)
    
  })

}

  
  
   
}


  






