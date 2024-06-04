import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from '../../model/news.model';
@Component({
  selector: 'app-detalji',
  standalone: true,
  imports: [],
  templateUrl: './detalji.component.html',
  styleUrl: './detalji.component.css'
})
export class DetaljiComponent implements OnInit {
  news?: News
id?: any;

constructor(private serviceNews:NewsService,
private activeRouter:ActivatedRoute,
private router: Router
){}

ngOnInit(): void {
this.activeRouter.paramMap.subscribe(x=>{
this.id = x.get("id")
console.log(this.id)

})

this.serviceNews.getAllNews().then(res=>{
  this.news = res.filter(x=>x.id==Number.parseInt(this.id))[0]
  console.log(this.news)
})
}
back(){
this.router.navigateByUrl('/news')
}

}

