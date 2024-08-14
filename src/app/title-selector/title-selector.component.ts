import { Component,  Input, OnInit,  } from "@angular/core";



@Component({
    selector: 'app-title-selector',
    templateUrl: './title-selector.component.html',
    styleUrl: './title-selector.component.scss'
})
export class TitleSelectorComponent implements OnInit {

    @Input() sendTitle?: string;


    ngOnInit(): void {
        if (this.sendTitle != null) {
            this.setSelected(this.sendTitle);
        }
    }


    title?: string;
    titles: string[] = [
        "Captain",
        "Engineer",
        "Cooker",
        "Mechanicer",
        "Cleaner",
    ];
    Selected(event: any){
        this.title = event.value;
    }
    setSelected(value: string) {
        this.title = value;
    }
    getSelected() {
        return this.title;
    }


}