import { Component ,input} from '@angular/core';
import { Category } from '../../../models/Iproducts';
@Component({
  selector: 'app-categorycard',
  imports: [],
  templateUrl: './categorycard.component.html',
  styleUrl: './categorycard.component.scss',
})
export class CategorycardComponent {

  categories=input<Category>({} as Category)
}
