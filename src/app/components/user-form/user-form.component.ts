import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/user-service/user.service';
import { AlertService } from 'src/app/services/alert-service.service';




@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  alertService!: AlertService;
 
  

  @Output()
  gitUser!: string;


 
  



  @Output() userFetched: EventEmitter<User> = new EventEmitter();
  @Output() reposFetched: EventEmitter<any> = new EventEmitter();



  userData!: User;
  repos!: any;
  errStat: boolean = true
  

  @Output()  errorEvent = new EventEmitter<boolean>()


  constructor(private userService: UserService, private http: HttpClient, alertservice: AlertService,) {
    this.alertService = alertservice
    

  }


  searchGitUsers() {


    let promise: any = new Promise<void>((resolve, reject) => {

      this.userService.getUser(this.gitUser).toPromise().then(res => {
        this.userData = new User(res.login, res.avatar_url, res.created_at, res.html_url, res.followers, res.following, res.public_repos, res.public_gists)
        this.userFetched.emit(this.userData)
        resolve()
      },
      
       error => {
        
        this.errorEvent.emit(this.errStat)
       
        reject(error)
      })
      

      this.userService.getUserRepos(this.gitUser).toPromise().then(res => {
        this.repos = res
        this.reposFetched.emit(this.repos)
        resolve()
      })



    })
    return promise






  }





  ngOnInit(): void { }



}
