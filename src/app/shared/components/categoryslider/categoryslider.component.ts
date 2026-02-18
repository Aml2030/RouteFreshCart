import { Component, inject, WritableSignal, signal, OnInit } from '@angular/core';
import { CategoryService } from './../../../features/services/category/category.service';
import { Category } from '../../models/Iproducts';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categoryslider',
  imports: [CarouselModule],
templateUrl: './categoryslider.component.html',
  styleUrl: './categoryslider.component.scss',
})
export class CategorysliderComponent implements OnInit {
private categoryService:CategoryService = inject(CategoryService);
categoryList:WritableSignal<Category[]>=signal<Category[]>([]);

ngOnInit(): void {
  this.getAllCategories();
}
getAllCategories(){
  this.categoryService.getAllCategories().subscribe({
    next: res=>{
      this.categoryList.set(res.data);
    }
  })
}

  customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: false,
      pullDrag: false,
      dots: true,
      navSpeed: 700,
      navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
      responsive: {
        0: {
          items: 7
        }
      },
      nav: true
    }
}
