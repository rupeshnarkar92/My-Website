import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription, timer } from 'rxjs';
import { take, toArray } from 'rxjs/operators';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  header = {}
  
  constructor(private configSer:ConfigService) { }


  sourceSub: Subscription;


  users = [
    {name:'Anup',skill:'Angular'},
    {name:'Shekhar',skill:'HTML, CSS'},
    {name:'Sharma',skill:'Javascript'},
    {name:'UxTrendz',skill:'Typescript'},
  ]
  

  ngOnInit() {
    this.header =  this.getHeader();

    // const source = interval(1000);

    const source2 = timer(3000,1000);    

    let count = 0;

    this.sourceSub =  source2.pipe(
      take(5),
      toArray()
    )    
    .subscribe(res=>{
      console.log(res);

      // if(res >= 5) {
      //   this.sourceSub.unsubscribe();
      // }
    })
  }


  print() {
    let el = document.createElement('li');
    el.innerText = "Welcome My Website";


    let inp = document.createElement('input');
    inp.innerText = "Hello Welcome"

    document.getElementById("elContainer").appendChild(el); 

    document.getElementById("input1").appendChild(inp);
  }

  getHeader(){
    return this.configSer.getConfig().header;
  }
}
