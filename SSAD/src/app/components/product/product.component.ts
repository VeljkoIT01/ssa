import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  listProducts: Product[] = []
  categories: string[] = []
  selectCategory: string | null = null
  constructor(private servicesProduct: ProductService,
    private router:Router

  ) { 
  }
  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(): void {
    this.servicesProduct.getAllProducts().then(x => {
      this.listProducts = x
      // console.table(this.listProducts)
      this.categories = [... new Set(this.listProducts.map(x=>x.category))]
      console.log(this.categories)

    })
  }
  onSelectCategory(category:any){
    this.selectCategory = this.categories === category ? null : category
  }
  detalji(id: any){
    this.router.navigateByUrl('/detalji/'+id)
  }
  boj(id:any){
    if(id%2==0){
      return 'danger'
    }
    return 'success'
  }
}
