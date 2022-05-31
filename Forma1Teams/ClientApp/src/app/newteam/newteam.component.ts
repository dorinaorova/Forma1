import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import TeamService from '../services/team.service';

@Component({
  selector: 'app-newteam',
  templateUrl: './newteam.component.html',
  styleUrls: ['./newteam.component.css']
})
export class NewteamComponent implements OnInit {

  constructor(private service: TeamService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(data: any){
    this.service.add(data).subscribe(
        (result)=>{
          console.warn("result", result);
          this.router.navigate(['/teams']);
        }
    );
  }

}
