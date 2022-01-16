import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 userData: any
 errStat!: boolean






  @Output() userFetched: EventEmitter<User> = new EventEmitter();
  @Output() reposFetched: EventEmitter<any> = new EventEmitter();
  
  


  emitEventUser(userData: User) {
    this.userFetched.emit(userData)
    

  }

  emitEventRepos(repos: any){
    this.reposFetched.emit(repos)
    
    
  }

  emitEventErr(errStat: boolean){
    this.errStat = errStat
  }




  constructor() { }

  ngOnInit(): void {
    console.log();
    

  }

}
