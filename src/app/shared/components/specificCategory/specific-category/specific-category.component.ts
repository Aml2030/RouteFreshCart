import { Component, inject, OnInit, signal } from '@angular/core';
import { Category } from '../../../models/Iproducts';
import { CategoryService } from '../../../../features/services/category/category.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ProductService } from './../../../../features/services/product/product.service';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../../../features/services/cart/cart.service';



@Component({
  selector: 'app-specific-category',
  standalone: true, // Assuming you are using standalone components
  imports: [RouterLink, TranslateModule],
templateUrl: './specific-category.component.html',
  styleUrl: './specific-category.component.scss',
})
export class SpecificCategoryComponent implements OnInit {
  private categoryService = inject(CategoryService);
  private productService = inject(ProductService);
  private activatedRoute = inject(ActivatedRoute);

  categoryDetails = signal<Category | null>(null);
  relatedProducts = signal<any[]>([]);

  ngOnInit(): void {
    // Combine everything into ONE subscription
    this.activatedRoute.paramMap.subscribe((params) => {
      const idOrSlug = params.get('id');
      if (idOrSlug) {
        this.loadCategoryDetails(idOrSlug);
      }
    });
  }

  loadCategoryDetails(id: string) {
    this.categoryService.getSpecificCategory(id).subscribe({
      next: (res) => {
        this.categoryDetails.set(res.data);
        
        this.loadRelatedProducts(res.data.slug);
      },
      error: (err) => console.error('Error loading category:', err),
    });
  }

  loadRelatedProducts(categorySlug: string) {
    this.productService.getAllProducts().subscribe({
      next: (res) => {
        const filtered = res.data.filter((product: any) =>
          product.category.slug === categorySlug
        );
        this.relatedProducts.set(filtered);
      },
      error: (err) => console.error('Error filtering products:', err),
    });
  }



    cartService:CartService=inject(CartService);
    toaster=inject(ToastrService);
    addProductToCart(productId:string){
    this.cartService.addProductToCart(productId).subscribe((res)=>{
      console.log(res.data)
      // alert(res.message)
      this.toaster.success(res.message,
        "",
        {
          timeOut:2000,
          progressBar:true,
          positionClass:"toast-bottom-right"
        }
      )
      this.cartService.NoOfCartItems.next(res.numOfCartItems)
    })
  }

}
