import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../models/team';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export default class TeamService {

  private apiServerUrl=environment.apiBaseUrl;
  
  constructor(private http: HttpClient) { }

  public getTeams(): Observable<Team[]>{
    return this.http.get<Team[]>(`${this.apiServerUrl}/api/teams/list`);
  }

  public getTeam(id: number) : Observable<Team>{
    return this.http.get<Team>(`${this.apiServerUrl}/api/teams/find/${id}`);
  }

  public add(data: Team){
    return this.http.post(`${this.apiServerUrl}/api/teams/add`, data);
  }

  public update(data: Team, id: number){
    return this.http.put(`${this.apiServerUrl}/api/teams/update/${id}`, data);
  }

  public delete(id: number){
    return this.http.delete(`${this.apiServerUrl}/api/teams/delete/${id}`);
  }
}
