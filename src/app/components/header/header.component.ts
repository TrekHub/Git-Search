import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 userData: any


  @Output() userFetched: EventEmitter<string> = new EventEmitter();
  @Output() reposFetched: EventEmitter<any> = new EventEmitter();


  emitEventUser(userData: any) {
    this.userFetched.emit(userData)
    console.log(userData);   

  }

  emitEventRepos(repos: any){
    this.reposFetched.emit(repos)
    console.log(repos)
    
  }


  constructor() { }

  ngOnInit(): void {
  }

}
