import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';

import { CrewService } from '../services/crew.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TitleSelectorComponent } from '../title-selector/title-selector.component';
import { CertificateSelectorComponent } from '../certificate-selector/certificate-selector.component';
import { CurrencySelectorComponent } from '../currency-selector/currency-selector.component';
import { Crew } from '../types/crew.type';

@Component({
  selector: 'app-crew-edit',

  templateUrl: './crew-edit.component.html',
  styleUrl: './crew-edit.component.scss'
})
export class CrewEditComponent implements OnInit {
  crewForm?: FormGroup;
  crew?: Crew;
  crewId?: any;
  title?: string;
  currency?: string;
  certificates?: string[];

  @ViewChild('titleSelector', { static: false }) titleSelector?: TitleSelectorComponent;
  @ViewChild('certificateSelector', { static: false }) certificateSelector?: CertificateSelectorComponent;
@ViewChild('currencySelector', {static:false}) currencySelector?: CurrencySelectorComponent;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private crewService: CrewService,
    private dialogRef: MatDialogRef<CrewEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }
  ngOnInit(): void {

    this.crew = this.data['crew'];
    this.crewId = this.crew!.id;
    this.title = this.crew!.title,
    this.currency = this.crew?.currency,
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
    this.crewForm.patchValue(this.crew!);
  }




  save() {

    if (this.crewForm!.valid) {
      const updatedCrew: Crew =
      {
        id: this.crew!.id,
        firstName: this.crewForm!.value['firstName'],
        lastName: this.crewForm!.value['lastName'],
        nationality: this.crewForm!.value['nationality'],
        title: this.titleSelector!.getSelected()!,
        daysOnBoard: this.crewForm!.value['daysOnBoard'],
        dailyRate: this.crewForm!.value['dailyRate'],
        currency:this.currencySelector?.getSelected(),
        certificates:this.certificateSelector?.getSelected(),
      };

      this.crewService.editCrew(this.crew!.id!, updatedCrew);
      this.dialogRef!.close();

    }
    else {
      alert("Save Failed");
    }
  }

  close() {
    this.dialogRef.close();
  }

}
