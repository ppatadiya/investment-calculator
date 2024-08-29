import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InvestmentResultComponent } from "../investment-result/investment-result.component";

interface AnnualData {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [CommonModule, FormsModule, InvestmentResultComponent],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  constructor(){
    console.log("controller of user input");
  }

  

  initialInvestment!: number;
  annualInvestment!: number;
  expectedReturn = 5;
  duration = 10;
  annualData: AnnualData[] = [];


  calculateInvestmentResults() {
    console.log("let's calculate investment result");

    console.log(this.initialInvestment, this.annualInvestment, this.expectedReturn, this.duration);
    
    //const annualData = [];
    
    let investmentValue = this.initialInvestment;
  
    for (let i = 0; i < this.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (this.expectedReturn / 100);
      investmentValue += interestEarnedInYear + this.annualInvestment;
      const totalInterest =
        investmentValue - this.annualInvestment * year - this.initialInvestment;
      this.annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: this.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: this.initialInvestment + this.annualInvestment * year,
      });
    }
    console.log(this.annualData);
    
    //return annualData;
  }
}
