import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = "Tom's Products";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = true;

  _listFilter: string;
  get listFilter() {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter):this.products; // JS Conditional Operator
  }

  performFilter(filterBy:string):IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product:IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) != -1)
  }

  constructor(private _productService:ProductService){
  }

  errorMessage: string;
  public ngOnInit():void {
    this._productService.getProducts().subscribe(products => {
      this.products = products,     
      this.filteredProducts = this.products;
    },
      error => this.errorMessage = <any>error); 
    
  }



  filteredProducts: IProduct[];
  products: IProduct[] = [];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
