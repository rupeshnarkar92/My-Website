import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  pricing = {}

  constructor(private configSer:ConfigService) { }

  ngOnInit() {
    this.pricing = this.getPlans();
  }

  getPlans(){
    return this.configSer.getConfig().pricing;
  }

}
