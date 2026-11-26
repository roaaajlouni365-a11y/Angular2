import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  category: 'Electronics' | 'Accessories';
  isAvailable: boolean;
  discount: number;
  image: string;
}

@Component({
  selector: 'app-product-list',
  standalone: false,
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 850,
      category: 'Electronics',
      isAvailable: true,
      discount: 15,
      image: 'https://placehold.co/600x400/fff0f5/7a284c?text=Laptop',
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 450,
      category: 'Electronics',
      isAvailable: true,
      discount: 0,
      image: 'https://placehold.co/600x400/fff0f5/7a284c?text=Smartphone',
    },
    {
      id: 3,
      name: 'Headphones',
      price: 120,
      category: 'Accessories',
      isAvailable: false,
      discount: 10,
      image: 'https://placehold.co/600x400/fff0f5/7a284c?text=Headphones',
    },
    {
      id: 4,
      name: 'Smart Watch',
      price: 180,
      category: 'Accessories',
      isAvailable: true,
      discount: 20,
      image: 'https://placehold.co/600x400/fff0f5/7a284c?text=Smart%20Watch',
    },
    {
      id: 5,
      name: 'Tablet',
      price: 300,
      category: 'Electronics',
      isAvailable: false,
      discount: 5,
      image: 'https://placehold.co/600x400/fff0f5/7a284c?text=Tablet',
    },
    {
      id: 6,
      name: 'Keyboard',
      price: 65,
      category: 'Accessories',
      isAvailable: true,
      discount: 0,
      image: 'https://placehold.co/600x400/fff0f5/7a284c?text=Keyboard',
    },
    {
      id: 7,
      name: 'Gaming Mouse',
      price: 45,
      category: 'Accessories',
      isAvailable: true,
      discount: 10,
      image: 'https://placehold.co/600x400/fff0f5/7a284c?text=Gaming%20Mouse',
    },
    {
      id: 8,
      name: 'Monitor',
      price: 220,
      category: 'Electronics',
      isAvailable: false,
      discount: 0,
      image: 'https://placehold.co/600x400/fff0f5/7a284c?text=Monitor',
    },
  ];

  orderStatus = 'Processing';
  selectedCategory = 'All Products';
}
