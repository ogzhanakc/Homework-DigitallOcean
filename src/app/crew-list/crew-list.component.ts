import { ChangeDetectorRef, Component,OnInit } from '@angular/core';
import { CrewService } from '../services/crew.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Crew } from '../types/crew.type';
import { CrewCreateComponent } from '../crew-create/crew-create.component';
import { Router } from '@angular/router';
import { CrewEditComponent } from '../crew-edit/crew-edit.component';
import { TranslateService } from '@ngx-translate/core';




@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.scss']
})
export class CrewListComponent implements OnInit {

  crews: Crew[] = [];
  dialogRefCreate?: MatDialogRef<CrewCreateComponent>;
  dialogRefEdit?: MatDialogRef<CrewEditComponent>;
  totalUsd?: number;
  totalEur?: number;

  displayedColumns: string[] = [ 'menu','id', 'firstName', 'lastName', 'nationality', 'title', 'daysOnBoard', 'dailyRate', 'currency', 'discount','totalIncome',];

  constructor(
    private crewService: CrewService,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog,
    private router: Router,
    private translateService: TranslateService,
  ) {

  }
  ngOnInit(): void {
    this.load();
    this.loadTotalIncomes();
    this.cdr.detectChanges();

  }



  load() {
    this.crews = [...this.crewService.getCrews()];

  }
  loadTotalIncomes() {
    this.totalUsd = this.crewService.getTotalIncomeSum('USD');
    this.totalEur = this.crewService.getTotalIncomeSum('EUR');
  }
  openCrewCreate(): void {
    this.dialogRefCreate = this.dialog.open(CrewCreateComponent, {
      width: "550px",
      height: "600px"
    });
    this.dialogRefCreate.afterClosed().subscribe(result => {
      this.load();
      this.loadTotalIncomes();
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
      this.loadTotalIncomes();

    });
  }
  delete(crew: Crew) {
    this.translateService.get('CONFIRM_DELETE').subscribe((text: string) => {
      if (confirm(text)) {
        const result = this.crewService.deleteCrew(crew.id!);

        if (result) {
          this.load();
          this.loadTotalIncomes();

          this.translateService.get('DELETE_SUCCESS').subscribe((successText: string) => {
            alert(successText);
          });
        } else {
          this.translateService.get('DELETE_FAILURE').subscribe((failureText: string) => {
            alert(failureText);
          });
        }
      }
    });
  }

  discountTotalIncome(discount: string, id: number) {
    console.log(id);
    this.crewService.editTotalIncome(Number(discount), id);
  }
}
