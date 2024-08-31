import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { type userInputModel } from './user-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  @Output() sendFormToHome = new EventEmitter<userInputModel>();

  onSubmitForm() {
    console.log("I am in input component in onsubmit button");


    console.log(this.enteredInitialInvestment, this.enteredAnnualInvestment, this.enteredExpectedReturn, this.enteredDuration);
    this.sendFormToHome.emit({
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredDuration,

      
    });
    
  }

}
