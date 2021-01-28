import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  gallery= {}
  constructor(private configSer:ConfigService) { }

  ngOnInit() {

    this.gallery = this.getImages();
    console.log("this.gallery",this.gallery)
  }

  getImages() {
    return this.configSer.getConfig().gallery;
  }

}
