import { Injectable } from "@angular/core";
import { Crew } from "../types/crew.type";

@Injectable({
    providedIn: 'root',
  })
export class CrewService {

    private crews: Crew[] = [

        { id: 1, firstName: 'Oğuzhan', lastName: 'Akça', nationality: 'Turkey', title: 'Captain', daysOnBoard: 30, dailyRate: 300, currency: 'USD', totalIncome: 9000, certificates: [ 'Captain Certificate',
            'Crew Certificate',
          'Mechanic Devices',
          'Novaqua',
          'Lighter',
          'Made',] },
        { id: 2, firstName: 'Mustafa', lastName: 'Bakır', nationality: 'Saudi Arabia', title: 'Cooker', daysOnBoard: 30, dailyRate: 100, currency: 'EUR',  totalIncome: 3000, certificates: ['Cooking Prof'] },
        { id: 3, firstName: 'Tahsin', lastName: 'Gülcek', nationality: 'Yunanistan', title: 'Mechanicer', daysOnBoard: 30, dailyRate: 120, currency: 'USD', totalIncome: 3600, certificates: ['Made'] },
        { id: 4, firstName: 'İrem', lastName: 'Meri', nationality: 'Germany', title: 'Cooker', daysOnBoard: 30, dailyRate: 100, currency: 'EUR', totalIncome: 3000, certificates: ['Lighter'] },
        { id: 5, firstName: 'Abdul', lastName: 'Emin', nationality: 'England', title: 'Cleaner', daysOnBoard: 300, dailyRate: 28, currency: 'USD', totalIncome: 8400, certificates: ['Novaqua'] },
    
      ];

      getCrews(): Crew[] {
        return this.crews;
      }
}