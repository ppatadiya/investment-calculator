import { Injectable } from '@angular/core';
import { userInputModel } from './user-input/user-input.model';
import { investmentResultModel } from './investment-result/investment-result.model';


@Injectable({providedIn: 'root'})
export class InvestmentService {
    // Create an empty array of investmentResultModel type
    Finalresult?: investmentResultModel[] = [];
    
    calculateInvestmentResults(data: userInputModel){

        const {initialInvestment, duration, expectedReturn, annualInvestment} = data;
        const annualData = [];
        let investmentValue = initialInvestment;
        
        for (let i = 0; i < duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (expectedReturn / 100);
            investmentValue += interestEarnedInYear + annualInvestment;
            const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;
            annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
            });
        }
        
        //console.log(annualData);
        this.Finalresult = annualData;
        console.log(this.Finalresult);
        
            
        }
}