import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  status!: boolean;

  constructor() { }

  alertMessage( message: string){
    alert(message)
  }
}
