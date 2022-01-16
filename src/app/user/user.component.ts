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

  clientSecret: string = "0c89665b93d5fefa14caa72d49a0ae874bd8e9fa"

  clientid: string = "467a2bbab7ef3c73d69d"


  constructor( private http: HttpClient) {

  }
ngOnInit(): void {
    
  
  this.http.get<any>(`https://api.github.com/users/trekhub?client_id=${this.clientid}?client_secret=${this.clientSecret}`).subscribe(data=>{
    this.userData = data
    
  })

}

  
  
   
}


  






