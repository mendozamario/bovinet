import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Settlement } from 'src/app/models/settlement';
import { ProductionService } from 'src/app/services/production.service';
import { SettlementService } from 'src/app/services/settlement.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  expense: number;
  products: Product[];
  settlements: Settlement[];
  constructor(private settlementService: SettlementService, private productionService: ProductionService) { }

  ngOnInit(): void {
    this.consultReports();
  }

  consultReports(){
    this.settlementService.get().subscribe(data => {
      this.settlements = data;

      this.calculateExpense();
    })

    this.productionService.get().subscribe(data => {
      this.products = data;
    })

  }

  calculateExpense(){
    this.settlements.forEach(element => {
      this.expense += element.salary;
    });
  }
}
