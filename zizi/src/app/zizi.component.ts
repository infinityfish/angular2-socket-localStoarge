import { Component } from '@angular/core';
import { TodosComponent } from './todos/todos.component';
import { TodoService } from './todos/todo.service';
import { ProductsComponent } from './products/products.component';

@Component({
  moduleId: module.id,
  selector: 'zizi-app',
  templateUrl: 'zizi.component.html',
  styleUrls: ['zizi.component.css'],
  directives: [TodosComponent, ProductsComponent],
  providers: [TodoService]
})
export class ZiziAppComponent {
  title = 'ziziTodos';
}

// export class BankAccount {  
//     balance = 0;  
//     deposit(credit: number) {  
//         this.balance += credit;  
//         return this.balance;  
//     }  
// } 


// export class BankAccount {  
//     balance: number;  
//     constructor(initially: number) {  
//         this.balance = initially;  
//     }  
//     deposit(creditAmt: number) {  
//         this.balance += creditAmt;  
//         return this.balance;  
//     }
//     withdraw(debitAmt: number) {  
//         this.balance -= debitAmt;  
//     }   
// }


