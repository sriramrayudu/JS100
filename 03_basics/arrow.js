// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }

// }

//console.log(this)
// function chai(){
//     let username="sriram"
//     console.log(this)
// }
// chai()// output undefined
// const chai = function(){
//     let username="sriram"
//     console.log(this.username)

// }
// chai()// output undefined
//+++++++++++++++++++++++++++++++
//Arrow function
// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(77,77))
//another ways
//const addTwo=(num1,num2)=> num1+num2
const addTwo=(num1,num2)=>(num1+num2)
console.log(addTwo(77,77))