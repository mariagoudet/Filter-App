import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/data.service';
import { ICustomer } from '../shared/interfaces';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {
    title: string;
    people: any[];
    
    constructor(private dataService: DataService) {}
    
    ngOnInit() {
        this.title = 'Clientes';
         this.dataService.getCustomers()
            .subscribe((customers: ICustomer[]) => this.people = customers);
      //  this.people = [
          //  { id: 1, name: 'Juan Lopez', city: 'Madrid', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
          //  { id: 2, name: 'Petra Diego', city: 'Sevilla', orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
          //  { id: 3, name: 'Michelle Gomez', city: 'Caracas', orderTotal: 99.99, customerSince: new Date(2002, 10, 31)},
          //  { id: 4, name: 'Jose Bemo', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31)},
      //  ];
    }
}