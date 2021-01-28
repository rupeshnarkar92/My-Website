import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';
import {Location} from "@angular/common"

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  post = {};
  constructor(private route:ActivatedRoute, private config:ConfigService, private location: Location) { }

  ngOnInit() {
    // let id = this.route.params["id"];
    let id = +this.route.snapshot.paramMap.get('id');
    console.log("idddd",id)
    this.post = this.getPostById(id);
  }

  getPostById(id:number) {
    return this.config.getPostByID(id);
  }

  goBack() {
    this.location.back(); 
  }

}
