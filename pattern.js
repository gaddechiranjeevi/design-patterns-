let square = (a) => {
    return a*a;
};
console.log(square());
let mul = (a,b) => {
    return a*b
};
console.log(mult(2,4));
var x= function (){
    var that = this ;
    this.val = 1;
    setTimer(function(){
        that.val++;
        console.log(that.val)
    },1)
};
var xx =new x();

var x = function(){
    console.log(arguments[0])
};
x(1,2,3);

x=(...n) => {
    console.log(n[0])
}