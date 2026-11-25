import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  styleUrl: './shopping-cart.css',
  templateUrl: './shopping-cart.html',
})
export class ShoppingCart {
  @Input() productName = '';
@Input() productPrice = 0;
@Input() quantity = 0;
}
