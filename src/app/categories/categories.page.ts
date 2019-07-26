import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WpserviceService } from '../wpservice.service';
import { ActivatedRoute } from '@angular/router';

import { Badge } from '@ionic-native/badge/ngx';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  posts: any;
  categoryid: string;
  counter=1;
  constructor( public badge:Badge, private  http: HttpClient, private wp: WpserviceService, private ar: ActivatedRoute) { 
    this.categoryid=this.ar.snapshot.paramMap.get('id');
    this.http.get('https://trainingapp.gremza.com/wp-json/wp/v2/posts?categories=' + this.categoryid+'&per_page=2&page=' + this.counter).subscribe(data =>{
      this.posts=data;
      console.log("category data", data); 
    })
  }
  doRefresh(event) {
    this.http.get('https://trainingapp.gremza.com/wp-json/wp/v2/posts?categories=' + this.categoryid).subscribe(data =>{
      this.posts=data;
      console.log("category data", data); 
    })
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
      this.counter++;
      this.http.get('https://trainingapp.gremza.com/wp-json/wp/v2/posts?categories=' + this.categoryid+'&per_page=2&page=' + this.counter).subscribe(data =>{
      this.posts=data;
      console.log("category data", data); })
    }
    , 500);
  }

  ngOnInit() {
  }

}
