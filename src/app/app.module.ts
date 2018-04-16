import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { CentralAreaComponent } from './central-area/central-area.component';
import { MyTeamsComponent } from './left-sidebar/my-teams/my-teams.component';
import { MyGroupsComponent } from './left-sidebar/my-groups/my-groups.component';
import { MyMemosComponent } from './left-sidebar/my-memos/my-memos.component';
import { TeamComponent } from './left-sidebar/my-teams/team/team.component';
import { TeamService } from './shared/team.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    CentralAreaComponent,
    MyTeamsComponent,
    MyGroupsComponent,
    MyMemosComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatIconModule
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
