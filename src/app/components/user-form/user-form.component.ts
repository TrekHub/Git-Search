import { HttpClient } from '@angular/common/http';
import { Component,  EventEmitter,  OnInit, Output } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/user-service/user.service';



@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Output()
  gitUser!: string;

  @Output() userFetched: EventEmitter<string> = new EventEmitter();

  user!: User;
  userData: any;
  

  constructor(private userService: UserService, private http: HttpClient) {

  }


  searchGitUsers(){
    this.userService.getUser(this.gitUser).subscribe(res => {
      this.userData = res
      this.userFetched.emit(this.userData)
    })
    
    
  }





  ngOnInit(): void {}



}
