import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TutorialsService } from '../tutorials.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {

  title : string;
  description : string;
  submitted: boolean;
  constructor(private service : TutorialsService) { }

  ngOnInit(): void {
  }

  addTutorial(){
        this.service.addTutorial({title : this.title, 
                              description : this.description, 
                            published : 0}).subscribe((resp:any)=>{
          this.submitted=true;
    });
  }

  addAnother(){
    this.submitted=false;
    this.title= "";
    this.description = "";
  }

}
