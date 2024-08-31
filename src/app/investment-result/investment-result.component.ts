import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  
  
  private investmentService = inject(InvestmentService);

  ngOnInit() {
    // Call the logTransformedMessage method when the component initializes
    
  }

  get Finalresult(){
    return this.investmentService.Finalresult;
  }

  
}
