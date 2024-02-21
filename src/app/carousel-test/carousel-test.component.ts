import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-carousel-test',
  templateUrl: './carousel-test.component.html',
  styleUrls: ['./carousel-test.component.scss']
})
export class CarouselTestComponent implements OnInit {
  @Input() category!: string;
  categories: string[] = ['Category 1', 'Category 2', 'Category 3']; // Replace with your categories

  @ViewChildren('productCarousel') productCarouselContainers!: QueryList<ElementRef>; // Add the '!' operator

  constructor() {}

  ngOnInit() {}

  scrollCarousel(category: string, direction: 'prev' | 'next') {
    const container = this.productCarouselContainers.find(item => item.nativeElement.dataset.category === category)?.nativeElement;

    if (container) {
      const containerWidth = container.offsetWidth;
      const scrollStep = containerWidth * 0.3; // Adjust the step value as needed
      const currentPosition = container.scrollLeft;
      let newPosition: number;

      if (direction === 'next') {
        newPosition = currentPosition + scrollStep;
      } else {
        newPosition = currentPosition - scrollStep;
      }

      newPosition = Math.max(0, Math.min(newPosition, container.scrollWidth - containerWidth));

      container.scrollTo({ left: newPosition, behavior: 'smooth' });
    }
  }
}
