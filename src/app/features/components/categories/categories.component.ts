import { Component, inject, OnInit, signal, WritableSignal   } from '@angular/core';

import { Category } from '../../../shared/models/Iproducts';
import { CategoryService } from '../../services/category/category.service';
import { CategorycardComponent } from '../../../shared/components/categorycard/categorycard/categorycard.component';

@Component({
  selector: 'app-categories',
  imports: [CategorycardComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit{

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
}

