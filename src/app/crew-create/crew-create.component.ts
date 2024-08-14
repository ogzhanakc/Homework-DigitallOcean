import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrewService } from '../services/crew.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Crew } from '../types/crew.type';
import { TitleSelectorComponent } from '../title-selector/title-selector.component';
import { CurrencySelectorComponent } from '../currency-selector/currency-selector.component';


@Component({
  selector: 'app-crew-create',
  templateUrl: './crew-create.component.html',
  styleUrls: ['./crew-create.component.scss'] 
})
export class CrewCreateComponent implements OnInit {
  crewForm?: FormGroup;
  newCrew?: Crew;
  title?: string;
  certificates?: string[];
  constructor(
    private formBuilder: FormBuilder,
     private crewService: CrewService, 
     private dialogRef: MatDialogRef<CrewCreateComponent>,
     private router: Router,
    ) {
    
    
  }
  @ViewChild('titleSelector', {static:false}) titleSelector?: TitleSelectorComponent;
  @ViewChild('currencySelector', {static:false}) currencySelector?: CurrencySelectorComponent;


  ngOnInit(): void {
    this.prepareForm();
  }

  prepareForm() {
    this.crewForm = this.formBuilder.group({
      firstName: ["",],
      lastName: ["",],
      nationality: ["",],
      title: ["",],
      daysOnBoard: ["", [, Validators.pattern('^[0-9]+$')]],
      dailyRate: ["", [, Validators.pattern('^[0-9]+$')]], 
    });

  }




  save() {

    if (this.crewForm!.valid) {
      this.newCrew =
      {
        firstName: this.crewForm!.value['firstName'],
        lastName: this.crewForm!.value['lastName'],
        nationality: this.crewForm!.value['nationality'],
        title: "",
        daysOnBoard: this.crewForm!.value['daysOnBoard'],
        dailyRate: this.crewForm!.value['dailyRate'],
        currency: "",
        certificates: this.certificates
      };
      this.crewService.addCrew(this.newCrew);
      this.dialogRef.close();

    }
    else {
        alert("Create Failed");
    }
  }

  close(){
    this.dialogRef.close();
  }

}
