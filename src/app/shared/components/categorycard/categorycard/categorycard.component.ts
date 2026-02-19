import { Component ,input , inject, WritableSignal , signal} from '@angular/core';
import { Category } from '../../../models/Iproducts';


@Component({
  selector: 'app-categorycard',
  imports: [],
  templateUrl: './categorycard.component.html',
  styleUrl: './categorycard.component.scss',
})
export class CategorycardComponent {

  categories=input<Category>({} as Category)

  // categoryID:WritableSignal<string>=signal<string>("");
  // categorySLUG:WritableSignal<string>=signal<string>("");

  //  private categoryService:CategoryService = inject(CategoryService);

  //   getSpecificCategory(categoryId:string){
  //   this.categoryService.getSpecificCategory(categoryId).subscribe((res)=>{
  //     this.categoryID.set(res.data._id)
  //     this.categorySLUG.set(res.data.slug)
  //     console.log(this.categoryID());
  //     console.log(this.categorySLUG());
  //   })
  // }

}
