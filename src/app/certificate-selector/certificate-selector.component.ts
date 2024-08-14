import { Component, Input, OnInit } from "@angular/core";
import { CrewService } from "../services/crew.service";



@Component({
    selector: 'app-certificate-selector',
    templateUrl: './certificate-selector.component.html',
    styleUrls: ['./certificate-selector.component.scss']
})
export class CertificateSelectorComponent implements OnInit {
    @Input() isDisabled: boolean = false;
    @Input() Id?: number;

    certificates?: String[] = [
        'Captain Certificate',
        'Crew Certificate',
        'Mechanic Devices',
        'Novaqua',
        'Lighter',
        'Made',
        'Cooking Prof'
    ]
    selectedCertificates?: string[];
    constructor(
        private crewService: CrewService
    ) { }
    ngOnInit(): void {
        
        if (this.Id != null) {
            this.setSelected(this.Id!);
            
        }
      

    }

    setSelected(id: number) {

        this.selectedCertificates = [...this.crewService.getCrewCertificate(id)];

    }



    getSelected(): string[] {
        return this.selectedCertificates!;
    }

}