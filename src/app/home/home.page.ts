import { Component, OnInit } from '@angular/core';
import { WpserviceService } from '../wpservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  posts: any;
  counter=1
  constructor(private http: HttpClient,private wp: WpserviceService) {
    this.http.get(this.wp.postslinkwithpagination+ this.counter).subscribe(data=>{
      this.posts=data;
      console.log(data);
    },
    err => { 
      alert(err)
    })
   }

   doRefresh(event) {
    this.wp.getPosts().subscribe(data=>{
      this.posts=data;
      console.log(data);
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
      this.http.get(this.wp.postslinkwithpagination+ this.counter).subscribe(data=>{
        this.posts=data;
        console.log(data);})
    }, 500);
  }
  ngOnInit() {
  }

}
