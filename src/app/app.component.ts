import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Git-Search';


  userData: any
  repos: any

 
  
  

  updateUserData(userData: any){
    this.userData = userData
    // console.log(this.userData);


  }


  updateRepos(repos: any){
    this.repos = repos

  }


}
