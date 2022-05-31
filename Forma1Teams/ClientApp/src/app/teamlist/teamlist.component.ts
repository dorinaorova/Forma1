import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '../models/team';
import TeamService from '../services/team.service';
import TemserviceService from '../services/team.service';

@Component({
  selector: 'app-teamlist',
  templateUrl: './teamlist.component.html',
  styleUrls: ['./teamlist.component.css']
})
export class TeamlistComponent implements OnInit {

  teams: Team[] | undefined;
  
  constructor(private service: TeamService, private router: Router) { }

  ngOnInit(): void {
    this.getTeams()
  }

  public getTeams(){
    this.service.getTeams().subscribe(
      (response: Team[]) => {
        this.teams = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  public update(id: number){
    this.router.navigate(['/update/', id]);
  }


}
