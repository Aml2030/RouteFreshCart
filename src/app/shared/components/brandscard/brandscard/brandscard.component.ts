import { Component ,input} from '@angular/core';
import { Brand } from '../../../models/Iproducts';

@Component({
  selector: 'app-brandscard',
  imports: [],
  templateUrl: './brandscard.component.html',
  styleUrl: './brandscard.component.scss',
})
export class BrandscardComponent {
  brands=input<Brand>({} as Brand)
}
