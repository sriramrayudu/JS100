//IMMEDIATELY INVOKED FUNCTION EXRESSIONS first paranthesis for fun definition second for invoking
(function chai(){
    //named iffe
    console.log(`DB connected`)
})();
//use semicolon for ending the function in iffe
(function chaiCode(){
    console.log(`DB connected two`)
})();
( (name) => {
    //unnamed iffe
    console.log(`DB CONNECTED TWO ${name}`);
} )('sriram')

