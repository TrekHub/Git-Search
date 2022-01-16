import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Repo } from '../classes/repo';

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

    this.http.get<Repo>(`https://api.github.com/users/trekhub/repos?per_page=9?client_id=${environment.clientid}?client_secret=${environment.clientSecret}`).subscribe(data=>{
      this.repos = data
      
    })
    
    
  }

}
