import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post:any;
 
  constructor(private config:ConfigService) { }

  ngOnInit() {
    
  }

}
