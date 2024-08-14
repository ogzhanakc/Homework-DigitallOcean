import { Injectable } from "@angular/core";
import { Crew } from "../types/crew.type";

@Injectable({
    providedIn: 'root',
})
export class CrewService {

    private crews: Crew[] = [

        {
            id: 1, firstName: 'Alex', lastName: 'Smith', nationality: 'Turkey', title: 'Captain', daysOnBoard: 30, dailyRate: 300, currency: 'USD', totalIncome: 9000, certificates: ['Captain Certificate',
                'Crew Certificate',
                'Mechanic Devices',
                'Novaqua',
                'Lighter',
                'Made',]
        },
        { id: 2, firstName: 'Brynn', lastName: 'Manning', nationality: 'Saudi Arabia', title: 'Cooker', daysOnBoard: 30, dailyRate: 100, currency: 'EUR', totalIncome: 3000, certificates: ['Cooking Prof'] },
        { id: 3, firstName: 'Martina', lastName: 'Richmond', nationality: 'Australia', title: 'Mechanicer', daysOnBoard: 30, dailyRate: 120, currency: 'USD', totalIncome: 3600, certificates: ['Made'] },
        { id: 4, firstName: 'Jason', lastName: 'Best', nationality: 'Germany', title: 'Cooker', daysOnBoard: 30, dailyRate: 100, currency: 'EUR', totalIncome: 3000, certificates: ['Lighter'] },
        { id: 5, firstName: 'Abdul', lastName: 'Emin', nationality: 'England', title: 'Cleaner', daysOnBoard: 300, dailyRate: 28, currency: 'USD', totalIncome: 8400, certificates: ['Novaqua'] },

    ];

    getCrews(): Crew[] {
        return this.crews;
    }

    getCrew(id: number): Crew {
        const crew = this.crews.find(crew => crew.id == id);
        return crew!;
    }

    addCrew(newCrew: Crew) {
        newCrew.id = this.crews[this.crews.length - 1].id! + 1;
        newCrew.totalIncome = newCrew.dailyRate! * newCrew.daysOnBoard!;
        this.crews.push(newCrew);
    }
    editCrew(id: number, updatedCrew: Crew) {
        const crewIndex = this.crews.findIndex(crew => crew.id == id);
        updatedCrew.totalIncome = updatedCrew.dailyRate! * updatedCrew.daysOnBoard!;
        this.crews[crewIndex] = updatedCrew;
    }
    deleteCrew(id: number): boolean {
        const crewIndex = this.crews.findIndex(crew => crew.id == id);
        this.crews.splice(crewIndex, 1);
        if (this.crews.find(crew => crew.id == id) == null) {
          return true;
        } else {
          return false;
        }
      }

      editTotalIncome(discount: number, id: number){
        const crewIndex = this.crews.findIndex(crew => crew.id == id);
         let result = (this.crews[crewIndex].dailyRate! * this.crews[crewIndex].daysOnBoard!)
        if (discount != null && discount >= 0 && discount <= 100) {
          result *= (100 - discount) * 0.01;
          this.crews[crewIndex].totalIncome = result
        }
        
      }
      getTotalIncomeSum(currency: string): number {
        return this.crews.filter((crew) => crew.currency == currency).reduce((sum, crew) => sum + crew.totalIncome!, 0)
    
      }
    getCrewCertificate(id: number): string[] {
        const crew = this.crews.find(crew => crew.id == id);
        return crew!.certificates!;
    }
}