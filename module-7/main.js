// console.log("Hello World");


// "use strict";
// myName();
// function myName(){
//     name = "Asif";
// }

// spread operator
// let arr1=[1,2,3,4,5];
// let arr2=[...arr1,10,11,12,1,31,4];
// console.log(arr2);


// without spread operator
// let arr1=[1,2,3,4,5];
// let arr2=[10,11,12,1,31,4];
// arr2.push(arr1);
// console.log(arr2);

//rest operator
// function func(...nums){
//     console.log(nums);
// }

// func(1,2,3,4,5,6,7);


// let name=function(str){
//     console.log(str);
// }

// name("Asif");


function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
  }
  
  myFun("one", "two", "three", "four", "five", "six","Seven","Heven","eight");