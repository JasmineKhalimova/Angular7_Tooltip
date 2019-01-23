
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NgbdTooltipTriggers } from './tooltip-triggers';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes =[
  {path:'', component:NgbdTooltipTriggers}
];

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, NgbModule, RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent, NgbdTooltipTriggers],
  bootstrap: [AppComponent]
})
export class AppModule {}
