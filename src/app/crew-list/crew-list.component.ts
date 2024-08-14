import { ChangeDetectorRef, Component,OnInit } from '@angular/core';
import { CrewService } from '../services/crew.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Crew } from '../types/crew.type';




@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.scss']
})
export class CrewListComponent implements OnInit {

  crews: Crew[] = [];

  displayedColumns: string[] = [ 'id', 'firstName', 'lastName', 'nationality', 'title', 'daysOnBoard', 'dailyRate', 'currency', 'totalIncome',];

  constructor(
    private crewService: CrewService,
    private cdr: ChangeDetectorRef,

  ) {

  }
  ngOnInit(): void {
    this.load();
    this.cdr.detectChanges();

  }



  load() {
    this.crews = [...this.crewService.getCrews()];

  }


}
