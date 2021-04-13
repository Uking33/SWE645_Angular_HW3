import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ResultViewComponent } from './result-view/result-view.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ACKComponent } from './ack/ack.component';
import { WinnerComponent } from './winner/winner.component';
import { ReadonlyFormComponent } from './readonly-form/readonly-form.component';
import { DataExchangeService } from './data-exchange.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { ChangeNameComponent } from './change-name/change-name.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ResultViewComponent,
    StudentListComponent,
    ACKComponent,
    WinnerComponent,
    ReadonlyFormComponent,
    ChangeNameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    FormsModule
  ],
  providers: [DataExchangeService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
