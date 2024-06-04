import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-detalji',
  standalone: true,
  imports: [],
  templateUrl: './detalji.component.html',
  styleUrl: './detalji.component.css'
})
export class DetaljiComponent implements OnInit{

  product?: Product
  id?: any;

  constructor(private serviceProduct:ProductService,
    private activeRouter:ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(x=>{
      this.id = x.get("id")
      // console.log(this.id)

    })

    this.serviceProduct.getAllProducts().then(res=>{
      this.product = res.filter(x=>x.id==Number.parseInt(this.id))[0]
      console.log(this.product)
    })

  }
  back(){
    this.router.navigateByUrl('/products')
  }

}
