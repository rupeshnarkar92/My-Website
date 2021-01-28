import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestProject';


 
}



// for(var a=1;a<=10;a++) {
//     console.log("Number",a)
// }

// for(var b=1; b<=20;b++) {
//   if(b % 2 == 0) {
//     console.log("Even Numbers",b);
//   }
// }
// for(var a=1; a<=5; a++) {
//   for(var b=1; b<=a; b++){
//     console.log(b + " ");
//   }
// }
//  var aaray =[10,20,30,40,50]
//  var sum = 0
//  aaray.forEach(element => {
//    console.log(element)
//     sum = sum + element;
   
// });

// console.log(sum)

// for(var a=1;a<=100;a + 10) {
//   console.log(a);
// }

var arry= [
  ["hrr",18,"male","bcom"],
  ["jls",21,"female","bsc"],
  ["kdd",90,"male","bsks"],
  ["lks",78,"male","lsks"],
  ["lsl",87,"male","jsj"]
]

console.log(arry);

var innerHeight = window.innerHeight;
console.log("InnerHeight",innerHeight)

var outerHeight = window.outerHeight;
console.log("outerHeight",outerHeight)

var innerWidth = window.innerWidth;
console.log("innerWidth",innerWidth)

var outerWidth = window.outerWidth;
console.log("outerWidth",outerWidth)

console.log("location",location);

var employee = {
  id :1,
  greet:function() {   
    setTimeout(() => {
      console.log("ID",this.id);
    }, 1000);
  }
} 
employee.greet();

console.log("Addition",2 + '2')
console.log('2' + 2);

// console.log("multi", 2 * '2')
// console.log('2' * 2);

let nums = [1,2,2,4]

console.log("Nums",nums)
console.log("Nums1S",new Set(nums));
console.log("Nums1S",[...new Set(nums)]);

let  func = function() {

  {
    (function() {
      let l = "let";
      var v = "var";
    })();   
  }
  // console.log("let",v)
}
var num= 5

func();



function functionScope(){
  var iHaveFunctionScope="something something mj"
  console.log("functionscope",iHaveFunctionScope)
}

//something something mj
// console.log(iHaveFunctionScope);
//Reference Error

functionScope()



function scope(){
  if(true){
      var scope1 =`I have function Scope`
      let scope2 = `I have block scope`
      const scope3 =`I also have block scope`
  }
  console.log(scope1) //function scope
  // console.log(scope2) //block scope
  // console.log(scope3) //block scope
  }
  scope()

  
function outerFunction1() {
  var variable1 = 'ney vatsa'
  const variable2 = 'shashank jha'
  let variable3 = 'huda'
  function innerFunction() {
      console.log(variable1)
      console.log(variable2)
      console.log(variable3)
  }
  innerFunction()
  console.log(variable1)
}

outerFunction1()


var outerFunction = function () {
  let variable1 = "Example of closure"
  var innerFunction = function () {
      console.log(variable1)
  }
  return innerFunction;
}
var newFunction = outerFunction()
newFunction()
//Example of closure

function add(x) {
  return function(y) {
    return x + y;
  };
}
var addFive = add(5);
var addTen = add(10);
console.log(addFive(10));  // 15
console.log(addTen(10)); // 20

var scope1 = "I am global";
function whatismyscope(){
   var scope1 = "I am just a local";
   function func() {return scope1;}
   return func;
}

whatismyscope()

function x() {

  var a = "I am a";

  function y() {
       /*
       If a nested routine declares an item with the same name,
       the outer item is not available in the nested routine.
       */
      var a = 'I am inner a';
      console.log( a )
  }
  y();

}
// outputs 'I am inner a'
x();

let c1 = 2;

var x1 = function() {
  console.log("value of c1 1",c1);
  var c1 = 4;
  console.log("value of c1 2",c1);
}

x1();
console.log("value of c1 3",c1)


//CallBack Function


function show(){
  console.log("this is function show")
}

function call(Call){
  console.log("Call Function");
  Call();  
}

call(show);

function show1(a){
  console.log("this is function show Value of a",a)
}

function call1(Call1){
  var a = 101
  console.log("Call Function",a);
  Call1(a);  
}

call1(show1);

function show12(a){
  console.log("this is function show Value of a",a)
}

function call12(a,Call12){

  console.log("Call Function",a);
  Call12(a);  
}

call12(50,show12);

var no = 20;
console.log("Number",no);
console.log("Addition",no +" "+ ono);
var ono = 30;

function value1(call){
  var s =20;
  call(s);
}

value1(s => console.log("I am value Function",s));


(function () {
  console.log("Hello world..........");
 // document.getElementById("demo").innerHTML = "Hello! I called myself";
})();

(function () {
  console.log("Welcome to javascript...");
})();


function myFunction(a, b,...c) {
  return arguments.length;
}
console.log("func.....",myFunction(4,3,5,4,3,2,8,9));

function myFunction1(a, b) {
  return a * b;
}
console.log(myFunction1(2,3).toString());





