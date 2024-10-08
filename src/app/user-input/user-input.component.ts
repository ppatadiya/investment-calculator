import { Component, EventEmitter, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  
  private investmentService = inject(InvestmentService);

  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  

  onSubmitForm() {
    console.log("I am in input component in onsubmit button");


    console.log(this.enteredInitialInvestment, this.enteredAnnualInvestment, this.enteredExpectedReturn, this.enteredDuration);


    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredDuration,

    });
    
    
  }

}
