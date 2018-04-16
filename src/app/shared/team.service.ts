import { Team } from "./team.model";

export class TeamService{

    private teams: Team[] = [
        new Team('Transformers','The Team that transforms','https://upload.wikimedia.org/wikipedia/commons/1/19/Wikipedia_logo_red.png'),
        new Team('Visionary','The Team that does nothing','https://upload.wikimedia.org/wikipedia/commons/1/19/Wikipedia_logo_red.png')
    ]

    getTeams(){
        return this.teams.slice();
    }
}