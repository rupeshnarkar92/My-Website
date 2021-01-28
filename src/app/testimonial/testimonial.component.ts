import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  testimonials = {}

  constructor(private configSer:ConfigService) { }

  ngOnInit() {
    this.testimonials = this.getUserdetails();
  }

  getUserdetails(){
    return this.configSer.getConfig().testimonials;
  }

}
