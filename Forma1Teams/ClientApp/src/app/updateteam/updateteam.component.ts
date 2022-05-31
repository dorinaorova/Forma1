import { HttpErrorResponse } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from '../models/team';
import TeamService from '../services/team.service';

@Component({
  selector: 'app-updateteam',
  templateUrl: './updateteam.component.html',
  styleUrls: ['./updateteam.component.css']
})
export class UpdateteamComponent implements OnInit {
  id: number;
  team: Team | undefined;

  constructor(private service: TeamService, private router: Router, private avRoute: ActivatedRoute) {
    const idParam= 'id';
    if (this.avRoute.snapshot.params[idParam]) {
      this.id = this.avRoute.snapshot.params[idParam];
    }
    else{ this.id=0;}
   }

  ngOnInit(): void {
    this.getTeam(this.id);
  }

  onSubmit(data: Team){
    var name: string ="";
    var fundation : number =0;
    var win: number=0;
    var paid: boolean = false;
    if(this.team != undefined){
      if(data.name=='') name=this.team.name;
      else name = data.name;

      if(data.fundation.toString()=='') fundation = this.team.fundation;
      else fundation=data.fundation;
      
      if(data.win.toString()=='') win = this.team.win;
      else win=data.win;

      if(data.paid.toString() == '') paid = this.team.paid;
      else paid = data.paid;
    }
    const team: Team ={
      id: Number(this.id),
      name: name,
      fundation: fundation,
      win: win,
      paid: paid
    }
    
    this.service.update(team, this.id).subscribe(
      (result)=> {
        console.warn("result", result);
        this.router.navigate(['/teams'])
      }
    )

  }

  getTeam(id: number){
    this.service.getTeam(id).subscribe(
      (response : Team)=>{
        this.team = response;
        console.warn(response);
        
      },
      (error : HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  delete(){
    this.service.delete(this.id).subscribe(
      (result) =>{
        console.warn("result", result);
        this.router.navigate(['/teams'])
      }
    );
  }

}
