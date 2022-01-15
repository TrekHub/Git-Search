import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  user: User =
    new User(
      "TrekHub",
      "Changing the world through the power of code",
      "avatar",
      16,
      12,
      50,
      39

    )



  constructor() { }

  ngOnInit(): void {
  }

}
