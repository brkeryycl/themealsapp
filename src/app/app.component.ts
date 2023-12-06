import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { CategoryComponent } from "./category/category.component";
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        CommonModule,
        RouterOutlet,
        NavbarComponent,
        CategoryComponent,
        HttpClientModule,
        FooterComponent
    ]
})
export class AppComponent {
  
    
}
