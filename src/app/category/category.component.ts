import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { CartService } from '../services/cart.service';



@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    NgFor,
    
    
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  
  
  selectedProduct:  string= "";
  cardData: any[] = [];
  apiData: any[] = [];


  constructor(private http: HttpClient, private cartService: CartService) {}

  

  addToCart() {
    if (this.selectedProduct) {
      
      this.cartService.addToCart({ name: this.selectedProduct });
    }
  }

  selectProduct(name: string) {
    this.selectedProduct = name;
    this.addToCart();
  }
  
  ngOnInit(): void {
    this.getDataFromApi();
  }

  getDataFromApi() {
    
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';

    
    this.http.get(apiUrl).subscribe(
      (data: any) => {
        this.apiData = data['categories'];
        console.log(data['categories'])
      },
      (error) => {
        console.error('API verileri alınamadı:', error);
      }
    );
  }
  
  selectedName: string | null = null;
  selectName(name: string) {
    this.selectedName = name;
    this.getProductsForName(name);
  }
  
  getProductsForName(name: string) {
    
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`;
  
    this.http.get(apiUrl).subscribe(
      (products: any) => {
        this.cardData = products['meals'];
        
      },
      (error) => {
        console.error(`Ürünleri getirme hatası for ${name}:`, error);
      }
    );
  }
  

  
} 
  


    


