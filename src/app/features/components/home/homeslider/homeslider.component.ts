import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-homeslider',
  imports: [CarouselModule ],
  templateUrl: './homeslider.component.html',
  styleUrl: './homeslider.component.scss',
})
export class HomesliderComponent {
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
          items: 1
        }
      },
      nav: true,
      rtl:true,
    }
}
