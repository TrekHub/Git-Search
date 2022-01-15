import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  @Output() userFetched: EventEmitter<string> = new EventEmitter();

  emitEventUser(userData: any) {
    this.userFetched.emit(userData)

  }


  constructor() { }

  ngOnInit(): void {
  }

}
