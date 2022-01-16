import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() userData: any


  constructor( private http: HttpClient) {

  }
ngOnInit(): void {
    
  
  this.http.get<any>("https://api.github.com/users/trekhub").subscribe(data=>{
    this.userData = data
    
  })

}

  
  
   
}


  






