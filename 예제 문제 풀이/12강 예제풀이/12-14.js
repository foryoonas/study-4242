var add1=(function() {
    var a=10;
    return function(x,y) {
        return x+y+a;
    };
}());
console.log(add1(1,2));

//Function 함수와  생성자 함수로 생성한 함수가 동일하게 동작하지 않는다.
var add2 =(function() {
    var a=10;
    return new Function('x','y','return x+y+a;');
}());

console.log(add2(1,2));