import { ChangeDetectorRef, Component,OnInit } from '@angular/core';
import { CrewService } from '../services/crew.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Crew } from '../types/crew.type';
import { CrewCreateComponent } from '../crew-create/crew-create.component';
import { Router } from '@angular/router';
import { CrewEditComponent } from '../crew-edit/crew-edit.component';




@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.scss']
})
export class CrewListComponent implements OnInit {

  crews: Crew[] = [];
  dialogRefCreate?: MatDialogRef<CrewCreateComponent>;
  dialogRefEdit?: MatDialogRef<CrewEditComponent>;

  displayedColumns: string[] = [ 'menu','id', 'firstName', 'lastName', 'nationality', 'title', 'daysOnBoard', 'dailyRate', 'currency', 'totalIncome',];

  constructor(
    private crewService: CrewService,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog,
    private router: Router,
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

  goCard(crew: Crew) {
    this.router.navigateByUrl('crew/crew-card/' + crew.id);
  }

  openEdit(crew: Crew) {
    this.dialogRefEdit = this.dialog.open(CrewEditComponent, {
      data: { crew: crew },
      width: "500px",
      height: "500px"
    });
    this.dialogRefEdit.afterClosed().subscribe(result => {
      this.load();

    });
  }
}
