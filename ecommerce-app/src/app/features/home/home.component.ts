import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { BRANDS } from '../../core/constant/brands';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.style.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  @ViewChild('owlCarouselBanner') carousel: CarouselComponent | undefined;

  bannerTop: Array<{ title: string; icon: string }> = [
    {
      title: 'Fast Shipping',
      icon: '../../../assets/icons/plane-departure.svg',
    },
    {
      title: 'Quality Insurance',
      icon: '../../../assets/icons/badge-check.svg',
    },
    { title: 'Safe Payment', icon: '../../../assets/icons/shield-check.svg' },
    { title: 'Support 24/7', icon: '../../../assets/icons/headset.svg' },
  ];

  bannerPageCarousel: Array<BannerPage> = [
    {
      src: '../../../assets/images/background/background-cua-product-scaled.jpg',
      href: '',
    },
    {
      src: '../../../assets/images/background/background-cua-product-scaled.jpg',
      href: '',
    },
    {
      src: '../../../assets/images/background/background-cua-product-scaled.jpg',
      href: '',
    },
  ];
  bannerPageOptions: OwlOptions = {
    loop: false,
    autoplayHoverPause: true,
    items: 1,
    margin: 0,
    dots: true,
    nav: false,
    autoWidth: true,
    mergeFit: true,
    lazyLoad: true,
    rewind: true,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 },
    },
    stagePadding: 0,
  };

  brandCarousel: Array<Brand> = BRANDS;
  brandOwlOptions: OwlOptions = {
    loop: false,
    dots: true,
    navSpeed: 400,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 6,
      },
      940: {
        items: 6,
      },
    },
  };

  constructor() {}

  prevSlide() {
    if (this.carousel) {
      this.carousel.prev();
    }
  }

  nextSlide() {
    if (this.carousel) {
      this.carousel.next();
    }
  }
}

export interface Brand {
  name: string;
  href: string;
  logo: string;
}

export interface BannerPage {
  src: string;
  href?: string;
}
