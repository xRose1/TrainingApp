import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WpserviceService } from '../wpservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.page.html',
  styleUrls: ['./single.page.scss'],
})
export class SinglePage implements OnInit {
  post: any;
  postid: string;
  constructor(private http: HttpClient, private wp: WpserviceService, private ar: ActivatedRoute) { 
    this.postid=this.ar.snapshot.paramMap.get('id');
    this.http.get(this.wp.postslink + '/' + this.postid).subscribe(data=>{
      this.post=data;
      console.log("singlepost data", data);
    })
  }

  ngOnInit() {
  }

}
