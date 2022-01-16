import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  @Input()  repos: any

  constructor(private http: HttpClient) { 

  }

  ngOnInit(): void {

    this.http.get<any>("https://api.github.com/users/trekhub/repos?per_page=9").subscribe(data=>{
      this.repos = data
      
    })
    
    
  }

}
