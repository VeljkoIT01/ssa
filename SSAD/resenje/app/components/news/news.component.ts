import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { News } from '../../model/news.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit {
  listNews: News[] = []
  constructor(private serviceNews: NewsService,
    private router:Router

  ) { 
  }
  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(): void {
    this.serviceNews.getAllNews().then(x => {
      this.listNews = x
      // console.table(this.listProducts)
    })
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
  trackNews(index:number,news:News):any{return news.id}
}

