function sayMyName(){
    console.log("sriram");
}
//sayMyName()
function sum(num1,num2){
    console.log(num1+ num2);
}
//const result=sum(3,5)
function login(username){
    return `${username} just logged in`
}
//console.log(login("sriram"))
//rest and spread operator
function calculateCartPrice(...num1){
    return num1

}
//console.log(calculateCartPrice(8,68,5967,88))
const user={
    username: "sriram",
    price:69
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)