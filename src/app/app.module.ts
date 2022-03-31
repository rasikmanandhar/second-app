import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { CssCrashCourseComponent } from './css-crash-course/css-crash-course.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessfulAlertComponent } from './successful-alert/successful-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    CssCrashCourseComponent,
    WarningAlertComponent,
    SuccessfulAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
