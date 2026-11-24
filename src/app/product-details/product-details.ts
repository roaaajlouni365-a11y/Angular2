import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: false,
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails 
{
   productName: string = "Laptop";
  productDescription: string = "High-performance laptop";
  productPrice: number = 750;
  productImage: string = "https://i.pinimg.com/736x/9e/5d/5f/9e5d5f9ea285e3a76fab7d760f544ec3.jpg";
  quantity: number = 10;
  isAvailable: boolean = true;
  discountPercentage: number = 15;
}