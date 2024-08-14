import { Component, OnInit, ViewChild } from '@angular/core';
import { CrewService } from '../services/crew.service';
import { ActivatedRoute, Route } from '@angular/router';

import { CertificateSelectorComponent } from '../certificate-selector/certificate-selector.component';
import { Location } from '@angular/common';
import { Crew } from '../types/crew.type';

@Component({
  selector: 'app-crew-card',
  templateUrl: './crew-card.component.html',
  styleUrl: './crew-card.component.scss'
})
export class CrewCardComponent implements OnInit {
  crewId?: any;
  crew?: Crew;
  constructor(
    private crewService: CrewService, 
    private activatedRoute: ActivatedRoute,
    private location: Location,
  ) { }

  @ViewChild('certificateSelector', {static:false}) certificateSelector?: CertificateSelectorComponent;

  ngOnInit(): void {
      this.crewId = this.activatedRoute.snapshot.paramMap.get('id');
      const id: number = this.crewId;
      this.crew = this.crewService.getCrew(id);
      this.certificateSelector?.setSelected(id);
  }

  turnBack(){
      this.location.back();
  }

}
