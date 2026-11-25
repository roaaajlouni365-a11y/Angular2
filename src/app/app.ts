import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ElectroShop2');
ProductName = signal('Wireless Headphones');
ProductDescription = signal('Bluetooth Headphones');
ProductPrice = signal(120);
IsAvailable = signal(true);
  


  //هسا بدنا نستقبل الابن يا اهلا وسهلا 
  cartProductName = '';
cartProductPrice = 0;
cartQuantity = 0;

handleAddToCart(event: { productName: string; quantity: number }) {
  this.cartProductName = event.productName;
  this.cartProductPrice = this.ProductPrice();
  this.cartQuantity = event.quantity;
}
}
