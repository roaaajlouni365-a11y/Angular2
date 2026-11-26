import { Component , signal, Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: false,
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails 
{
@Input() productName = 'Laptop';
  @Input() productDescription = 'Dell Laptop, Core i7, 16GB RAM';
  @Input() productPrice = 850;
  productImage: string = "https://i.pinimg.com/736x/9e/5d/5f/9e5d5f9ea285e3a76fab7d760f544ec3.jpg";
    @Input() isAvailable = true;
  discountPercentage: number = 15;

  
 quantity = signal(1);

 increaseQuantity() {
  this.quantity.update(current => current + 1);   
}
decreaseQuantity() {
  this.quantity.update(current => current > 1 ? current - 1 : current);
}
@Output() addToCart = new EventEmitter<{ productName: string; quantity: number }>();
addProductToCart() {
  this.addToCart.emit({ 
    productName: this.productName,
     quantity: this.quantity() });

}
}