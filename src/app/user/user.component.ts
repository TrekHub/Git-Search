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




  constructor(userService: UserService) {
    this.user = userService.getUser()
   }

  ngOnInit(): void {
  }

}
