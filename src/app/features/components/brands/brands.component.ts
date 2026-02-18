import { Component, inject, OnInit, signal, WritableSignal   } from '@angular/core';
import { BrandscardComponent } from '../../../shared/components/brandscard/brandscard/brandscard.component';
import { Brand } from '../../../shared/models/Iproducts';
import { BrandService } from '../../services/brand/brand.service';
@Component({
  selector: 'app-brands',
  imports: [BrandscardComponent],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss',
})
export class BrandsComponent implements OnInit{

  private brandrsService:BrandService = inject(BrandService);
  brandsList:WritableSignal<Brand[]>=signal<Brand[]>([]);


ngOnInit(): void {
  this.getAllCategories();
}
getAllCategories(){
  this.brandrsService.getAllBrands().subscribe({
    next: res=>{
      this.brandsList.set(res.data);
    }
  })
}
}

