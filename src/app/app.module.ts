import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent, CacheInterceptor } from './app.component';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { MainserviceService } from './mainservice.service';
import { StatsComponent } from './stats/stats.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { MatchsettingsComponent } from './matchsettings/matchsettings.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    ScoreboardComponent,
    MatchsettingsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NguiAutoCompleteModule,
    CommonModule,
  ],
  providers: [
    MainserviceService,
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
