import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { type investmentResultModel } from './investment-result.model';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  @Input({required: true}) Finalresult?: investmentResultModel[];

  ngOnInit() {
    // Call the logTransformedMessage method when the component initializes
    console.log(this.Finalresult);
  }

  
}
