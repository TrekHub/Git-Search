import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {



  user!: User;
  userData: any;

  constructor(private userService: UserService, private http: HttpClient) {
    
   }

  ngOnInit(): void {



    this.userService.getUser().subscribe(res => {
      this.userData = res
    })
  

    // this.http.get<apiUserResponse>("https://api.github.com/users/bryanbill").subscribe(res => {

    // //Upon succesfull api response
    

    // })




  }

}
