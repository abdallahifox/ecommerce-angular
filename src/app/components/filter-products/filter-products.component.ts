import { Component, Input } from '@angular/core';
import { ProductsServericeService } from 'src/app/Services/products/products-serverice.service';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.css'],
  providers:[NgbPaginationModule,NgIf]
})
export class FilterProductsComponent {
  @Input() categories: string[] = []
  sortType = ''
  constructor(private productService: ProductsServericeService,private router:Router) { }
  selectedCategory: string ='';
  selectedSort: string ='Newest';

  filterdProducts(){
    if(this.selectedSort && !this.selectedCategory) {
      this.router.navigate(['/'],{queryParams:{sort:this.selectedSort}})
      this.productService.sortProducts(this.selectedSort)
    }else{
      this.router.navigate(['/'],{queryParams:{sort:this.selectedSort,category:this.selectedCategory}})
      this.productService.filterProductsByCategory(this.selectedCategory,this.selectedSort)
    }
  }

  fetchAllProducts(){
    this.router.navigate(['/'])
    this.selectedCategory= ''
    this.selectedSort = 'Newest'
    this.productService.getAllProducts()
  }


}
