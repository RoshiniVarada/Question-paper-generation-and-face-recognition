import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../../shared/services/firebase.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-section-user',
  templateUrl: './new-section.component.html',
  styleUrls: ['./new-section.component.scss']
})
export class NewSectionComponent implements OnInit {

  values: any;
modules=true;
assignments=false;
showcomp=false;
  valuesnew: any;
  modulesSub: any;
  constructor(
    public firebaseService: FirebaseService,
    public _Activatedroute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.values = this._Activatedroute.params.subscribe(params => {
      this.valuesnew =JSON.parse(params.subject);
      this.firebaseService.getModules(this.valuesnew.name)
      .subscribe(result => {
        this.modulesSub = result;
        this.showcomp=true;
      })
   
     

      });
  }

  public showfn(value){
    if(value=="modules"){
      this.modules=true;
      this.assignments=false;
     
    }else if(value=="assignments"){
      this.assignments=true;
      this.modules=false;
    }else{
      this.modules=true;
      this.modules=false;
    }
    this.firebaseService.getModules(this.valuesnew.name)
    .subscribe(result => {
      this.modulesSub = result;
    })
  }






}
