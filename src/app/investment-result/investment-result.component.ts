import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AnnualData {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  @Input() annualData!: AnnualData[];
  
  constructor(){
    console.log("controller of investment result");
    //console.log(this.data);
    
  }
}
