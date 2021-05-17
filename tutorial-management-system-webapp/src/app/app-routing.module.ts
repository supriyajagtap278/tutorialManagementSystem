import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { UpdateTutorialComponent } from './update-tutorial/update-tutorial.component';


const routes: Routes = [
  { path : "tutorials", component : TutorialsComponent },
  { path : "tutorials/edit/:id", component : UpdateTutorialComponent },
  { path : "tutorials/add", component : AddTutorialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
