import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TutorialsService } from '../tutorials.service';

@Component({
  selector: 'app-update-tutorial',
  templateUrl: './update-tutorial.component.html',
  styleUrls: ['./update-tutorial.component.css']
})
export class UpdateTutorialComponent implements OnInit {

  tutorial : any = {};
  updatedSuccesfully : boolean;

  constructor(private service : TutorialsService,
    private activatedRoute : ActivatedRoute,
    private route : Router) { }

  ngOnInit(): void {
    const id: string = this.activatedRoute.snapshot.params.id;
    this.getTutorial(id);
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

  updateStatus(published) {
    this.tutorial.published = published;
  }

  getTutorial(id) {
    this.service.getTutorial(id).subscribe((resp: any) => {
      this.tutorial = resp;
    });
  }

  deleteTutorial() {
    this.service.deleteTutorial(this.tutorial.id).subscribe((resp: any) => {
      this.route.navigate(["tutorials"]);
    });
  }

  updateTutorial() {
    this.service.updateTutorial(this.tutorial).subscribe((resp: any) => {
      this.tutorial = resp;
      this.updatedSuccesfully = true;
    });
  }

}
