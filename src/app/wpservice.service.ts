import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WpserviceService {
  postslink="https://trainingapp.gremza.com/wp-json/wp/v2/posts";
  categorylink="https://trainingapp.gremza.com/wp-json/wp/v2/categories";
  postslinkwithpagination="https://trainingapp.gremza.com/wp-json/wp/v2/posts?_embeded&per_page=2&page="
  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(this.postslink);
  }
  getCategory(){
    return this.http.get(this.categorylink);
  }
}
