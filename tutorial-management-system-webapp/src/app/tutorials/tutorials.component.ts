import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TutorialsService } from './../tutorials.service';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css']
})
export class TutorialsComponent implements OnInit {

  tutorials : any[];
  selectedTutorial : any;
  searchKey : string;

  constructor(private service : TutorialsService,
    private route : Router) { }

  ngOnInit(): void {
    this.getTutorialsList();
  }

  onSelected(tutorial) {
      this.selectedTutorial = tutorial;
  }

  editTutorial() {
     this.route.navigate(["tutorials/edit/" + this.selectedTutorial.id]);
  }

  getStatus(published) {
    if(published == 1) {
        return "Published";
    } else if(published == 2) {
        return "Un Published";
    } else {
      return "Pending";
    }
  }

  getTutorialsList() {
    this.service.getTutorials().subscribe((resp: any) => {
      this.tutorials = resp;
    });
  }

  searchTutorials(searchKey){
    this.service.searchTutorials(searchKey).subscribe((resp: any) => {
      this.tutorials = resp;
    });
  }

  deleteAll(){
    this.service.deleteAllTutorials().subscribe((resp: any) => {
      this.tutorials = [];
    });

  }

}
