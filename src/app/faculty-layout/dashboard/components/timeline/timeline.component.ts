import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  activities: any;

  constructor(public firebaseService:FirebaseService ) {}

  ngOnInit() {

    this.firebaseService.getLearnings()
    .subscribe(acts => {
      this.activities=acts;
    });





  }

}
