import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../models/Iproducts';

@Pipe({
  name: 'searchproduct',
})
export class SearchproductPipe implements PipeTransform {

  transform(productList:Product[], userSearch:string): Product[] {
    return productList.filter((product)=>{
      return product.title.toLowerCase().includes(userSearch.toLowerCase())
    });
  }

}
