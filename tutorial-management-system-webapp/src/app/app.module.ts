import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';
import { FormsModule } from '@angular/forms';
import { UpdateTutorialComponent } from './update-tutorial/update-tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorialsComponent,
    AddTutorialComponent,
    UpdateTutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
