import { ChangeDetectorRef, Component,OnInit } from '@angular/core';
import { CrewService } from '../services/crew.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Crew } from '../types/crew.type';
import { CrewCreateComponent } from '../crew-create/crew-create.component';




@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.scss']
})
export class CrewListComponent implements OnInit {

  crews: Crew[] = [];
  dialogRefCreate?: MatDialogRef<CrewCreateComponent>;

  displayedColumns: string[] = [ 'id', 'firstName', 'lastName', 'nationality', 'title', 'daysOnBoard', 'dailyRate', 'currency', 'totalIncome',];

  constructor(
    private crewService: CrewService,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog,

  ) {

  }
  ngOnInit(): void {
    this.load();
    this.cdr.detectChanges();

  }



  load() {
    this.crews = [...this.crewService.getCrews()];

  }

  openCrewCreate(): void {
    this.dialogRefCreate = this.dialog.open(CrewCreateComponent, {
      width: "550px",
      height: "600px"
    });
    this.dialogRefCreate.afterClosed().subscribe(result => {
      this.load();

    });
  }
}
