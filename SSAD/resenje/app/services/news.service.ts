import { Injectable } from '@angular/core';
import { News } from '../model/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  readonly url = 'http://localhost:3000/news'
  constructor() { }

  async getAllNews(): Promise<News[]> {
    const data = await fetch(this.url)
    return await data.json()
  }
  async getById(id:number): Promise<News[]> {
    const data = await fetch(this.url+'/'+id)
    return await data.json()
}}
