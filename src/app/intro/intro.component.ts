import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  intro = {}

  constructor(private configSer:ConfigService) { }

  ngOnInit() {
    this.intro = this.getIntro();
  }

  getIntro() {
    return this.configSer.getConfig().intro;
  }

}
