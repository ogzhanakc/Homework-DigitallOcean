import { Component, EventEmitter, Input, OnInit, Output, } from "@angular/core";
import { HeaderComponent } from "../header/header.component";


@Component({
    selector: 'app-currency-selector',
    templateUrl: './currency-selector.component.html',
    styleUrl: './currency-selector.component.scss'
})
export class CurrencySelectorComponent implements OnInit {

    @Input() sendCurrency?: string;


    ngOnInit(): void {
        if (this.sendCurrency != null) {
            this.setSelected(this.sendCurrency);
        }
    }


    currency?: string;
    currencies: string[] = [
        'USD',
        'EUR'
    ];

    setSelected(value: string) {
        this.currency = value;
    }
    getSelected() {
        return this.currency;
    }


}