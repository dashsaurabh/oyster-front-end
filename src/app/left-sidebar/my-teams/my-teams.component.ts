import { Component, OnInit } from '@angular/core';
import { Team } from '../../shared/team.model';
import { TeamService } from '../../shared/team.service';

@Component({
  selector: 'app-my-teams',
  templateUrl: './my-teams.component.html',
  styleUrls: ['./my-teams.component.css']
})
export class MyTeamsComponent implements OnInit {
  
  panelOpenState: boolean = false;
  teams: Team[];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teams = this.teamService.getTeams();
  }

}
