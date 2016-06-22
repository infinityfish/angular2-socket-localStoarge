import { Component, OnInit } from '@angular/core';

declare const io; // see here: https://github.com/AngularClass/angular2-webpack-starter/issues/221

@Component({
  moduleId: module.id,
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css']
})
export class ProductsComponent implements OnInit {

    price: number = 0.0;
    socket = null;
    bidValue = '';
 
    constructor(){
        this.socket = io('http://localhost:8000');
        this.socket.on('priceUpdate', function(data){
            this.price = data;
        }.bind(this));    
    }
    
    bid(){
        this.socket.emit('bid', this.bidValue);
        this.bidValue = '';
    }

  ngOnInit() {
  }

}
